import axios from "axios";
import { useEffect } from "react";

export default function Trending() {
  useEffect(() => {
    axios.get("/").then((data) => {
      console.log(data);
    });
  }, []);

  return <div>trending</div>;
}
