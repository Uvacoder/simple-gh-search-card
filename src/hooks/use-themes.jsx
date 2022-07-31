import { useEffect, useState } from "react"

export const useThemes = () => {
  const [theme, setTheme] = useState("dark")

  const setMode = mode => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  const handleToggle = () => {
    if (theme === "dark") {
      setMode("light")
    } else {
      setMode("dark")
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")

    if (localTheme) {
      setTheme(localTheme)
    } else {
      setMode("dark")
    }
  }, [])

  return [theme, handleToggle]
}
