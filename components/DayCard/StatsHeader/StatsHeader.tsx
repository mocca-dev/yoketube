import { HTMLAttributes } from 'react';
import styles from './statsHeder.module.css';

interface StatsHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const StatsHeader = ({}: StatsHeaderProps) => {
  return (
    <div className={styles.container}>
      <span>
        <div className={styles.statName}>Total</div>
        <div className={styles.statContent}>6 videos - 1hr 32mins</div>
      </span>
      <span>
        <div className={styles.statName}>So far</div>
        <div className={styles.statContent}>2 videos - 16mins</div>
      </span>
    </div>
  );
};

export default StatsHeader;
