import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        // стили для слайдера // пишет студент
        width: 150,
        color: "#00CC22",
        "--Slider-track-size": "4px",
        "--Slider-thumb-width": "18px",
        "--Slider-thumb-size": "18px",
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;

// .css-eg0mwd-MuiSlider-thumb:hover, .css-eg0mwd-MuiSlider-thumb.Mui-focusVisible {
//     box-shadow: 0px 0px 0px 6px rgb(25 210 102 / 16%);
// }
