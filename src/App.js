import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
// import { Route, Routes } from "react-router-dom";
import Summary from "./components/Summary";
import ShowCard from "./components/ShowCard";

function App() {
  const [showData, setShowData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setShowData(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="show-card">
        {showData.map((data, i) => (
          <ShowCard key={i} data={data} />
        ))}
        <Summary setShowData={setShowData} />
      </div>
    </div>
  );
}

export default App;
