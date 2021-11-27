import styles from './home.module.css';
import SearchBox from "../../components/search-box/SearchBox";

const Home: React.FC = () => {
    return(
        <div className={styles.searchBar}>
            <SearchBox />
        </div>
    )
}

export default Home;