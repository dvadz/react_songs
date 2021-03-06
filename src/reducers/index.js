import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05",
    },
    {
      title: "Superman",
      duration: "3:39",
    },
    {
      title: "All Star",
      duration: "4:04",
    },
    {
      title: "Baby Shark",
      duration: "1:59",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
