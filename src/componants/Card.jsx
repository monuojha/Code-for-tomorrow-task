import React from "react";
import CardImage from "../assets/cardimage.webp";
const Card = ({ post, onRemove }) => {
  return (
    <>
      <div className="  p-4 relative m-2 bg-white flex flex-col 2 rounded">
        <button
          className="text-right font-bold text-red-500  p-2  "
          onClick={() => onRemove(post.id)}
        >
          X
        </button>
        <div className="flex flex-col gap-2">
          <img src={CardImage} alt=" image" />
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold ">{post.title}</h1>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
