// Detail of each row of element (style and send data)
import React from "react";

const MovieImage = (props) => {
  const { imgUrl } = props;
  const imgBaseURL = "https://image.tmdb.org/t/p/w300" + imgUrl;
  return <img src={imgBaseURL} alt="Images" />;
};

export default MovieImage;
