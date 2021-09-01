import React from "react";
import Select from "react-select";

function CustomSelect({
  label,
  name,
  value,
  error,
  onChange,
  options,
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
        className={`form__select-field ${
          error?.status ? "error-border" : ""
        } ${classes}`}
      >
        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          name={name}
          value={value}
          onChange={onChange}
          options={options}
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

      .form__select-field {
          padding: 0;
          height: 40px;
          width: 100%;
          max-width: 380px;
          min-width: 180px;
          margin-bottom: 5px;
          border-radius: 30px;
        }

        .form__input-label {
          margin-top: 10px;
          margin-bottom: 5px;
          font-weight: 600;
          font-size: 14px;
          color: var(--txt-color);
          text-transform: capitalize;
        }
        
        .react-select-container {
          background-color: var(--main-bg) !important;
          height: 100%;
          width: 100% !important;
          border-radius: 30px !important;
        }
        
        .react-select__control {
          background-color: var(--main-bg) !important;
          color: var(--txt-color) !important;
          width: 100% !important;
          // border: none !important;
          border-radius: 30px !important;
        }
        
        .react-select__input input[type=text] {
          color: var(--txt-color) !important;
        }
        
        .react-select__single-value {
          color: var(--txt-color) !important;
          text-transform: capitalize !important;
        }
        
        .react-select__control:focus-within {
          border: 1px solid var(--main-color) !important;
          box-shadow: none !important;
        }
        
        .react-select__control:hover {
          box-shadow: none !important;
        }
        
        .react-select__menu {
          background-color: var(--main-bg) !important;
          border-radius: var(--border-radius) !important;
        }
        
        .react-select__menu-list {
          border-radius: var(--border-radius) !important;
          padding: 0 !important;
        }
        
        .react-select__option {
          background-color: var(--main-bg) !important;
          color: var(--txt-color);
          text-transform: capitalize !important;
        }
        
        .react-select__option:hover {
          background-color: var(--second-bg) !important;
        }
        
        .react-select__option--is-selected {
          color: var(--txt-color) !important;
          background-color: var(--second-bg) !important;
        }
        
        .form__helper-text {
          font-size: 0.825rem;
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

export default CustomSelect;
