// ! ========== useCallback() ==============

import React from "react";

const TitleComponent = props => {
  console.log("I am Title Component");
  return <h2>I am {props.children}</h2>;
};

export default React.memo(TitleComponent);
