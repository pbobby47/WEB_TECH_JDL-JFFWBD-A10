import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = url => {
  let [state, setState] = useState([]);

  useEffect(() => {
    // code
    let getData = async () => {
      let { data } = await axios.get(url);
      //   console.log(data);

      setState(data);
    };
    getData();
  }, []);

  return state;
};

export default useFetch;
