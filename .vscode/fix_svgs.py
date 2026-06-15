import os
import glob

target_dir = os.path.join("content", "z1-Assets")

pattern = os.path.join(target_dir, "**", "*.svg")

injection = "\n  <style>:root { color-scheme: light dark; }</style>"

for filepath in glob.glob(pattern, recursive=True):
    with open(filepath, 'r+', encoding='utf-8') as f:
        content = f.read()
        
        if 'color-scheme: light dark' not in content:
            svg_tag_end = content.find('>') + 1
            updated_content = content[:svg_tag_end] + injection + content[svg_tag_end:]
            
            f.seek(0)
            f.write(updated_content)
            f.truncate()
            print(f"Fixed: {filepath}")