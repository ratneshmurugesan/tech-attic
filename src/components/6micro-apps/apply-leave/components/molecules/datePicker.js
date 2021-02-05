import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const DATE_FORMAT = "dd/MM/yyyy";
const CARD_SECTION_DATE_FORMAT = "MMMM yyyy";

const DatePicker = ({ setNewLeaveObject }) => {
  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: null,
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleDateChange = (itemArray) => {
    setSelectedDateRange(itemArray);
    setNewLeaveObject((state) => ({
      ...state,
      from_date: format(new Date(itemArray[0].startDate), DATE_FORMAT),
      to_date: format(new Date(itemArray[0].endDate), DATE_FORMAT),
      unformatted_from_date: itemArray[0].startDate,
      unformatted_to_date: itemArray[0].endDate,
      sectionDate: format(new Date(itemArray[0].endDate), CARD_SECTION_DATE_FORMAT),
    }));
  };

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => handleDateChange([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={selectedDateRange}
    />
  );
};

export default DatePicker;
