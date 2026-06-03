const updateHighlight = (hash: string) => {
  document.querySelectorAll('.is-targeted, .is-targeted-toc').forEach((el) => {
    el.classList.remove('is-targeted', 'is-targeted-toc')
  })

  if (hash) {
    try {
      const id = decodeURIComponent(hash).substring(1)
      
      const target = document.getElementById(id)
      if (target) {
        target.classList.add('is-targeted')
      }
      const tocLink = document.querySelector(`.toc a[href="${hash}"]`)
      if (tocLink) {
        tocLink.classList.add('is-targeted-toc')
      }
    } catch (e) {
      // Ignore invalid selectors
    }
  }
}

// Runs every time Quartz loads a new page
document.addEventListener("nav", () => {
  updateHighlight(window.location.hash)

  // Attach a click listener to all internal hash links (like the Explorer)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", () => {
      const hash = anchor.getAttribute("href")
      if (hash) updateHighlight(hash)
    })
  })
})

// Catches if the user clicks the browser's Back/Forward buttons
window.addEventListener("hashchange", () => {
  updateHighlight(window.location.hash)
})
