import React, { useState } from "react";

const ShowCard = ({ data }) => {
  // const navigate = useNavigate();
  // const handleClickSummary = () => {
  // navigate("/Summary");
  // };
  const [summaryShow, setSummaryShow] = useState(false);

  const handleClickSummary = (e) => {
    e.preventDefault();
    setSummaryShow((current) => !current);
  };
  return (
    <div>
      <div className="show-card-unit">
        <img src={data?.show?.image?.medium} alt="poster" className="poster" />
        <h2>{data.show.name}</h2>
        <div className="show-details">
          <h4>
            <span className="info">Genre: </span>
            {data?.show?.genres[0]}
          </h4>
          <h4>
            <span className="info">Language: </span>
            {data?.show?.language}
          </h4>
          <h4>
            <span className="info">Runtime: </span>
            {data?.show?.runtime} min
          </h4>
          <h4>
            <span className="info">Rating: </span>
            {data?.show?.rating?.average}/10
          </h4>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={handleClickSummary}>
            Summary
          </button>
          {summaryShow && <div className="summary">{data?.show?.summary}</div>}
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
