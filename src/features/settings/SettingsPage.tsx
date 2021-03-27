import React, { useState } from "react";
import FormSelect from "../../components/form/FormSelect";
import { SelectOption } from "../../components/form/FormSelect.interface";

export default function SettingsPage(): JSX.Element {
  const [gender, setGender] = useState("M");
  const [darkMode, setDarkMode] = useState(0);

  const genderOptions: SelectOption[] = [
    { value: "M", label: "Male" },
    { value: "F", label: "Female" },
  ];

  const darkModeOptions: SelectOption[] = [
    { value: "0", label: "Off" },
    { value: "1", label: "On" },
  ];

  return (
    <div className="text-center">
      <h1 className="font-bold">App settings</h1>
      <FormSelect
        name="gender"
        label="Gender"
        value={gender}
        options={genderOptions}
        onSelect={(value: string) => setGender(value)}
      />

      <FormSelect
        name="dark-mode"
        label="Dark mode"
        value={darkMode}
        options={darkModeOptions}
        onSelect={(value: string) => setDarkMode(parseInt(value, 10))}
      />
    </div>
  );
}
