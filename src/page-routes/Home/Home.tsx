import styles from './home.module.css';
import SearchBox from "../../components/search-box/SearchBox";
import { useState } from 'react';
import { getUser } from '../../services/steam';
import { IPlayer } from '../../components/player/IPlayer';
import Player from '../../components/player/Player';

const Home: React.FC = () => {
    const [player, setPlayer] = useState<IPlayer>()

    const handleSearch = async (steamUrl: string) => {
        const p: IPlayer = await getUser(steamUrl);
        setPlayer(p);
    }

    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <h1>CS:GO - Legit? or Cheat?</h1>
                <SearchBox
                    defaultValue={"https://steamcommunity.com/id/Assassin1BK"}
                    searchButton={handleSearch} />
                {player &&
                    <Player
                        steamid={player.steamid}
                        avatarfull={player.avatarfull}
                        personaname={player.personaname}
                        realname={player.realname}
                        profileurl={player.profileurl}
                    />
                }
            </div>
        </div>
    )
}

export default Home;