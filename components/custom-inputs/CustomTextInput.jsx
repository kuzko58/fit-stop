import React from "react";

function CustomTextInput({
  label,
  name,
  value,
  error,
  onChange,
  classes,
  containerClasses,
  componentProps = {},
}) {
  return (
    <div className={`form__input-container ${containerClasses}`}>
      <label htmlFor={name} className="form__input-label">
        {label}
      </label>
      <div
        className={`form__input-field ${
          error?.status ? "error-border" : ""
        } ${classes}`}
      >
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          {...componentProps}
        />
      </div>
      <label
        htmlFor={name}
        className={`form__helper-text ${error?.status ? "error-txt" : ""}`}
      >
        {error?.message || ""}
      </label>
      <style>{`
        .form__input-container {
          display: flex;
          flex-direction: column;
        }
        
        .form__input-label {
          margin-top: 10px;
          margin-bottom: 5px;
          font-weight: 600;
          font-size: 14px;
          color: var(--txt-color);
          text-transform: capitalize;
        }
        
        .form__input-field {
          padding: 5px 10px;
          height: 40px;
          max-width: 380px;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          border: 1px solid lightgray;
          border-radius: 30px;
          background-color: var(--main-bg);
          color: var(--txt-color);
        }
        
        .form__input-field:focus-within {
          border: 1px solid var(--main-color);
        }
        
        .form__input-field input {
          border: none;
          background-color: var(--main-bg);
          color: var(--txt-color);
          height: 30px;
          width: 100%;
          font-size: 16px;
        }
        
        .form__input-field input:focus {
          border: none;
          outline: none;
        }
        
        .form__input-field span {
          padding: 2px;
          width: 30px;
          height: 30px;
        }

        .form__helper-text {
          font-size: 14px;
        }

        .error-border {
          border: 1px solid var(--main-color-red);
        }
        
        .error-txt {
          color: var(--main-color-red);
        }
        
        .success-txt {
          color: var(--main-color-green);
        }
        
        `}</style>
    </div>
  );
}

export default CustomTextInput;
