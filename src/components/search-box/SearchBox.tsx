import { useState } from 'react';
import styles from './search-box.module.css'

interface Props {
    defaultValue?: string;
    searchButton: (userId: string) => void;
}

const SearchBox: React.FC<Props> = ({ defaultValue, searchButton }) => {
    const [inputValue, setInputValue] = useState<string>(defaultValue || "");

    const isValid = () => {
        if (!inputValue) return false;
        const url = inputValue.replace("https://", "");
        const splitedUrl = url.split("/");
        if (splitedUrl[0] !== "steamcommunity.com") return false;
        if (splitedUrl[1] !== "id" && splitedUrl[1] !== "profiles") return false;
        return true;
    }

    return (
        <>
            <input
                value={inputValue}
                className={styles.searchBox}
                type={"text"}
                placeholder={"Enter steam user url..."}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={() => {
                    if (isValid()) {
                        searchButton(inputValue.replace("https://", ""))
                    }
                }}>
                Search
            </button>
        </>
    )
}

export default SearchBox;