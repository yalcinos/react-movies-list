// Detail of each row of element (style and send data)
import React from "react";

const MovieImage = (props) => {
  const { imgUrl } = props;
  console.log(imgUrl);
  const imgBaseURL = "https://image.tmdb.org/t/p/w200" + imgUrl;
  return <img src={imgBaseURL} />;
};

export default MovieImage;
