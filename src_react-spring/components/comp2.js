import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

const styles = {
  backgroundColor: "slateblue",
  color: "white",
  padding: "1.5rem",
};

export default function Comp2() {
  const [toggle, setToggle] = useState(false);
  const containerFade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
    // config: config.stiff,
    delay: 1000,
  });

  const textFade = useSpring({
    opacity: toggle ? 0 : 1,
  });

  const toggleText = () => setToggle(!toggle);
  console.log({ toggle });
  return (
    <animated.div style={{ ...styles, ...containerFade }}>
      <h1>Comp 2</h1>
      <animated.p style={textFade}>
        Qui sit velit excepteur cupidatat ex velit deserunt anim et.
      </animated.p>
      <button onClick={toggleText}>Toggle</button>
    </animated.div>
  );
}
