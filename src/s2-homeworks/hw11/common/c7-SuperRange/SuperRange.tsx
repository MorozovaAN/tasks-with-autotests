import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        // стили для слайдера

        ".MuiSlider-thumb.MuiSlider-active": {
          boxShadow: "none ",
          border: "10px solid black",
        },

        width: 200,
        color: "#13a52c",
        ".MuiSlider-track": {
          height: "4px",
        },
        ".MuiSlider-thumb": {
          width: "18px",
          height: "18px",
          border: "2px solid #13a52c",
          background: "var(--background)",
        },
        ".MuiSlider-thumb::after": {
          content: `""`,
          background: "#13a52c",
          position: "absolute",
          width: "7px",
          height: "7px",
        },

        ".MuiSlider-thumb:hover": {
          boxShadow: "0px 0px 0px 5px rgb(21 200 52 / 18%)",
        },
        ".MuiSlider-thumb:focus-visible": {
          boxShadow: "0px 0px 0px 5px rgb(21 200 52 / 18%)",
        },
        ".MuiSlider-rail": {
          backgroundColor: "#000",
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
