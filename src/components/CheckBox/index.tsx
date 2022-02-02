import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {
  Checkbox,
  FormGroup,
  TextField,
} from "@mui/material";

interface Props {
  label: string;
  valueOne: string;
  valueTwo: string;
  valueThree?: string;
  valueFour?: string;
  valueFive?: string;
  valueSix?: string;
  labeOne: string;
  labeTwo: string;
  labelThree?: string;
  labelFour?: string;
  labelFive?: string;
  labelSix?: string;
}

const RadioButton: React.FC<Props> = ({
  label,
  valueOne,
  valueTwo,
  valueThree,
  valueFour,
  valueFive,
  valueSix,
  labeOne,
  labeTwo,
  labelThree,
  labelFour,
  labelFive,
  labelSix,
}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value={valueOne}
          control={<Checkbox />}
          label={labeOne}
        />
        <FormControlLabel
          value={valueTwo}
          control={<Checkbox onChange={handleChange}/>}
          label={labeTwo}
        />
        {valueThree && (
          <FormControlLabel
            value={valueThree}
            control={<Checkbox onChange={handleChange}/>}
            label={labelThree || ""}
          />
        )}
        {valueFour && (
          <FormControlLabel
            value={valueFour}
            control={<Checkbox onChange={handleChange}/>}
            label={labelFour || ""}
          />
        )}
        {valueFive && (
          <FormControlLabel
            value={valueFive}
            control={<Checkbox onChange={handleChange}/>}
            label={labelFive || ""}
          />
        )}
        {valueSix && (
          <>
            <FormControlLabel
              value={valueSix}
              control={<Checkbox onChange={handleChange}/>}
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
