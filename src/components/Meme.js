export default function Meme(){
    return(
        <main>
            <form className="form">
                <input type="text" className="form-input" placeholder="Top text"/>
                <input type="text" className="form-input" placeholder="Bottom text"/>
                <button className="form-button">Generate Meme 🖼️</button>
            </form>
        </main>
    )
}