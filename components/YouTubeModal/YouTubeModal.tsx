'use client';

import { createPortal } from 'react-dom';
import styles from './youTubeModal.module.css';
import YouTube, { YouTubeProps } from 'react-youtube';
import { ModalContext } from '@/context/modal.context';
import { useContext, useState } from 'react';
import CrossIcon from '../CrossIcon/CrossIcon';

const YouTubeModal = () => {
  const { state, dispatch } = useContext(ModalContext);

  const onReady = (event: any) => {
    const player = event.target;
    const currentIndex = state.playedList[state.currentDay].length - 1;

    if (state.list) {
      player.loadPlaylist(state.list, currentIndex);
      player.playVideo();
    }
  };

  const onError = (error: any) => {
    console.error('YouTube Player Error:', error);
  };

  const onEnd = (event: any) => {
    if (event.data === -1) {
      dispatch({
        type: 'SET_PLAYED',
        payload: event.target.getPlaylistIndex(),
      });
    }
  };

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      {state.show &&
        createPortal(
          <div className={styles.container}>
            <button
              className={styles.closeBtn}
              onClick={() => dispatch({ type: 'HIDE' })}
            >
              <CrossIcon />
            </button>
            <YouTube
              className={styles.player}
              videoId={state?.list[0]}
              onReady={onReady}
              onError={onError}
              onStateChange={onEnd}
              opts={opts}
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default YouTubeModal;
