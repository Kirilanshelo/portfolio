import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from 'react-bootstrap/Form';
import { GlobalContext } from "../context/themeContext";
const ThemeButton = (props) => {
  const { theme, themeSwitchHandler } = useContext(GlobalContext);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function handleToggleTheme() {
    themeSwitchHandler(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className='theme-button'>
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        onClick={handleToggleTheme}
      />
    </Form>
    {theme === 'dark' ?
      <FontAwesomeIcon className={`icon-${theme}`} icon="fa-regular fa-moon" />
      : <FontAwesomeIcon className={`icon-${theme}`} icon="fa-regular fa-sun" />}
    </div>
    )
}

export default ThemeButton;