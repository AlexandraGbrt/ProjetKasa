import React from "react";

const Tag = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return <div>Aucun tag</div>;
  }

  return (
    <ul className="tag">
      {tags.map((tag, index) => (
        <li key={index}>
          <p>{tag}</p>
        </li>
      ))}
    </ul>
  );
};

export default Tag;
