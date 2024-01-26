import { swiggyApi } from "./constant";
import { useState, useEffect } from "react";


//! API WORK OF THE SWIGGY DATA

const useSwiggyData = () => {


  const [dataOne, setData] = useState([]);
  const [clone, setClone] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    const response = await fetch(`${swiggyApi}`);
    const responseData = await response.json();
    setData(
      responseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setClone (
      responseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    )
  }

  return {dataOne, search, setSearch, clone, setData};
};


export default useSwiggyData;