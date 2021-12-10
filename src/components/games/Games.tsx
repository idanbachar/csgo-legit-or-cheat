import { useState } from "react";
import { IGame } from "./IGame";

const Games = ({ games, visible = true }: { games: IGame[], visible?: boolean }) => {

    const [isVisible, setIsVisible] = useState(visible)

    return (
        <div>
            <ul>
                {isVisible && games.map(game =>
                    <li>{game.name}</li>)}
            </ul>
        </div>
    )
}

export default Games;