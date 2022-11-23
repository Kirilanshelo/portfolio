import React from 'react';
import Form from 'react-bootstrap/Form';

const ThemeButton = (props) => {
  const {mode, setDarkMode} = props;
  console.log(mode)
  return (
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        onClick={() => setDarkMode(!mode)}
      />
    </Form>
  )
}

export default ThemeButton;