import YouTubeModal from '@/components/YouTubeModal/YouTubeModal';
import styles from './page.module.css';
import Week from '@/components/Week/Week';
import { ModalContextProvider } from '@/context/modal.context';

const Home = () => (
  <main className={styles.main}>
    <ModalContextProvider>
      <YouTubeModal />
      <div className={styles.container}>
        <Week />
      </div>
    </ModalContextProvider>
  </main>
);

export default Home;
