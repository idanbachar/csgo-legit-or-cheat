import CSGOStats from "../csgo-stats/CSGOStats";
import Games from "../games/Games";
import { IPlayer } from "./IPlayer";
import styles from "./player.module.css";

const Player = ({ data }: { data: IPlayer }) => {

    const total_games = data.games.length;
    const total_friends = data.friendslist.length;
    const account_created_year = new Date(data.timecreated * 1000).getFullYear();
    const account_age = new Date().getFullYear() - account_created_year;

    return (
        <>
            <div className={styles.container}>
                <div className={styles.avatar}>
                    <img src={data.avatarfull} className={styles.profileImg} />
                </div>
                <div className={styles.profileInfo}>
                    <div className={styles.name}>
                        <a href={data.profileurl} target="_blank">
                            <strong>{data.loccountrycode} | {data.personaname}, {data.realname}</strong>
                        </a>
                    </div>
                    <h3>Profile info</h3>
                    <div>Owned Games: {total_games}</div>
                    <div>Total Friends: {total_friends}</div>
                    <div>Member Since: {account_created_year} ({account_age} Years)</div>
                </div>
            </div>
            <div className={styles.csgoStats}>
                <CSGOStats
                    achievements={data.csgo_stats.achievements}
                    stats={data.csgo_stats.stats}
                />
            </div>
        </>
    )
}

export default Player;