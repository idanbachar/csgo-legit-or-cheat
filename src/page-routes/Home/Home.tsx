import styles from './home.module.css';
import SearchBox from "../../components/search-box/SearchBox";
import { useState } from 'react';
import { getGames, getUser } from '../../services/steam';
import { IPlayer } from '../../components/player/IPlayer';
import Player from '../../components/player/Player';

const Home: React.FC = () => {
    const [player, setPlayer] = useState<IPlayer>();

    const handleSearch = async (steamUrl: string) => {
        const user = await getUser(steamUrl);
        const games: any = await getGames(user.steamid);
        const steamPlayer = { ...user, games }
        setPlayer(steamPlayer);
    }

    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <h1>CS:GO - Legit? or Cheat?</h1>
                <SearchBox
                    defaultValue={"https://steamcommunity.com/id/Assassin1BK"}
                    searchButton={handleSearch} />

                {player && <Player data={player} />}
            </div>
        </div>
    )
}

export default Home;