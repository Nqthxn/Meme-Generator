import troll from '../Images/troll-icon.png';

export default function Header(){
    return(
        <header className="header-container">
            <img src={troll} className="troll-icon"/>
            <span className="header-title">Meme Generator</span>
        </header>
    );
}
