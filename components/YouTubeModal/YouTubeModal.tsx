'use client';

import { createPortal } from 'react-dom';
import styles from './youTubeModal.module.css';
import YouTube, { YouTubeProps } from 'react-youtube';
import { ModalContext } from '@/context/modal.context';
import { useContext } from 'react';
import CrossIcon from '../CrossIcon/CrossIcon';

const YouTubeModal = () => {
  const { state, dispatch } = useContext(ModalContext);

  const onReady = (event: any) => {
    const player = event.target;
    if (state.list) {
      player.loadPlaylist(state.list);
      player.playVideo();
    }
  };

  const onError = (error: any) => {
    console.error('YouTube Player Error:', error);
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
              opts={opts}
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default YouTubeModal;
