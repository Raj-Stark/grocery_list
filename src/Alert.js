import React, { useEffect } from "react";

const Alert = ({ alertProp, removeAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [list]);
  const { type, msg } = alertProp;

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
