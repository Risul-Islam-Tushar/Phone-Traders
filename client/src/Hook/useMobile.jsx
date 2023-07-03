import { useEffect } from "react";
import { useState } from "react";

const useMobile = () => {
  const [mobile, setMobile] = useState([]);
  useEffect(() => {
    fetch("mobile.json")
      .then((res) => res.json())
      .then((data) => setMobile(data));
  }, []);
  return [mobile];
};

export default useMobile;
