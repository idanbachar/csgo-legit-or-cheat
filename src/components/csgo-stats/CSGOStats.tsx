import { IAchievement } from "./IAchievement";
import { IStat } from "./IStat";
import styles from "./csgo-stats.module.css";
import StatData from "./stat-data/StatData";

const CSGOStats = ({ achievements, stats }: { achievements: IAchievement[], stats: IStat[] }) => {

    return (
        <div className={styles.column}>
            <div className={styles.title}>
                <h2>CS:GO Stats:</h2>
            </div>
            <div >
                <div>
                    {stats.map((stat, key) => <StatData
                        key={key}
                        stat={stat}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default CSGOStats;