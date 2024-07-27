import memesData from '../memesData';
import React from 'react';

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/43a45p.png"
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes;
        const random = Math.floor(Math.random() * memesArray.length);
        const imgURL = memesArray[random].url;

        setMeme(prevMeme => ({...prevMeme, randomImage: imgURL}));
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
                <img src={meme.randomImage} className="meme-image"/>
            </div>
        </main>
    )
}



