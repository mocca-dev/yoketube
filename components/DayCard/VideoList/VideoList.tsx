'use client';
import { HTMLAttributes, useEffect, useState } from 'react';
import styles from './videoList.module.css';
import VideoItem from './VideoItem/VideoItem';

interface VideoListProps extends HTMLAttributes<HTMLDivElement> {
  list: string[];
}

const VideoList = ({ list }: VideoListProps) => {
  const [videoList, setVideoList] = useState<any>();

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
      {videoList &&
        videoList.map((video: any) => (
          <VideoItem key={video.url} data={video} />
        ))}
    </div>
  );
};

export default VideoList;
