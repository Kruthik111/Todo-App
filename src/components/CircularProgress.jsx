import React from "react";

const CircularProgress = ({ completed = 0, total = 0 }) => {
  var per = (completed / total) * 100;
  return (
    // Outer circle
    <div
      className="drop-shadow-xl w-16 h-16 p-2 md:w-20 md:h-20 rounded-full flex justify-center items-center transition-bg-only ease-in-out duration-1000 "
      style={{
        background: `${
          per > 51
            ? `conic-gradient(blue ${3.6 * per}deg, gray ${360 - per * 3.6}deg)`
            : `conic-gradient(gray ${360 - per * 3.6}deg, blue ${per * 3.6}deg)`
        }`,

        transform: `${per < 51 ? "rotateY(180deg)" : ""}`,
      }}
    >
      {/* Inner circle */}
      <div
        className="absoulte w-11 h-11 md:w-16 md:h-16 flex justify-center items-center rounded-full  bg-white font-bold text-xl md:text-2xl"
        style={{
          transform: `${per < 51 ? "rotateY(180deg)" : ""}`,
        }}
      >
        <h1 className="[textShadow:0px_0px_3px_rgb(1_1_1_/_63%)]">
          {Math.round(per)}%
        </h1>
      </div>
    </div>
  );
};

export default CircularProgress;
