export default function navbar() {
  return {
    logo: 'ConvertEUR',
    menu: [
      { label: 'Converter', href: '#converter' },
      { label: 'Chart', href: '#tracker' },
      { label: 'About', href: '#about' }
    ],
    open: false, // responsive menu

    // light or dark theme
    toggleTheme() {
      this.$store.theme.toggle() 
    },

    // scroll to id
    scrollTo(hash) {
      const target = document.querySelector(hash)
      if (!target) return

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    },

    // scroll to top
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },

    // responsive menu
    toggleMenu() {
      this.open = !this.open
    },

    closeMenu() {
      this.open = false
    },

  }
}
