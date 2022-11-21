import React from 'react';

type ControlWithButtonsProps = {
  value: string,
  onChange: (event?: any) => void,
  buttons: {
    leftButtons?: Array<Button>,
    rightButtons?: Array<Button>
  }
}

type Button = {
  name: string,
  callback: (arg?: string) => void
}

export default function ControlWithButtons({value, onChange, buttons}: ControlWithButtonsProps) {
  return (
    <div style={{display: 'flex'}}>

      {buttons.leftButtons?.map((elem: Button, index: number): React.ReactNode => {
        return <button key={index} onClick={() => elem.callback(value)}>{elem.name}</button>
      })}

      <input value={value} onChange={onChange} />

      {buttons.rightButtons?.map((elem: Button, index: number): React.ReactNode => {
        return <button key={index} onClick={() => elem.callback(value)}>{elem.name}</button>
      })}

    </div>
  )
}
