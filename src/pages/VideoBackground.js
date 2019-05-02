import React, { Component } from "react";
import VideoCover from "react-video-cover";

class VideoBackground extends Component {
  state = {
    resizeNotifier: () => {}
  };
  render() {
    const videoOptions = {
      src:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      autoPlay: true,
      loop: true,
      muted: true
    };
    const style = {
      width: "150vw",
      height: "150vh",
      position: "fixed",
      margin: "auto",
      top: "-25vh",
      left: "-25vw",
      zIndex: -2,
      opacity: "0.85"
    };
    return (
      <div style={style}>
        <VideoCover
          videoOptions={videoOptions}
          remeasureOnWindowResize
          getResizeNotifier={resizeNotifier => {
            this.setState({
              resizeNotifier
            });
          }}
        />
      </div>
    );
  }
}
export default VideoBackground;
