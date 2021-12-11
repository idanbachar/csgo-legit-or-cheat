import styles from './home.module.css';
import SearchBox from "../../components/search-box/SearchBox";
import { useState } from 'react';
import { getCSGOStats, getFriends, getGames, getUser } from '../../services/steam';
import { IPlayer } from '../../components/player/IPlayer';
import Player from '../../components/player/Player';
import CSGOStats from '../../components/csgo-stats/CSGOStats';

const Home: React.FC = () => {
    const [player, setPlayer] = useState<IPlayer>();

    const handleSearch = async (steamUrl: string) => {
        const user = await getUser(steamUrl);
        const games = await getGames(user.steamid);
        const friendslist = await getFriends(user.steamid);
        const csgo_stats = await getCSGOStats(user.steamid);

        const steamPlayer = { ...user, games, friendslist, csgo_stats }
        setPlayer(steamPlayer);
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>CS:GO - Legit? or Cheat?</h1>
            </div>
            <div className={styles.searchBox}>
                <SearchBox
                    defaultValue={"https://steamcommunity.com/id/Assassin1BK"}
                    searchButton={handleSearch}
                />
            </div>
            <div className={styles.player}>
                {player && <Player data={player} />}
            </div>
        </div>
    )
}

export default Home;