import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  if (!props.song) return <div>Select a Song</div>;

  return (
    <div>
      <h4>Song Details</h4> <p>{props.song.title}</p>
      <p>{props.song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
