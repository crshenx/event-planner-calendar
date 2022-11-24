import React from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import moment from "moment";
import { useRecoilState } from "recoil";
import { chooseDate } from "./atoms";

export default function MaterialUIEndPickers() {
  const [endDateState, setEndDateState] = useRecoilState(chooseDate);

  const handleChange = (newValue) => {
    let endDateFormatted = moment(newValue).toDate();
    setEndDateState({ ...endDateState, endDate: endDateFormatted });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        label="End Date"
        value={endDateState.endDate}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
