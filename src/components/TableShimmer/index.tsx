
import { memo } from 'react';
import styles from './Shimmer.module.css';

const TableShimmer = () => {
  return (
    <div className={styles.shimmerWrapper}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className={styles.shimmerRow}>
          <div className={styles.shimmerCell}></div>
          <div className={styles.shimmerCell}></div>
          <div className={styles.shimmerCell}></div>
        </div>
      ))}
    </div>
  );
};

export default memo(TableShimmer);
