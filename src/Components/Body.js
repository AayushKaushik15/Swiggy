import { useState } from "react";
import useSwiggyData from "../utils/useSwiggyData";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import status from "../utils/status";

const Body = () => {
  const { dataOne, search, setSearch, clone, setData } = useSwiggyData();

  console.log("asdasd",dataOne)

  const clickHandler = () => {
    const filterData = dataOne.filter((value) => value.info.avgRating > 4);
    setData(filterData);
  };


  const isOnline = status();

  return (
    <div className="body-container">
      <div className="input-box">
        <input
          type="text"
          placeholder="Search food"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
        />
        <i
          class="fa-solid fa-magnifying-glass"
          onClick={() => {
            const filterSearch = clone.filter((value) =>
              value.info.name.toLowerCase().includes(search.toLowerCase())
            );
            setData(filterSearch);
            if (filterSearch.length === 0) {
                <h1>asd</h1>
    }
          }}
        ></i>
      </div>


      <div>
          {
            isOnline ? "" : alert("check your internet connection ")
          }
      </div>

      <div className="filterRestaurants">
        <label>Filter</label> <i class="fa-solid fa-filter"></i>
        <button onClick={clickHandler}>Top Restaurants</button>
      </div>
    

      <div className="card">
        {dataOne.length === 0 ? (
          <Shimmer />
        ) : (
          dataOne.map((value) => 
            <Link to={`/restaurants/${value.info.id}`}>
                <Card cardInfo={value}/> 
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Body;
