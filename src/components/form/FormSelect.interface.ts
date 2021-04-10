import DefaultProps from "../DefaultProps.interface";

export interface SelectProps extends DefaultProps {
  label: string;
  name: string;
  value: string | number;
  options: SelectOption[];
  onSelect: (value: string) => void;
}

export interface SelectOption {
  value: string;
  label: string;
}
