'use client';
import { HTMLAttributes, useContext, useEffect, useState } from 'react';
import styles from './videoList.module.css';
import VideoItem from './VideoItem/VideoItem';
import { ModalContext } from '@/context/modal.context';
import LoaderWithText from '@/components/LoaderWithText/LoaderWithText';

interface VideoListProps extends HTMLAttributes<HTMLDivElement> {
  list: string[];
  dayNumber: number;
}

const VideoList = ({ list, dayNumber }: VideoListProps) => {
  const [videoList, setVideoList] = useState<any>();
  const { state } = useContext(ModalContext);

  useEffect(() => {
    const getVideoData = async () => {
      const enhancedList = await Promise.all(
        list.map(async (url: string) => {
          const resp = await fetch(`https://www.youtube.com/oembed?url=${url}`);
          const videoData = await resp.json();
          const { title, author_name, author_url, thumbnail_url } = videoData;
          return {
            title,
            author: { name: author_name, url: author_url },
            thumbnail: thumbnail_url,
            url,
          };
        })
      );
      setVideoList(enhancedList);
    };

    getVideoData();
  }, [list]);

  return (
    <div className={styles.container}>
      {videoList ? (
        videoList.map((video: any, index: number) => (
          <VideoItem
            key={video.url}
            data={video}
            index={index}
            playedList={state.playedList}
            dayNumber={dayNumber}
          />
        ))
      ) : (
        <LoaderWithText text="Searching video data..." />
      )}
    </div>
  );
};

export default VideoList;
