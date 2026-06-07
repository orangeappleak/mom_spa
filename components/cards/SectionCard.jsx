import React from "react";

function SectionCard(props) {
  return (
    <>
      <div className="rounded-2xl bg-amber-200 p-5 flex flex-col justify-start">
        <h1 className="font-garamond text-3xl text-black">{props.title}</h1>
        <p className="font-garamond text-gray-600/80 font-bold">{props.body}</p>
        <img src={props.imgurl} alt="Preview" />
      </div>
    </>
  );
}

export default SectionCard;
