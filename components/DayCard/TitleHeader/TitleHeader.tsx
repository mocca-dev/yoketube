import { HTMLAttributes } from 'react';
import styles from './titleHeder.module.css';

interface TitleHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const TitleHeader = ({ title }: TitleHeaderProps) => (
  <h2 className={styles.container}>{title}</h2>
);

export default TitleHeader;
