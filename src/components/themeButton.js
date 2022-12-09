import React, { useContext, useEffect } from 'react';
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
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        onClick={handleToggleTheme}
      />
    </Form>
  )
}

export default ThemeButton;