import { makeStyles } from "@material-ui/core/styles";

const colorPending = "#F1C40F";
const colorApproved = "#56C271";
const colorRejected = "#F03D3E";

const useStyles = makeStyles((theme) => {
  return {
    rootList: {
      width: 300,
      backgroundColor: theme.palette.background.paper,
      padding: 10,
      margin: 10,
      textAlign: "left",
      boxSizing: "border-box",
      borderRadius: "5px",
    },
    root: {
      width: 220,
      margin: 10,
      textAlign: "left",
      fontSize: "12px",
      boxSizing: "border-box",
    },
    cardContent: {
      padding: 16,
      height: 210,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    halfDay: {
      margin: "5px 3px",
    },
    fromToDates: {
      fontWeight: "bold",
      fontSize: "16px",
      margin: "5px 3px 10px 3px",
    },
    description: {
      margin: "5px 3px 20px 3px",
      height: "40px",
      overflow: "auto",
    },
    leaveType: {
      fontWeight: "bold",
      margin: "0px 3px",
    },
    statusPending: {
      color: colorPending,
      marginTop: 10,
      "&:before": {
        content: '""',
        left: "100px",
        top: 0,
        width: 0,
        border: `2px solid ${colorPending}`,
        backgroundColor: `${colorPending}`,
        margin: 5,
        marginRight: 10,
        marginLeft: 3,
      },
    },
    statusApproved: {
      color: colorApproved,
      marginTop: 10,
      "&:before": {
        content: '""',
        left: "100px",
        top: 0,
        width: 0,
        border: `2px solid ${colorApproved}`,
        backgroundColor: `${colorApproved}`,
        margin: 5,
        marginRight: 10,
        marginLeft: 3,
      },
    },
    statusRejected: {
      color: colorRejected,
      marginTop: 10,
      "&:before": {
        content: '""',
        left: "100px",
        top: 0,
        width: 0,
        border: `2px solid ${colorRejected}`,
        backgroundColor: `${colorRejected}`,
        margin: 5,
        marginRight: 10,
        marginLeft: 3,
      },
    },
    comment: {
      backgroundColor: "#f9761752",
      color: "red",
      display: "block",
      paddingTop: 5,
      paddingBottom: 5,
      padding: 30,
    },
    commentText: {
      padding: 0,
      paddingLeft: 15,
    },
  };
});

export default useStyles;
