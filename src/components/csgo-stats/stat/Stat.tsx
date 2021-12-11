import { IStat } from "./IStat";
import styles from "./stat.module.css";

const Stat = ({ stat }: { stat: IStat }) => {

    return (
        <div className={styles.container}>
            <div className={styles.label}>{stat.name}</div>
            <div className={styles.label}>{stat.value}</div>
            <div>SUS</div>
        </div>
    )
}

export default Stat;