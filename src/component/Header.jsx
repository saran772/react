import { useState } from "react";
import "./Header.css";
import HeaderPage from "./HeaderPage";
export const Header = () => {
  const [data, setData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });
  console.log("data.....", data);
  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};
