import { menuApi } from "./constant";
import {useState, useEffect} from "react";

const menuList = (resId) => {

    const [list, setList] = useState();

    console.log(list)
    

    const menuData = async () => {
        const response = await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}`)
        const listResponse = await response.json();
        setList(listResponse)
    }

    useEffect (() => {
        menuData();
    }, [])

    return list;
}

export default menuList;