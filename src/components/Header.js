import React from "react";

function Header({likes, fontColor, fontSize}) {

    return(
        <div className="header">
            <h1>Nagłówek</h1>
            <p>Aktualny rozmiar czcionki: <strong>{fontSize}px</strong></p>
            <p>Aktualny kolor czcionki: <strong>{fontColor}</strong></p> <p>
            Liczba lajków: <strong>{likes}</strong></p>
        </div>
    )
}
export default Header