import React from "react";
import { useState } from 'react';
import "./App.css";
import ControlWithButtons from './Controls/ControlWithButtons';
import ControlAutocomplete from './Controls/ControlAutocomplete';

function App() {

  const [value, setValue] = useState('');
  const onChange = (event: any) => {
    setValue(event.target.value);
  };
  const cleaner = () => {
    setValue('');
  }
  const setHelloWorld = () => {
    setValue('Hello world!');
  }

  const [value2, setValue2] = useState('');
  const onChange2 = (event: any) => {
    setValue2(event.target.value);
  };
  const alertText = () => {
    alert(value2);
  }
  const alertNumber = () => {
    if(!isNaN(Number(value2)))
      alert(Number(value2));
  }

  const [value3, setValue3] = useState('');
  const onChange3 = (value: any) => {
    setValue3(value);
  };

  const [value4, setValue4] = useState('');
  const onChange4 = (value: any) => {
    setValue4(value);
  };

  return (
    <div style={{width: '500px', margin: '100px auto'}}>
      ControlWithButtons
      <ControlWithButtons
        value={value}
        onChange={onChange}
        buttons={{
          rightButtons: [
            {name: 'Clear', callback: cleaner},
            {name: 'Hello world!', callback: setHelloWorld},
          ]
        }}
      ></ControlWithButtons>
      <br />
      <ControlWithButtons
        value={value2}
        onChange={onChange2}
        buttons={{
          leftButtons: [
            {name: 'alertNumber', callback: alertNumber},
          ],
          rightButtons: [
            {name: 'alertText', callback: alertText},
          ]
        }}
      ></ControlWithButtons>

      <hr />
      
      ControlAutocomplete
      <ControlAutocomplete
        value={value3}
        onChange={onChange3}
        maxCount={3}
      ></ControlAutocomplete>
      <br />
      <ControlAutocomplete
        value={value4}
        onChange={onChange4}
        maxCount={10}
      ></ControlAutocomplete>
    </div>
  );
}

export default App;
