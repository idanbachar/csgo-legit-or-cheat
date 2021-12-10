import { IGame } from "./IGame";

const Games = ({ games }: { games: IGame[] }) => {
    return (
        <div>
            <ul>
                {games.map(game => <li>{game.name}</li>)}
            </ul>
        </div>
    )
}

export default Games;