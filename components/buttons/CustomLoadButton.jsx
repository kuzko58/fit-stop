import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function CustomLoadButton({
  loading,
  onClick,
  classes = {},
  btnClasses = {},
}) {
  return (
    <div className={`load-button ${classes}`}>
      <button className={`load-button__button ${btnClasses}`} onClick={onClick}>
        Sign In
      </button>
      {loading && (
        <div className="load-button__overlay">
          <CircularProgress className="load-button__spinner" />
        </div>
      )}

      <style>
        {`
                    .load-button {
                        position: relative;
                        margin-top: 20px;
                        margin-bottom: 20px;
                      }
                      
                      .load-button__button {
                        text-transform: uppercase;
                        border-radius: 30px;
                        border: none;
                      }
                      
                      .load-button__overlay {
                        padding: 5px;
                        width: 100%;
                        text-align: center;
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        border-radius: 30px;
                        background-color: rgba(0, 0, 0, 0.5);
                      }
                      
                      .load-button__spinner {
                        height: 30px !important;
                        width: 30px !important;
                        color: #bbbbbb !important;
                      }
                    `}
      </style>
    </div>
  );
}
