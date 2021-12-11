import { IStat } from "../IStat";
import styles from "./stat-data.module.css";

const StatData = ({ stat }: { stat: IStat }) => {

    return (
        <div className={styles.container}>
            <div className={styles.label}>{stat.name}</div>
            <div className={styles.label}>{stat.value}</div>
            <div>V</div>
        </div>
    )
}

export default StatData;