function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
    </button>
  )
}

export default ThemeToggle
