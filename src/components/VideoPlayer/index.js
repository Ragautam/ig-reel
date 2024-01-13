import { useEffect, useRef, useState, useCallback } from "react";
import Footer from "./Footer";
import ErrorPage from "../ErrorPage";
import volumeIcon from "../../icons/volume.svg";
import StyleWrapper from "./style";

function VideoPlayer({
  userName,
  userAvtarUrl,
  createdAt,
  videoUrl,
  isVideoMuted,
  onPlayerClick,
}) {
  const [error, setError] = useState();
  const videoRef = useRef();

  const playVideo = useCallback(() => {
    videoRef.current.play().catch((err) => setError(err));
  }, []);

  const pauseVideo = useCallback(() => {
    videoRef.current.pause();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([player]) => {
        if (player.intersectionRatio > 0.5) {
          playVideo();
        } else {
          pauseVideo();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [playVideo, pauseVideo]);

  return (
    <StyleWrapper>
      {!!error && <ErrorPage error={error} />}
      {isVideoMuted && (
        <div className="volume-icon">
          <img src={volumeIcon} alt="volume icon" />
        </div>
      )}
      <video
        ref={videoRef}
        className="video-player"
        src={videoUrl}
        muted={isVideoMuted}
        onClick={onPlayerClick}
        loop
        playsInline
      />
      <Footer
        userName={userName}
        userAvtarUrl={userAvtarUrl}
        createdAt={createdAt}
      />
    </StyleWrapper>
  );
}

export default VideoPlayer;
