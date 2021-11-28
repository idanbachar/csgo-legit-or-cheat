import { useState } from 'react';
import styles from './search-box.module.css'

interface Propable {
    onClick: (userId: string) => void;
}

const SearchBox: React.FC<Propable> = ({ onClick }) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <input
                className={styles.searchBox}
                type={"text"}
                placeholder={"Enter steam user url..."}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={() => onClick(inputValue)}>
                Search
            </button>
        </>
    )
}

export default SearchBox;