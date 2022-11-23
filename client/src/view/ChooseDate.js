import React, { useState } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { chooseDate } from "./atoms";
import moment from "moment";

export default function MaterialUIPickers() {
  const setDateChoice = useSetRecoilState(chooseDate);
  const [value, setValue] = useState(moment().toDate());

  const handleChange = (newValue) => {
    console.log(
      `inside the handle change for choosing a start time ` +
        newValue +
        // use moment to format the date number returned from the date picker
        // to a string that can be used in the database
        ` with format${moment(newValue).format("YYYY-MM-DD HH:mm:ss")}`
    );
    setValue(newValue);
    setDateChoice({ ...chooseDate, startDate: newValue });
  };

  console.log(`recoil setter func: ` + chooseDate.toString());
  console.log(`regular state value: ` + value);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        label="Start Date"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
