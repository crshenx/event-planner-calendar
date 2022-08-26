import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useRecoilValue } from "recoil";
import { logIn } from "./atoms";

export default function MultilineTextFields() {
  const user = useRecoilValue(logIn);
  console.log(user);

  const [formData, setFormData] = React.useState({
    title: "",
    location: "",
    date: "",
    type: "",
    addess: "",
    planner: "",
  });

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
    fetch("/planners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
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
        <TextField id="name" label="Name" multiline maxRows={4} />
        <TextField id="email" label="Email" multiline maxRows={4} />
        <TextField
          id="phone_number"
          label="Phone Number"
          multiline
          maxRows={4}
        />
      </div>
      <div>
        <Button variant="outlined" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </Box>
  );
}
