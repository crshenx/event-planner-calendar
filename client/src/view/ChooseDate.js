import React from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  console.log(value);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        label="Date&Time picker"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
