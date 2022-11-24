import { atom } from "recoil";
import moment from "moment";

export const logIn = atom({
  key: "logIn",
  default: {},
});

export const chooseDate = atom({
  key: "chooseStartandEndDate",
  default: { startDate: moment().toDate(), endDate: moment().toDate() },
});
