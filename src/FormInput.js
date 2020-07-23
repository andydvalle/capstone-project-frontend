import { useState } from "react";

export default function useFormInput(initialState) {
  const [value, setValue] = useState(initialState);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return [
    {
      value,
      onChange: handleChange,
    },
    setValue,
  ];
}
