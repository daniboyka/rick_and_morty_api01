//es una API de rick and morti q tengo q terminar

import React from "react";

import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  console.log('data===============>',data)

  const onSearch = () => {
    fetch("https://rickandmortyapi.com/api/character/")
   .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    onSearch();
  }, []);

  return <div>

  {data.map((e,index)=><div key={index}><img alt="" src={e.image} /><p>{e.name}</p></div>)}
  </div>;
};

export default App;