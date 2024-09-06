import { ParamsType } from "../types";

export const saveChosenLanguage = ({ locale }: ParamsType) => {
  localStorage.setItem("locale", locale);
};

export const getChosenLanguage = () => {
  return localStorage.getItem("locale");
};
