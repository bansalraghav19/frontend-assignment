import React, { PropsWithChildren, memo } from 'react';

import styles from '../Table.module.css';

const TableRow = ({ children }: PropsWithChildren) => {
  return <tr className={styles.tableRow}>{children}</tr>;
};

export default memo(TableRow);
