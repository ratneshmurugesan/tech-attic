import React from "react";
import { useSpring, animated } from "react-spring";

const styles = {
  backgroundColor: "steelblue",
  color: "white",
  padding: "1.5rem",
};

export default function Comp1() {
  const springProps = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -500 },
  });
  return (
    <animated.div style={{ ...styles, ...springProps }}>
      <h1>Comp 1</h1>
      <p>
        loremMagna dolor non et sunt velit velit tempor sit. Aliquip commodo
        magna anim velit consectetur cillum mollit. Ea et labore pariatur ut.
      </p>
    </animated.div>
  );
}
