import React from 'react';
import { FormControl, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { useDispatch } from 'react-redux';



const ImportanceRadio = (props) => {

  return (
    <FormControl component="form" className='importances' required events={props.events}>
      <RadioGroup row
        name="radio-buttons-group"
        onChange={props.onChange}
        events={props.events}
      >
        <FormControlLabel value="Маловажно" control={<Radio events={props.events} />} label="Маловажно" />
        <FormControlLabel value="Важно" control={<Radio events={props.events} />} label="Важно" />
        <FormControlLabel value="Очень важно" control={<Radio events={props.events} />} label="Очень важно" />
      </RadioGroup>
    </FormControl>
  )
}

export default ImportanceRadio


