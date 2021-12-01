import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface Props {
    label: string;
    valueOne: string;
    valueTwo: string;
    labelRadioOne: string;
    labelRadioTwo: string;
}

const RadioButton: React.FC<Props> = ({
    label,
    valueOne,
    valueTwo,
    labelRadioOne,
    labelRadioTwo,
  }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup row aria-label="options" name="row-radio-buttons-group">
        <FormControlLabel value={valueOne} control={<Radio />} label={labelRadioOne} />
        <FormControlLabel value={valueTwo} control={<Radio />} label={labelRadioTwo} />
    </RadioGroup>
    </FormControl>
  );
}

export default React.memo(RadioButton);