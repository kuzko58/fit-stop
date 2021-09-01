import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import checkboxStyles from "./CustomCheckbox.module.css";

export default function CustomCheckbox({
  label,
  onChange,
  checked,
  value,
  name,
}) {
  const [clicked, setClicked] = useState(checked);
  return (
    <div>
      <div className={checkboxStyles["form-group"]}>
        <input
          type="checkbox"
          id="customCheckbox"
          name={name}
          onChange={onChange}
          checked={checked}
          value={value}
        />
        <label htmlFor="customCheckbox">
          <div className={checkboxStyles["check-box"]}>
            <div className={checkboxStyles["check-tick"]}></div>
          </div>
          {label}
        </label>
      </div>
    </div>
  );
}
