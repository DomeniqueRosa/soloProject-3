import React from "react";

export default function Meme(props){
    const hand = function(){
        console.log("MEme");
    }
    return(
        <div className="form">
            <form action="">
                <div className="form--input">
                    <input className="form--input-1"type="text" placeholder="Titulo"/>
                    <input type="text" placeholder="Subtitilo" />
                </div>
                <input onClick={hand} className="btn" type="button" value="Gerar uma nova imagem de meme." />
                <img  className="form--img"src="memeimg.png" alt="" />
            </form>
            
        </div>
    )
}