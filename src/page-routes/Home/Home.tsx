import styles from './home.module.css';
import SearchBox from "../../components/search-box/SearchBox";
import { useState } from 'react';
import { getSteamId, getUser } from '../../services/steam';

const Home: React.FC = () => {
    const [friendsCount, setFriendsCount] = useState<number>(0);

    const handleSearch = async (steamUrl: string) => {
        console.log(await getUser(steamUrl));
    }

    return (
        <div>
            <div className={styles.searchBar}>
                <div className={styles.searchBox}>
                    <SearchBox searchButton={handleSearch} />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Home;