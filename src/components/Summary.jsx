import React from "react";

const Summary = ({ setShowData }) => {
  return (
    <div>
      <p>{setShowData?.show?.summary}</p>
    </div>
  );
};

export default Summary;
