import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface Props {
  label: string;
  id: string;
  defaultValue: string;
  labelRadioOne: string;
  labelRadioTwo: string;
  handleChange: (radioValue: string) => void;
}

const RadioButton: React.FC<Props> = ({
  handleChange,
  label,
  id,
  defaultValue,
  labelRadioOne,
  labelRadioTwo,
}) => {
  const onChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      handleChange(event.currentTarget.value);
    },
    [handleChange]
  );

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        row
        onChange={onChange}
        aria-label="options"
        key="row-radio-buttons-group"
        defaultValue={defaultValue}
        name={id}
      >
        <FormControlLabel
          value={"yes"}
          control={<Radio />}
          label={labelRadioOne}
        />
        <FormControlLabel
          value={"no"}
          control={<Radio />}
          label={labelRadioTwo}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default React.memo(RadioButton);
