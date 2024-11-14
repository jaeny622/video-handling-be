import axios from "axios";
import { useEffect, useState } from "react";

export default function Trending() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("/").then((res) => {
      console.log("res", res.data);
      setData(res.data.pwd);
    });
  }, []);

  return <div>trending {data}</div>;
}
