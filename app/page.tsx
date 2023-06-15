import styles from './page.module.css';
import DayCard from '@/components/DayCard/DayCard';
import { Video } from '@/types/Types';

type Day = {
  name: string;
  date: string;
  list?: Video[];
};

export default async function Home() {
  const days: Day[] = [
    { name: 'Monday', date: 'Go to today', list: [] },
    {
      name: 'Today workout',
      date: '29 May',
      list: [
        {
          name: '5 MIN WAKE UP CALL ROUTINE TO STAY SHREDDED | Rowan Row',
          author: 'Rowan Row',
          duration: '7:36',
          thumbnailUrl:
            'https://i.ytimg.com/vi/Jn-eYvQcIjA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD2QPv1VvMuB5UVWYGqb1lcBMtn7A',
        },
      ],
    },
    { name: 'Wednesday', date: 'Go to today', list: [] },
    { name: 'Thusday', date: 'Go to today', list: [] },
    { name: 'Friday', date: 'Go to today', list: [] },
    { name: 'Saturday', date: 'Go to today', list: [] },
    { name: 'Sunday', date: 'Go to today', list: [] },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {days &&
          days.map((day) => (
            <DayCard
              key={day.name}
              list={day.list}
              name={day.name}
              date={day.date}
            />
          ))}
      </div>
    </main>
  );
}
