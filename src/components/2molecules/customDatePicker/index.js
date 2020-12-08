import React, { useState } from "react";
import { DateRangePicker, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Grid, Button, Modal, Box, Paper } from "@material-ui/core";
import { format, isBefore } from "date-fns";
import { isMobile } from "react-device-detect";
import { START_DATE } from "config/dashboardConfig";

const CustomDateRangePicker = ({
  dates,
  handleDateChange,
  setShowDatePicker,
  showDatePicker,
  classes,
  label,
}) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(dates ? dates.start_date : null),
      endDate: new Date(dates ? dates.end_date : null),
      key: "selection",
    },
  ]);

  return (
    <Grid item xs={12}>
      <Button
        onClick={_ => setShowDatePicker(!showDatePicker)}
        className={classes.dateSelector}
      >
        <span className={classes.dateLabel}>
          <label>{label}</label>
          <Grid container justify="space-between" alignItems="flex-start">
            <Grid item xs={6}>
              Start Date: {format(new Date(dates ? dates.start_date : null), "MMM-dd-yyyy")}
            </Grid>
            <Grid item xs={6}>
              End Date: {format(new Date(dates ? dates.end_date : null), "MMM-dd-yyyy")}
            </Grid>
          </Grid>
        </span>
      </Button>

      <Modal
        open={showDatePicker}
        onClose={_ => setShowDatePicker(!showDatePicker)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div
          style={
            isMobile
              ? {
                  position: "absolute",
                  top: "70px",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                }
              : {
                  position: "absolute",
                  top: "130px",
                  left: "69px",
                }
          }
        >
          {!isMobile ? (
            <Paper elevation={0} display="flex" flexDirection="column">
              <DateRangePicker
                onChange={item => {
                  const dateLessThanActualStartDate = isBefore(
                    new Date(item.selection.startDate),
                    new Date(START_DATE)
                  );
                  !dateLessThanActualStartDate &&
                    setDateRange([item.selection]);
                }}
                showSelectionPreview={false}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={dateRange}
                minDate={new Date(START_DATE)}
                direction="horizontal"
              />
              <Box display="flex" justifyContent="flex-end" pr={4} pb={4}>
                <Button
                  onClick={_ => {
                    setDateRange([
                      {
                        startDate: new Date(dates.start_date),
                        endDate: new Date(dates.end_date),
                        key: "selection",
                      },
                    ]);
                    setShowDatePicker(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ color: "#FFF", marginLeft: "1rem" }}
                  onClick={_ => {
                    const dateLessThanActualStartDate = isBefore(
                      new Date(dateRange[0].startDate),
                      new Date(START_DATE)
                    );
                    !dateLessThanActualStartDate
                      ? handleDateChange({ selection: dateRange[0] })
                      : handleDateChange({
                          selection: {
                            startDate: new Date(START_DATE),
                            endDate: new Date(dateRange[0].endDate),
                            key: "selection",
                          },
                        });
                    setShowDatePicker(false);
                  }}
                >
                  Update
                </Button>
              </Box>
            </Paper>
          ) : (
            <Paper elevation={0} display="flex" flexDirection="column">
              <DateRange
                editableDateInputs={false}
                onChange={item => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                minDate={new Date(START_DATE)}
              />
              <Box display="flex" justifyContent="space-evenly" p={2}>
                <Button
                  variant="contained"
                  onClick={_ => {
                    setDateRange([
                      {
                        startDate: new Date(dates.start_date),
                        endDate: new Date(dates.end_date),
                        key: "selection",
                      },
                    ]);
                    setShowDatePicker(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ color: "#FFF" }}
                  onClick={_ => {
                    handleDateChange({ selection: dateRange[0] });
                    setShowDatePicker(false);
                  }}
                >
                  Update
                </Button>
              </Box>
            </Paper>
          )}
        </div>
      </Modal>
    </Grid>
  );
};

export default CustomDateRangePicker;
