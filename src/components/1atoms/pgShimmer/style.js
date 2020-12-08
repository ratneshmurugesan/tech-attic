import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  "@keyframes shimmerLoader": {
    from: { backgroundPosition: "-668px 0" },
    to: { backgroundPosition: "650px 0" },
  },
  shimmer: {
    background: "#e0e0e0",
    backgroundImage:
      "linear-gradient(to right, #e0e0e0 30%, #edeef1 50%, #e0e0e0 70%, #e0e0e0 100%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    display: "inline-block",
    position: "relative",
    animationDuration: "1s",
    animationFillMode: "forwards",
    animationIterationCount: "infinite",
    animationName: "$shimmerLoader",
    animationTimingFunction: "linear",
    width: "100%",
  },
}));
