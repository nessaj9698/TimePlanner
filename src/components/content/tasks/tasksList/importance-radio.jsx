import React, { useEffect } from 'react';
import { FormControl,FormLabel,RadioGroup,Radio,FormControlLabel } from '@mui/material';
import { setEventImportance } from '../../../../redux/reducers/rootReducer';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';



const ImportanceRadio = (props) => {
  
    const dispatch = useDispatch();

    return (
<FormControl component="form" className='importances' required events={props.events}>
  <RadioGroup row
    name="radio-buttons-group"
    onChange={props.onChange}
    events={props.events}
  >
    
    <FormControlLabel value="Маловажно" control={<Radio events={props.events}/>} label="Маловажно" />
    <FormControlLabel value="Важно" control={<Radio events={props.events}/>} label="Важно" />
    <FormControlLabel value="Очень важно" control={<Radio events={props.events}/>} label="Очень важно" />
    
                 
  </RadioGroup>
  
</FormControl>

    )
}

export default ImportanceRadio


