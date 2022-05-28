import React from "react";
import ConfettiGenerator from "confetti-js";

export default function confetti() {
  const [active, setActive] = React.useState(true);

  React.useEffect(() => {
    const confettiSettings = {
      target: "confetti-holder",
      max: "80",
      size: "1",
      animate: true,
      props: [
        "circle",
        "square",
        "triangle",
        "line",
        { type: "svg", src: "salim.png", size: 25, weight: .2 },
      ],
      colors: [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126],
      ],
      clock: "25",
      rotate: false,
      width: "400",
      height: "400",
      start_from_edge: false,
      respawn: true,
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    
    if (active){
    confetti.render();
    }
    return () => confetti.clear();
  }, [active]); // add the var dependencies or not

  return (
    <>
      <label class="switch">
        <input
          type="checkbox"
          onClick={() => setActive((prevVal) => !prevVal)}
        ></input>
        <span class="slider round"></span>
      </label>

      <canvas id="confetti-holder" className="z-0">

      <div className="bg-white w-400 h-200 z-1">test</div>
      </canvas>
    </>
  );
}
