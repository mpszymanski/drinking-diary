import React, { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { SelectProps } from "./FormSelect.interface";

export default function FormSelect(props: SelectProps): JSX.Element {
  const { options, label, name, value, onSelect, className } = props;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  const selectOptions = options.map((option) => (
    <option value={option.value} key={option.label}>
      {option.label}
    </option>
  ));

  return (
    <label htmlFor={name} className={`block relative ${className}`}>
      <span data-testid="form-label" className="block text-sm">
        {label}
      </span>
      <select
        className="block w-full border border-gray-300 bg-white rounded px-2 py-2"
        data-testid="form-select"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {selectOptions}
      </select>
      <span className="absolute bottom-0 right-0 py-2 px-4 pointer-events-none">
        <FontAwesomeIcon icon={faCaretDown} />
      </span>
    </label>
  );
}
