import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Checkbox, FormGroup, TextField } from "@mui/material";

interface Props {
  labelTitle: string;
  valueOne: string;
  valueTwo: string;
  valueThree?: string;
  valueFour?: string;
  valueFive?: string;
  valueSix?: string;
  labelOne: string;
  labelTwo: string;
  labelThree?: string;
  labelFour?: string;
  labelFive?: string;
  labelSix?: string;
  checkedOne: boolean;
  checkedTwo: boolean;
  checkedThree?: boolean;
  checkedFour?: boolean;
  checkedFive?: boolean;
  checkedSix?: boolean;
  handleChange: (event: any) => void;
}

const RadioButton: React.FC<Props> = ({
  labelTitle,
  valueOne,
  valueTwo,
  valueThree,
  valueFour,
  valueFive,
  valueSix,
  labelOne,
  labelTwo,
  labelThree,
  labelFour,
  labelFive,
  labelSix,
  checkedOne,
  checkedTwo,
  checkedThree,
  checkedFour,
  checkedFive,
  checkedSix,
  handleChange,
}) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{labelTitle}</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedOne}
              onChange={handleChange}
              name={valueOne}
            />
          }
          label={labelOne}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedTwo}
              onChange={handleChange}
              name={valueTwo}
            />
          }
          label={labelTwo}
        />
        {valueThree && (
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedThree}
                onChange={handleChange}
                name={valueThree}
              />
            }
            label={labelThree || ""}
          />
        )}
        {valueFour && (
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedFour}
                onChange={handleChange}
                name={valueFour}
              />
            }
            label={labelFour || ""}
          />
        )}
        {valueFive && (
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedFive}
                onChange={handleChange}
                name={valueFive}
              />
            }
            label={labelFive || ""}
          />
        )}
        {valueSix && (
          <>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedSix}
                  onChange={handleChange}
                  name={valueSix}
                />
              }
              label={labelSix || ""}
            />
            <TextField variant="outlined" />
          </>
        )}
      </FormGroup>
    </FormControl>
  );
};

export default React.memo(RadioButton);
