import React, { Component } from "react";
import VideoCover from "react-video-cover";

class VideoBackground extends Component {
  state = {
    resizeNotifier: () => {}
  };
  render() {
    const videoOptions = {
      src:
        "https://scontent-lga3-1.xx.fbcdn.net/v/t39.24130-6/10000000_581534489345116_4930593616827438158_n.mp4?_nc_cat=108&efg=eyJxZV9ncm91cHMiOlsidW5tdXRlZCJdLCJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=scontent-lga3-1.xx&oh=851ed40b7611be765431c0f0aa49da90&oe=5D607093",
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
      zIndex: -2
      // opacity: "0.85"
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
