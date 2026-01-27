import { ref } from 'vue'

export type Theme = 'nord' | 'dark'

export function useThemeStore() {
  const savedTheme = localStorage.getItem('theme') as Theme | null
  const theme = ref<Theme>(savedTheme || 'nord')

  const applyTheme = (newTheme: Theme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    theme.value = newTheme
  }

  applyTheme(theme.value)

  const toggleTheme = () => {
    const newTheme = theme.value === 'dark' ? 'nord' : 'dark'
    applyTheme(newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}
