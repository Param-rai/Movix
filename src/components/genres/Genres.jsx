import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const Genres = ({ data }) => {
  const { genre } = useSelector((store) => store.home);

  return (
    <div className="genres">
      {data?.map((g) => {
        return (
          <div className="genre" key={g}>
            {genre[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
