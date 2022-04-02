export const songsReducer = () => {
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

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
