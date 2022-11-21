import React from 'react';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import "./ControlAutocomplete.css";
import autocomplete from '../store/autocomplete';

type ControlAutocompleteProps = {
  value: string,
  onChange: (event?: any) => void,
  maxCount: number
}

export default observer(function ControlAutocomplete({value, onChange, maxCount}: ControlAutocompleteProps) {
  const [activeHint, setActiveHint] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);

  const onChangeValue = (event: any) => {
    onChange(event.target.value);
    setShowHint(true);
    autocomplete.getCountryByName(event.target.value);
  };
  
  const onKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      setActiveHint(0);
      setShowHint(false);
      onChange(autocomplete.hints[activeHint].name);
    } else if (event.keyCode === 38) {
      if (activeHint === 0) {
        return;
      }

      setActiveHint(activeHint - 1);
    } else if (event.keyCode === 40) {
      if (activeHint - 1 === autocomplete.hints.length) {
        return;
      }

      setActiveHint(activeHint + 1);
    }
  };

  const onClick = (сountry: string) => {
    onChange(сountry);
    setActiveHint(0);
    setShowHint(false);
  };

  let hintListComponent: React.ReactElement | null = null;

  if (showHint && value) {
    if (autocomplete.hints.length) {
      hintListComponent = (
        <ul className="hints" style={{height: autocomplete.hints.length > maxCount ? maxCount * 38 + 'px' : 'auto'}}>
          {autocomplete.hints.map((hint, index) => {
            let className;

            if (index === activeHint) {
              className = "hint-active";
            }

            return (
              <li className={className} key={hint.name} onClick={() => onClick(hint.name)}>
                {hint.name} <span className="fullName">{hint.fullName}</span> <img src={hint.flag}/>
              </li>
            );
          })}
        </ul>
      );
    } else {
      hintListComponent = (
        <div className="no-hints">
          <span>Нет подсказок!</span>
        </div>
      );
    }
  }
  
  return (
    <div>
      <input
        value={value}
        onChange={onChangeValue}
        onKeyDown={onKeyDown}
      />
      {hintListComponent}
    </div>
  )
});
