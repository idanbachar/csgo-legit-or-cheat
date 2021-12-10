import { useState } from 'react';
import styles from './search-box.module.css'

interface Props {
    searchButton: (userId: string) => void;
}

const SearchBox: React.FC<Props> = ({ searchButton }) => {
    const [inputValue, setInputValue] = useState<string>("");

    const isValid = () => {

        let url = inputValue;
        url = url.replace("https://", "");
        if (!url) return false;

        const splitedUrl = url.split("/");

        if (splitedUrl[0] !== "steamcommunity.com") return false;
        if (splitedUrl[1] !== "id" && splitedUrl[2] !== "profiles") return false;

        return true;
    }

    return (
        <>
            <input
                className={styles.searchBox}
                type={"text"}
                placeholder={"Enter steam user url..."}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={() => {
                    if (isValid()) {
                        searchButton(inputValue)
                    }
                }}>
                Search
            </button>
        </>
    )
}

export default SearchBox;