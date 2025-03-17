// ! ========== useCallback() ==============

import React from "react";

const ButtonComponent = props => {
  console.log(`I am Button Component - ${props.children}`);
  //   console.log(props);
  return <button onClick={props.fn}>{props.children}</button>;
};

export default React.memo(ButtonComponent);
