import React, { useState } from "react";
import data from "./memeData";

export default function Meme() {
  const [image, setImage] = useState("");

  function getImage(e) {
    e.preventDefault();
    const arrayData = data.data.memes
    const numeroRandom = Math.floor(Math.random() * arrayData.length)
    const meme = arrayData[numeroRandom].url
    setImage(meme)
    console.log(setImage)
    
  }

  return (
    <div className="form">
      <form action="">
        <div className="form--input">
          <input className="form--input-1" type="text" placeholder="Titulo" />
          <input type="text" placeholder="Subtitilo" />
        </div>
        <button onClick={getImage} className="btn">
          Gerar uma nova imagem de meme.
        </button>
      </form>
      <img src={image} alt="" className="form--img" />
    </div>
  );
}