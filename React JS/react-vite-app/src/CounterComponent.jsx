// ! ========== useCallback() ==============

import React from "react";

const CounterComponent = props => {
  console.log(`I am Counter Component - ${props.children}`);
  //   console.log(props);
  return (
    <>
      <h2>
        {props.children} - {props.data}
      </h2>
    </>
  );
};

export default React.memo(CounterComponent);
