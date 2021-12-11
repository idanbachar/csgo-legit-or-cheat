import { IAchievement } from "./achievement/IAchievement";
import { IStat } from "./stat/IStat";
import styles from "./csgo-stats.module.css";
import Stat from "./stat/Stat";

const CSGOStats = ({ achievements, stats }: { achievements?: IAchievement[], stats?: IStat[] }) => {

    const relevantStats = [
        "total_kills",
        "total_deaths",
        "total_time_played",
        "total_wins",
        "total_kills_deagle",
        "total_kills_headshot",
        "last_match_kills",
        "last_match_deaths",
        "last_match_mvps",
        "total_mvps"
    ];

    stats = stats?.filter(stat => relevantStats.includes(stat.name));

    return (
        <div className={styles.column}>
            <div className={styles.title}>
                <h2>CS:GO Stats:</h2>
            </div>
            <div >
                <div>
                    {stats && stats.map((stat, key) =>
                        <Stat
                            key={key}
                            stat={stat}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default CSGOStats;