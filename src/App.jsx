import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFacts(data.facts))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#6D94C5]">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 justify-items-center">
        {facts.map((fact, index) => (
          <Card
            key={fact.id}
            number={index + 1}
            title={fact.title}
            text={fact.text}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
