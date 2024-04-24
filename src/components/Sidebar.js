import React from "react";

function Sidebar({fontColor, fontSize, setFontColor, setFontSize, handleFontSizeChangewithPinkColor}) {

    return(
        <div className="sidebar">
            <input type="text" value={fontSize} onChange={(e) => setFontSize(e.target.value)}/>
            <input type="text" value={fontColor} onChange={(e) => setFontColor(e.target.value)}/>
            <button onClick={handleFontSizeChangewithPinkColor}>Ustaw parametry tekstu na 20px i pink.</button>
        </div>
    )
}
export default Sidebar