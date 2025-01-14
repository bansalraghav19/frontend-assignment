import React, { PropsWithChildren, memo } from 'react';

import styles from './Table.module.css';

const Table = ({ children }: PropsWithChildren) => {
  return <table className={styles.customTable}>{children}</table>;
};

export default memo(Table);
