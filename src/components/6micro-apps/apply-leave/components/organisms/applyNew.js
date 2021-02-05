import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomCheckbox from "../atoms/checkbox";
import CustomDropdown from "../atoms/dropdown";
import CustomTextarea from "../atoms/textarea";
import CustomButton from "../atoms/button";
import CustomDatePicker from "../molecules/datePicker";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  formControl: {
    padding: theme.spacing(1),
    minWidth: 120,
    textAlign: "left",
  },
}));

const defaultNewLeaveObj = {
  from_date: "",
  to_date: "",
  halfDay: false,
  description: "",
  leaveType: "",
  status: "Pending",
};

export default function ApplyNew({ storeState, dispatch }) {
  const classes = useStyles();

  const [newLeaveObject, setNewLeaveObject] = React.useState(
    defaultNewLeaveObj
  );

  const handleHalfDayCheckboxChange = (event) => {
    const eventTarget = event.target;
    setNewLeaveObject({
      ...newLeaveObject,
      ...{ halfDay: eventTarget.checked },
    });
  };

  const handleChange = (event) => {
    const eventTarget = event.target;
    setNewLeaveObject({
      ...newLeaveObject,
      ...{ [eventTarget.name]: eventTarget.value },
    });
  };

  const handleButtonClick = (_) => {
    const newDataObj = { ...newLeaveObject, ...{ id: storeState.data.length } };
    dispatch({
      type: "addNew",
      updatedData: [...storeState.data, newDataObj],
    });
  };

  const { halfDay, leaveDescription } = newLeaveObject;
  const validationObj = {};
  validationObj.from_date = newLeaveObject.from_date;
  validationObj.to_date = newLeaveObject.to_date;
  validationObj.description = newLeaveObject.description;
  validationObj.leaveType = newLeaveObject.leaveType;

  let isDisabled =
    validationObj &&
    validationObj.from_date !== "" &&
    validationObj.to_date !== ""
      ? false
      : true;

  return (
    <FormControl className={classes.formControl}>
      <CustomDatePicker setNewLeaveObject={setNewLeaveObject} />
      <CustomDropdown {...newLeaveObject} handleChange={handleChange} />
      <CustomCheckbox
        handleHalfDayCheckboxChange={handleHalfDayCheckboxChange}
        halfDay={halfDay}
        text={"Apply for half days"}
      />
      <CustomTextarea
        handleChange={handleChange}
        leaveDescription={leaveDescription}
      />
      <CustomButton
        handleButtonClick={handleButtonClick}
        buttonText={"Submit Leave"}
        isDisabled={isDisabled}
        buttonStyles={{ backgroundColor: "#56C271" }}
      />
    </FormControl>
  );
}
