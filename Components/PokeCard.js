import React, { useState } from "react";
import Description from "./Description";

const PokeCard = (props) => {
  const {
    id,
    name,
    image,
    type,
    height,
    weight,
    stat1,
    stat2,
    stat3,
    stat4,
    stat5,
    stat6,
    bs1,
    bs2,
    bs3,
    bs4,
    bs5,
    bs6,
  } = props;

  const style = ` ${type}`;
  const [show, setShow] = useState(false);

  return (
    <div
      className={`${style} flex flex-col justify-center items-center w-40 p-4 rounded-3xl border-solid border-1 border-black-900 shadow-lg my-1`}
    >
      <p className="border-solid border-slate-900 rounded-2xl p-1 my-1 text-sm ">
        #0{id}
      </p>
      <img src={image} alt={name} className="h-28 w-28 my-1" />
      <div className="mt-1 text-center">
        <h3 className="underline text-lg">{name.toUpperCase()}</h3>
        <small>
          Type :<span className="uppercase"> {type}</span>
        </small>
      </div>
      <button
        className="px-1.5  py-2 rounded-lg my-2 bg-gradient-to-br from-[#2af598] to-[#009efd] hover:bg-gradient-to-br hover:from-[#ddd6f3] hover:to-[#faaca8] hover:via-[#faaca8]"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Know less..." : "Know more..."}
      </button>
      {show === true ? (
        <Description
          weightpok={weight}
          heightpok={height}
          pokstat1={stat1}
          pokstat2={stat2}
          pokstat3={stat3}
          pokstat4={stat4}
          pokstat5={stat5}
          pokstat6={stat6}
          posbs1={bs1}
          posbs2={bs2}
          posbs3={bs3}
          posbs4={bs4}
          posbs5={bs5}
          posbs6={bs6}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default PokeCard;
