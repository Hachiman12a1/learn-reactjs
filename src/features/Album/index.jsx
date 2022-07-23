import React from "react";
// import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Special",
      thumbnailUrl:
        "https://avatar-ex-swe.nixcdn.com/playlist/2022/07/22/7/6/b/3/1658457615348.jpg",
    },
    {
      id: 2,
      name: "Beatopia (The Antidote Edition)",
      thumbnailUrl:
        "https://avatar-ex-swe.nixcdn.com/playlist/2022/07/19/f/5/0/c/1658220905621.jpg",
    },
    {
      id: 3,
      name: "Slowed (EP)",
      thumbnailUrl:
        "https://avatar-ex-swe.nixcdn.com/playlist/2022/07/19/f/5/0/c/1658219551704.jpg",
    },
  ];

  return <div>
    <h2>Có thể bạn sẽ thích đấy</h2>
    <AlbumList albumList={albumList}/>
  </div>;
}

export default AlbumFeature;
