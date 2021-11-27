import { useState } from 'react';
import styles from './search-box.module.css'

interface Propable {
    onClick: (userId: string) => void;
}

const SearchBox: React.FC<Propable> = ({ onClick }) => {
    const apiKey = 'BDF8FD5D6407E3F62042047D2858D948';
    const domainName = "csgo-legit-or-cheat";
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
                onClick={async() => {
                    const res = await fetch("https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=440&count=3&key=BDF8FD5D6407E3F62042047D2858D948", {mode: "cors"});
                    const data = await res.json();
                    console.log(data);
                }}>
                Search
            </button>
        </>
    )
}

export default SearchBox;