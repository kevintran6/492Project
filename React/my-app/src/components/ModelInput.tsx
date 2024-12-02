import React from "react";
import { Input, Slider } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import "./ModelInput.css";

interface ModelInputProps {
  temperature: number;
  setTemperature: React.Dispatch<React.SetStateAction<number>>;
  topK: number;
  setTopK: React.Dispatch<React.SetStateAction<number>>;
  topP: number;
  setTopP: React.Dispatch<React.SetStateAction<number>>;
}

const ModelInput = ({
  temperature,
  setTemperature,
  topK,
  setTopK,
  topP,
  setTopP,
}: ModelInputProps) => {
  const handleSliderChange = (
    stateSetter: React.Dispatch<React.SetStateAction<number>>,
    event: Event,
    newValue: number | number[]
  ) => {
    stateSetter(newValue as number);
  };

  const handleInputChange = (
    stateSetter: React.Dispatch<React.SetStateAction<number>>,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    stateSetter(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = (
    stateSetter: React.Dispatch<React.SetStateAction<number>>,
    value: number
  ) => {
    if (value < 0) {
      stateSetter(0);
    } else if (value > 100) {
      stateSetter(100);
    }
  };

  return (
    <div className="model-input">
      <Box sx={{ width: "100%" }}>
        <Typography id="input-slider">
          Temperature
          <Input
            value={temperature}
            size="small"
            onChange={(e) => handleInputChange(setTemperature, e)}
            onBlur={() => handleBlur(setTemperature, temperature)}
            inputProps={{
              step: 0.1,
              min: 0,
              max: 1.5,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Typography>
        <Slider
          value={typeof temperature === "number" ? temperature : 0}
          onChange={(e, value) => handleSliderChange(setTemperature, e, value)}
          min={0}
          max={1.5}
          step={0.1}
          aria-labelledby="input-slider"
          sx={{
            "& .MuiSlider-thumb": {
              boxShadow: "none",
            },
            "& .MuiSlider-track": {
              boxShadow: "none",
            },
          }}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography id="input-slider">
          Top K
          <Input
            value={topK}
            size="small"
            onChange={(e) => handleInputChange(setTopK, e)}
            onBlur={() => handleBlur(setTopK, topK)}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Typography>
        <Slider
          value={typeof topK === "number" ? topK : 0}
          onChange={(e, value) => handleSliderChange(setTopK, e, value)}
          min={0}
          max={100}
          step={1}
          aria-labelledby="input-slider"
          sx={{
            "& .MuiSlider-thumb": {
              boxShadow: "none",
            },
            "& .MuiSlider-track": {
              boxShadow: "none",
            },
          }}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography id="input-slider">
          Top P
          <Input
            value={topP}
            size="medium"
            onChange={(e) => handleInputChange(setTopP, e)}
            onBlur={() => handleBlur(setTopP, topP)}
            inputProps={{
              step: 0.1,
              min: 0.3,
              max: 0.9,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Typography>
        <Slider
          value={typeof topP === "number" ? topP : 0}
          onChange={(e, value) => handleSliderChange(setTopP, e, value)}
          aria-labelledby="input-slider"
          min={0.3}
          max={0.9}
          step={0.1}
          sx={{
            "& .MuiSlider-thumb": {
              boxShadow: "none",
            },
            "& .MuiSlider-track": {
              boxShadow: "none",
            },
          }}
        />
      </Box>
    </div>
  );
};

export default ModelInput;
