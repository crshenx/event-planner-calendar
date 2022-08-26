import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useRecoilValue } from "recoil";
import { logIn } from "./atoms";
import { useState } from "react";

export default function MultilineTextFields() {
  const user = useRecoilValue(logIn);
  console.log(user);

  const initialState = {
    name: "",
    user_name: "",
    email: "",
    phone_number: "",
    password: "",
    password_confirmation: "",
  };

  const [formData, setFormData] = useState(initialState);

  function handleFormInput(e) {
    const input = e.target.id;
    console.log(input);
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

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { p: 2, m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onChange={handleFormInput}
    >
      <div>
        <TextField id="title" label="Title" multiline maxRows={4} />
        <TextField id="location" label="Location" multiline maxRows={4} />
      </div>
      <div>
        <TextField id="date" label="Date" multiline maxRows={4} />
        <TextField id="type" label="Type" multiline maxRows={4} />
      </div>
      <div>
        <TextField id="address" label="Address" multiline maxRows={4} />
        <TextField id="planner" label="Planner" multiline maxRows={4} />
      </div>
      <Button variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}
