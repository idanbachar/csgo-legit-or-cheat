import styles from './search-box.module.css'

const SearchBox: React.FC = () => {
    return (
        <input
            className={styles.searchBox}
            type={"text"}
            placeholder={"Enter steam user url..."}
        />
    )
}

export default SearchBox;