import React from 'react'
import { ACTIONS } from './calculator'
export function DigitButton({dispatch,digit}) {
  return <button onClick={()=>dispatch({type:ACTIONS.ADD_DIGITS,payload:{digit}})}>{digit}</button>
}
