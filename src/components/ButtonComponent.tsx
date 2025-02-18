import React from "react";

const ButtonComponent = ({ title, action }) => {
  return <button onClick={action}>{title}</button>;
};

export default ButtonComponent;
