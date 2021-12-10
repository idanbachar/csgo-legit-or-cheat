import Games from "../games/Games";
import { IPlayer } from "./IPlayer";
import styles from "./player.module.css";

const Player = ({ data }: { data: IPlayer }) => {
    return (
        <div className={styles.container}>
            <div>
                <img src={data.avatarfull}
                    className={styles.profileImg}
                />
            </div>
            <div className={styles.name}>
                <a href={data.profileurl} target="_blank">
                    <strong>{data.personaname} ({data.realname})</strong>
                </a>
            </div>
            {data.games && <Games games={data.games} />}
        </div>
    )
}

export default Player;