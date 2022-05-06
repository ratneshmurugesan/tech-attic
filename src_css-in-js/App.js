import React, { useState } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import {
  space,
  color,
  layout,
  border,
  flexbox,
  grid,
  compose,
} from "styled-system";

const Spacer = styled.div(space);

const BaseButton = styled.div(space, color, layout, border, flexbox, {
  boxSizing: "border-box",
  minWidth: 0,
});

const theme = {
  primary: "#e2e2e2",
  transition: "all 1200ms ease",
};

const StyledBox = styled(BaseButton)`
  /* position: 'relative', */
  width: ${({ count }) => {
    console.log(count);
    return `${count}px`;
  }};
  background-color: ${({ theme }) => theme.primary};
`;

const Flex = styled.h3(compose(layout, flexbox), ({ count }) => {
  console.log("count flex", count);
  return {
    // justifyContent: !!count % 2 ? "flex-start" : "flex-end",
  };
});

StyledBox.defaultProps = {
  bg: "palegreen",
};

function App() {
  const [state, setState] = useState(200);

  const increment = () => {
    setState(state + 1);
  };

  console.log(state);
  return (
    <ThemeProvider theme={theme}>
      <p>Styled Components + System</p>
      <Spacer pl={4} bg="purple" />
      <StyledBox
        // as="a"
        href="www.goggle.co.in"
        border="1px solid black"
        // width={[1, 1 / 2, 1 / 4]}
        // width={{ default: 1, small: 1 / 2, medium: 1 / 3, large: 1 / 4 }}
        // p={4}
        // padding={[0, null, 13]}
        // m={4}
        // bg="tomato"
        count={state}
      >
        <Spacer pl={4} />

        <Flex count={state} display="flex" justifyContent="flex-end">
          <span>Box</span>
        </Flex>
      </StyledBox>
      <button onClick={increment}>+</button>
    </ThemeProvider>
  );
}

export default App;
