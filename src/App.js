import './App.css';
import React, {useState} from "react"

import Footer from './components/Footer';
import Header from './components/Header'
import MainArea from './components/MainArea'
import Sidebar from './components/Sidebar'

function App() {
    const [fontSize, setFontSize] = useState(18);
    const [fontColor, setFontColor] = useState('green');
    const [likes, setLikes] = useState(0);

    const handleFontSizeChangewithPinkColor = () => {
        setFontSize(20);
        setFontColor('pink')
    }

    const handleFooterButtonClick = () => {
        setFontSize(30);
    }

    const handleLikeButtonClick = () => {
        setLikes(prevLikes => prevLikes + 1);
    }

    return (
        <div className="grid-parent">
            <Header
            likes = {likes}
            fontSize = {fontSize}
            fontColor = {fontColor}
            />

            <Sidebar
                fontColor={fontColor}
                fontSize={fontSize}
                setFontSize={setFontSize}
                setFontColor={setFontColor}
                handleFontSizeChangewithPinkColor={handleFontSizeChangewithPinkColor}
            />

            <MainArea
                fontColor={fontColor}
                fontSize={fontSize}
                />

            <Footer
                handleFooterButtonClick = {handleFooterButtonClick}
                handleLikeButtonClick = {handleLikeButtonClick}
                />
        </div>
    )
}

export default App