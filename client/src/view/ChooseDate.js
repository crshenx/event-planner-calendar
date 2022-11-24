import React from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useRecoilState } from "recoil";
import { chooseDate } from "./atoms";
import moment from "moment";

export default function MaterialUIPickers() {
  const [startDateState, setStartDateState] = useRecoilState(chooseDate);

  const handleChange = (newValue) => {
    let startDateFormatted = moment(newValue).toDate();
    setStartDateState({ ...startDateState, startDate: startDateFormatted });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        label="Start Date"
        value={startDateState.startDate}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
