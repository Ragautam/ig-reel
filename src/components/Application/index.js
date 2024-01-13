import { useState } from "react";
import Loader from "../Loader";
import ErrorPage from "../ErrorPage";
import VideoPlayer from "../VideoPlayer";
import useQuery from "../../hooks/useQuery";
import { DATA_ENDPOINT } from "../../configs/constants";
import StyleWrapper from "./style";

function App() {
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const { loading, error, data } = useQuery({ api: DATA_ENDPOINT });

  const onPlayerClick = () => {
    setIsVideoMuted((pre) => !pre);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <StyleWrapper className="app">
      {data.map(({ uploadedByName, uploadedByAvatar, createdAt, url }) => (
        <VideoPlayer
          key={url}
          userName={uploadedByName}
          userAvtarUrl={uploadedByAvatar}
          createdAt={createdAt}
          videoUrl={url}
          isVideoMuted={isVideoMuted}
          onPlayerClick={onPlayerClick}
        />
      ))}
    </StyleWrapper>
  );
}

export default App;
