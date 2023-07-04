import { useState, useEffect } from 'react';

const useVideoList = (list: string[]) => {
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

  return videoList;
};

export default useVideoList;
