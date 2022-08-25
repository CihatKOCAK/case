import { useEffect, useState } from "react";
import "./App.css";
import CardComponent from "./components/itemCardComponent";
import { datas } from "./services/apiGet.service";

function App() {
  console.log(datas);
  return (
    <div className="App">
      {datas.map((item, i) => {
        return <CardComponent items={item} key={i} />;
      })}
    </div>
  );
}

export default App;
