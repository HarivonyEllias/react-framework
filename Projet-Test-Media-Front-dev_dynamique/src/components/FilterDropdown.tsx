import React, { ChangeEvent } from 'react';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const FilterDropdown: React.FC<Props> = ({ options, handleChange }) => {
  return (
    <div className="absolute top-0 left-0 p-4">
      <select onChange={handleChange} className="p-2 bg-white border rounded">
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
