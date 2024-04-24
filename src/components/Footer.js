import React from "react";

function Footer({handleFooterButtonClick, handleLikeButtonClick}) {

    return(
        <footer className="footer">
            <p>
                Stopka <button onClick={handleFooterButtonClick}>Ustaw parametry tekstu na 30px, a kolor pozostaw bez zmian.</button>
            </p>
            <p>
                <button onClick={handleLikeButtonClick}>Polub tę stronę!</button>
            </p>
        </footer>
    )
}
export default Footer