import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// When BubblePages renders, make a GET request to fetch the color data for your bubbles.

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const getData = () => {
    axiosWithAuth()
        .get("http://localhost:5000/api/colors")
        .then(res => {
            console.log('bubbles ', res.data);
            setColorList(
                colorList([...res.data])
            );
        })
        .catch(err => console.log(err.response));
};

// formatData = () => {
//     const formattedData = [];
//     console.log("inFR", this.state.friends);
//     this.state.friends.forEach(friend => {
//         formattedData.push({
//             name: friend.name,
//             age: friend.age,
//             email: friend.email,

//         });
//     });
//     return formattedData;
// };
getData();
return (
  <>
    <ColorList colors={colorList} updateColors={setColorList} />
    <Bubbles colors={colorList} />
  </>
);
};

export default BubblePage;
