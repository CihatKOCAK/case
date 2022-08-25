import { useEffect, useState } from "react";
import "./App.css";
import CardComponent from "./components/itemCardComponent";
import { url } from "./const";
import { getItems } from "./services/apiGet.service";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems(url)
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {items.map((item, i) => {
        return <CardComponent items={item} key={i} />;
      })}
    </div>
  );
}

export default App;
