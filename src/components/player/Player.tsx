import React from "react";
import { IPlayer } from "./IPlayer";
import styles from "./player.module.css";

const Player: React.FC<IPlayer> = ({
    steamid,
    realname,
    avatarfull,
    personaname,
    profileurl
}) => {
    return (
        <div className={styles.container}>
            <div>
                <img src={avatarfull}
                    className={styles.profile}
                />
            </div>
            <div className={styles.name}>
                <a href={profileurl} target="_blank">
                    <strong>{personaname} ({realname})</strong>
                </a>
            </div>
        </div>
    )
}

export default Player;