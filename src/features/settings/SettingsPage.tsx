import React from "react";
import { useSelector } from "react-redux";
import FormSelect from "../../components/form/FormSelect";
import { SelectOption } from "../../components/form/FormSelect.interface";
import { setGender, setDarkMode } from "./settingsSlice";
import { RootState } from "../../app/rootReducer";
import { useAppDispatch } from "../../app/store";
import Header from "../../components/layout/Header";

export default function SettingsPage(): JSX.Element {
  const gender = useSelector((state: RootState) => state.settings.gender);
  const darkMode = useSelector((state: RootState) => state.settings.darkMode);

  const dispatch = useAppDispatch();

  const genderOptions: SelectOption[] = [
    { value: "M", label: "Male" },
    { value: "F", label: "Female" },
  ];

  const darkModeOptions: SelectOption[] = [
    { value: "0", label: "Off" },
    { value: "1", label: "On" },
  ];

  return (
    <div>
      <Header>App settings</Header>
      <FormSelect
        name="gender"
        label="Gender"
        value={gender}
        options={genderOptions}
        onSelect={(value: string) => dispatch(setGender(value))}
      />

      <FormSelect
        name="dark-mode"
        label="Dark mode"
        value={darkMode}
        options={darkModeOptions}
        onSelect={(value: string) => dispatch(setDarkMode(parseInt(value, 10)))}
      />
    </div>
  );
}
