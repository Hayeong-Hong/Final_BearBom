import "../css/thumb.css";
import Box from "../PageComponents/Box";
import { useState } from "react";

const choice = {
  img1: {
    name: "img1",
    img: process.env.PUBLIC_URL + require("../img/psy.jpeg"),
  },
  img2: {
    name: "img2",
    img: process.env.PUBLIC_URL + require("../img/img2.jpeg"),
  },
  img3: {
    name: "img3",
    img: process.env.PUBLIC_URL + require("../img/img2.jpeg"),
  },
};

function Thumb() {
  const [userSelect, setUserSelect] = useState(choice.img1);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className="main">
        <Box item={userSelect} />
      </div>
      <div className="main">
        <input
          className="btn"
          onClick={() => play("img1")}
          type="image"
          src={require("../img/psy.jpeg")}
          alt="1번째 사진"
        ></input>
        <input
          className="btn"
          onClick={() => play("img2")}
          type="image"
          src={require("../img/img2.jpeg")}
          alt="2번째 사진"
        ></input>
        {/** test 입니다. */}
        <input
          className="btn"
          onClick={() => play("img3")}
          type="image"
          src={require("../img/img2.jpeg")}
          alt="3번째 사진"
        ></input>
      </div>
    </div>
  );
}

export default Thumb;
