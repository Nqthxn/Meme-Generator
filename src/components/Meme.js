import React from 'react';

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/43a45p.png"
    });

    const [allMemeImages, setAllMemeImages] = React.useState([]);

    const url = "https://api.imgflip.com/get_memes";
    React.useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes));

    }, []);

    function getMemeImage(){
        const memesArray = allMemeImages;
        const random = Math.floor(Math.random() * memesArray.length);
        const imgURL = memesArray[random].url;

        setMeme(prevMeme => ({...prevMeme, randomImage: imgURL}));
    } 

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme, 
            [name] : value
        }));
    }

    return(
        <main>
            <div className="form">
                <div className="input-container">
                    <input 
                        type="text" 
                        className="form-input first-input"
                        placeholder="Top text"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                    <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Bottom text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                <button className="form-button" onClick={getMemeImage}>Generate Meme 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
           
        </main>
    )
}










