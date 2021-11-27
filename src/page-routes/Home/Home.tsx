import styles from './home.module.css';
import SearchBox from "../../components/search-box/SearchBox";
import { FaSearch } from 'react-icons/fa';
import { getUser } from '../../services/getUser';

const Home: React.FC = () => {



    return (
        <div>
            <div className={styles.searchBar}>
                <div className={styles.searchBox}>
                    <SearchBox onClick={(userId) => {
                        getUser(userId).then((data) => {
                            alert(data)
                        });
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Home;