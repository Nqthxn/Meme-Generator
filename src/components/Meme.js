import memesData from '../memesData';
import React from 'react';

export default function Meme(){

    const [memeImage, setMemeImage] = React.useState();

    function getMemeImage(){
        const memesArray = memesData.data.memes;
        const random = Math.floor(Math.random() * memesArray.length);
        const imgURL = memesArray[random].url;

        setMemeImage(imgURL);
    }
    return(
        <main>
            <div className="form">
                <div className="input-container">
                    <input type="text" className="form-input first-input" placeholder="Top text"/>
                    <input type="text" className="form-input" placeholder="Bottom text"/>
                </div>
                <button className="form-button" onClick={getMemeImage}>Generate Meme 🖼️</button>
            </div>
            <div className="image-container">
                <img src={memeImage} />
            </div>
        </main>
    )
}



