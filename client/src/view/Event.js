import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useRecoilValue } from "recoil";
import { logIn } from "./atoms";
import { useState } from "react";
import ChooseDate from "./ChooseDate";
import ChooseEndDate from './ChooseEndDate'

export default function MultilineTextFields() {
  const user = useRecoilValue(logIn);

  const initialState = {
    name: "",
    user_name: "",
    email: "",
    phone_number: "",
    password: "",
    password_confirmation: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [date, setDate] = useState("");

  console.log(date);

  function handleFormInput(e) {
    const input = e.target.id;
    // console.log(input);
    const state = { ...formData };
    state[input] = e.target.value;
    setFormData(state);
  }

  function handleSubmit() {
    const payload = { ...formData, user_id: user.id };
    console.log(payload);
    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
    setFormData(initialState);
  }

  function handleChooseDate(e) {
    console.log(e.taget.value);
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { p: 1, m: 5, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
      onChange={handleFormInput}
    >
      <div>
        <ChooseDate
          id="start"
          placeholder="asdfasdf"
          onSubmit={handleChooseDate}
        />
        <ChooseEndDate id="end" onSubmit={handleChooseDate} />
        <TextField id="title" label="Title" multiline maxRows={4} />
        <TextField id="location" label="Location" multiline maxRows={4} />
      </div>
      <div>
        {/* <TextField id="date" label="Date" multiline maxRows={4} /> */}
        <TextField id="type" label="Type" multiline maxRows={4} />
        <TextField id="address" label="Address" multiline maxRows={4} />
        <TextField id="planner" label="Planner" multiline maxRows={4} />
      </div>
      <Button variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
      <div></div>
    </Box>
  );
}
