import React, { ChangeEvent } from "react";
import { SelectProps } from "./FormSelect.interface";

export default function FormSelect(props: SelectProps): JSX.Element {
  const { options, label, name, value, onSelect } = props;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  const selectOptions = options.map((option) => (
    <option value={option.value} key={option.label}>
      {option.label}
    </option>
  ));

  return (
    <label htmlFor={name}>
      <span data-testid="form-label">{label}</span>
      <select
        data-testid="form-select"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {selectOptions}
      </select>
    </label>
  );
}
