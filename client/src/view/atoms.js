import { atom } from "recoil";

export const logIn = atom({
  key: "logIn",
  default: {},
});

export const chooseDate = atom({
  key: "chooseDate",
  default: "",
});
