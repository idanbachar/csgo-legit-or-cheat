import styles from './home.module.css';
import SearchBox from "../../components/search-box/SearchBox";
import { useState } from 'react';
import { getFriendsCount, getGameStats } from '../../services/steam';

const Home: React.FC = () => {

    const [friendsCount, setFriendsCount] = useState<number>(0);

    const handleSearch = async (steamId: string) => {
        const friendsCount = await getFriendsCount(steamId);
        setFriendsCount(friendsCount);

        const gameStats = await getGameStats(steamId);
        console.log(gameStats);
    }

    return (
        <div>
            <div className={styles.searchBar}>
                <div className={styles.searchBox}>
                    <SearchBox
                        onClick={handleSearch}
                    />
                </div>
            </div>
            <hr />
            <div>
                <h1>{friendsCount} STEAM FRIENDS</h1>
            </div>
        </div>
    )
}

export default Home;