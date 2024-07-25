import memesData from '../memesData';

export default function Meme(){
    function getMemeImage(){
        const len = memesData.data.memes.length;
        const random = Math.floor(Math.random() * len);
        console.log(memesData.data.memes[random].url);
    }

    return(
        <main>
            <div className="form">
                <input type="text" className="form-input" placeholder="Top text"/>
                <input type="text" className="form-input" placeholder="Bottom text"/>
                <button className="form-button" onClick={getMemeImage}>Generate Meme 🖼️</button>
            </div>
        </main>
    )
}