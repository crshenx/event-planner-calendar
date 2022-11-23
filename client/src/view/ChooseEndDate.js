import React, { useState } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import moment from "moment";

export default function MaterialUIEndPickers() {
  const [value, setValue] = useState(moment().toDate());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // console.log(value);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        label="End Date"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
