import React from "react";

export default function Meme(){
    return(
        <div className="form">
            <form action="">
                <div className="form--input">
                    <input className="form--input-1"type="text" placeholder="Titulo"/>
                    <input type="text" placeholder="Subtitilo" />
                </div>
                <input className="btn" type="button" value="Gerar uma nova imagem de meme." />
                <img className="form--img"src="memeimg.png" alt="" />
            </form>
            
        </div>
    )
}