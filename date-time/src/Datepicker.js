import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "./Datepicker.css";

function Datepicker() {
  const [value, setvalue] = useState(new Date());
  return (
    <div className="p-5">
      <DateTimePicker onChange={setvalue} value={value} />
    </div>
  );
}
export default Datepicker;
