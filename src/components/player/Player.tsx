import { checkAccountAge, checkFriendsCount, checkGamesCount } from "../../services/cheat-indication/CheatIndication";
import CSGOStats from "../csgo-stats/CSGOStats";
import { IPlayer } from "./IPlayer";
import styles from "./player.module.css";

const Player = ({ data }: { data: IPlayer }) => {
    const isGamesCountSus = checkGamesCount(data?.games);
    const isFriendsCountSus = checkFriendsCount(data?.friendslist);
    const isAccountAgeSus = checkAccountAge(new Date(data.timecreated * 1000));

    return (
        <>
            <div className={styles.container}>
                <div className={styles.avatar}>
                    <img src={data.avatarfull} className={styles.profileImg} />
                </div>
                <div className={styles.profileInfo}>
                    <div className={styles.name}>
                        <strong>
                            <a href={data.profileurl} target="_blank">
                                {data.loccountrycode} | {data.personaname} {data.realname ? `(${data.realname})` : ""}
                            </a>
                        </strong>
                    </div>
                    <h3>Profile info</h3>
                    <div>
                        Owned Games:
                        <span
                            className={isGamesCountSus ?
                                styles.suspicious :
                                styles.normal
                            }>
                            {data.games?.length}
                        </span>
                    </div>
                    <div>
                        Total Friends:
                        <span
                            className={isFriendsCountSus ?
                                styles.suspicious :
                                styles.normal
                            }>
                            {data.friendslist?.length}
                        </span>
                    </div>
                    <div>Member Since:
                        <span
                            className={isAccountAgeSus ?
                                styles.suspicous :
                                styles.normal
                            }>
                            {new Date(data.timecreated * 1000).getFullYear()}
                        </span>
                    </div>
                    <div>VAC Status:
                        <span
                            className={data.vac ?
                                (data.vac.VACBanned ? styles.suspicious : styles.normal) : ""
                            }>
                            {data.vac && data.vac.VACBanned ? " Banned" : " Legit"}
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.csgoStats}>
                <hr />
                {data.csgo_stats ?
                    <CSGOStats
                        achievements={data.csgo_stats.achievements}
                        stats={data.csgo_stats.stats}
                    /> :
                    <div>
                        <h2 style={{ color: "red" }}>CS:GO Stats are not available for this user.</h2>
                    </div>}
            </div>
        </>
    )
}

export default Player;