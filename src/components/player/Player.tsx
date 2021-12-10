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
            <div>
                <div className={styles.name}>
                    <a href={data.profileurl} target="_blank">
                        <strong>{data.loccountrycode} | {data.personaname}, {data.realname}</strong>
                    </a>
                </div>
                <div>Owned Games: {data.games?.length}</div>
                <div>Total Friends: {data.friendslist?.length}</div>
                <div>Member since: {new Date(data.timecreated * 1000).toISOString().split('T')[0]}</div>
            </div>
            {data.games &&
                <Games
                    visible={false}
                    games={data.games} />}
        </div>
    )
}

export default Player;