import React from "react";

export default function Logo({ classes = {} }) {
  return (
    <div>
      <h2 className={`logo ${classes}`}>
        <span>Fit</span>Stop
      </h2>

      <style>
        {`
              .logo {
                  border: 2px solid #455560;
                  width: fit-content;
                  padding: 5px 10px;
                  border-radius: 4px;
                  text-transform: capitalize;
                  color: #455560;
              }

              .logo span {
                  color: #ff523b;
              }
              `}
      </style>
    </div>
  );
}
