import React, { useState } from "react";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  label?: string;
  autocomplete?: React.AutoFill;
  callback?: () => void;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  label,
  autocomplete,
  callback,
}) => {
  const [value, setValue] = useState<string>("");

  function handleInput(event: React.ChangeEvent) {
    console.log(event.target.value);

    if (callback) callback();
  }

  return (
    <div className={`flex flex-col justify-start`}>
      {label && (
        <label className={`text-sm font-semibold`} htmlFor={name}>
          {label}
        </label>
      )}

      <input
        className={`rounded border p-2 py-2`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleInput}
        autoComplete={autocomplete || false}
      />
    </div>
  );
};

export { Input };
