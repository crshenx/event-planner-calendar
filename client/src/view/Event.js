import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useRecoilValue } from "recoil";
import { logIn, chooseDate } from "./atoms";
import { useState } from "react";
import ChooseDate from "./ChooseDate";
import ChooseEndDate from "./ChooseEndDate";
import { useHistory } from "react-router-dom";
import EventType from "./EventType";

export default function MultilineTextFields() {
  const user = useRecoilValue(logIn);
  const eventDate = useRecoilValue(chooseDate);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type_of_event: "",
    address: "",
    planner: "",
    user_id: user.id,
    date: eventDate.startDate,
    start_date: eventDate.startDate,
    end_date: eventDate.endDate,
  });

  const initialState = {
    title: "",
    location: "",
    type_of_event: "",
    address: "",
    planner: "",
    user_id: user.id,
    date: eventDate.startDate,
    start_date: eventDate.startDate,
    end_date: eventDate.endDate,
  };

  const history = useHistory();
  React.useEffect(() => {
    if (!user.id) {
      history.push("/login");
    }
  }, []);

  console.log(
    `event component start date: ${
      eventDate.startDate
    } \n \nevent component end date:  ${
      eventDate.endDate
    } \n \nwhole event date: ${JSON.stringify(
      eventDate
    )} \n \nwhole form data: ${JSON.stringify(formData)}`
  );

  function handleFormInput(e) {
    let input = e.target.id;
    if (!input) {
      input = "type_of_event";
    }
    console.log(input);
    const state = { ...formData };
    state[input] = e.target.value;
    setFormData(state);
  }

  function findFormErrors() {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] === "") {
        newErrors[key] = `Please enter your ${key}`;
      }
      const difference = eventDate.endDate - eventDate.startDate;
      if (difference < 0) {
        newErrors.date = `Please enter a valid date`;
      }
    });
    return newErrors;
  }

  function handleSubmit() {
    const payload = { ...formData };
    const newErrors = findFormErrors(payload);
    if (Object.keys(newErrors).length > 0) {
      console.log(newErrors);
    } else {
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
          // onSubmit={handleChooseDate}
        />
        <ChooseEndDate
          id="end"
          // onSubmit={handleChooseDate}
        />
        <TextField
          id="title"
          label="Title"
          multiline
          maxRows={4}
          onChange={handleFormInput}
        />
        <TextField
          id="location"
          label="Location"
          multiline
          maxRows={4}
          onChange={handleFormInput}
        />
      </div>
      <div>
        {/* <TextField id="date" label="Date" multiline maxRows={4} /> */}
        <TextField
          id="type_of_event"
          label="Type"
          multiline
          maxRows={4}
          onChange={handleFormInput}
        />
        <EventType id="type_of_event" handleFormInput={handleFormInput} />
        <TextField
          id="address"
          label="Address"
          multiline
          maxRows={4}
          onChange={handleFormInput}
        />
        <TextField
          id="planner"
          label="Planner"
          multiline
          maxRows={4}
          onChange={handleFormInput}
        />
      </div>
      <Button variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
      <div></div>
    </Box>
  );
}
