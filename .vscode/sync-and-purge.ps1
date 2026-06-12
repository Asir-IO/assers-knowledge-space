if (Test-Path "$PSScriptRoot\..\.env") {
    foreach ($line in Get-Content "$PSScriptRoot\..\.env") {
        if ($line -match '^([^=]+)=(.*)$') {
            $name = $matches[1].Trim()
            $value = $matches[2].Trim()
            [Environment]::SetEnvironmentVariable($name, $value, "Process")
        }
    }
}
$CF_API_TOKEN = $env:CF_API_TOKEN
$ZONE_ID   = $env:ZONE_ID
$R2_BASE   = $env:R2_BASE

# Sync and capture which files were transferred
$output = rclone sync content\z1-Assets R2:knowledge-space/knowledgespace/z1-Assets/ -v 2>&1

# Extract copied/updated files from rclone output
$changed = $output | Select-String "Copied|Updated" | ForEach-Object {
    $file = ($_ -replace '.*INFO  : ', '' -replace ': Copied.*', '' -replace ': Updated.*', '').Trim()
    "$R2_BASE/z1-Assets/$file"
}

if ($changed.Count -eq 0) {
    Write-Host "Nothing changed, no purge needed."
    exit
}

Write-Host "Purging $($changed.Count) files..."

$body = @{ files = @($changed) } | ConvertTo-Json

Invoke-RestMethod `
  -Uri "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/purge_cache" `
  -Method POST `
  -Headers @{ "Authorization" = "Bearer $CF_API_TOKEN"; "Content-Type" = "application/json" } `
  -Body $body