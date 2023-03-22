
import { useReducer } from 'react';
import './calculator.css';
import { DigitButton } from './Digitbutton';
export const ACTIONS={
  ADD_DIGITS: 'addDigits',
  CHOOSE_OPERATION: 'chooseOpeeration',
  CLEAR:'clear',
  DELETE_DIGITS: 'deleteDigits',
  EVALUATIONS:'evaluations'
}
const reducer =(state,{type,payload})=>{
  switch(type){
    case ACTIONS.ADD_DIGITS:
      return {
        ...state,
        currentOperands:payload.digit,
    }
  }
}
export const  Calculator=()=> {
  const [{currentOperands,prevOperand,operation},dispatch] = useReducer(reducer,{});
  return (
    <div className='calculator-background'>
      <a href='https://github.com/Tola-lemma/calculator' style={{fontSize:"2rem",fontWeight:"bold",marginLeft:"85rem"}}><i className="fa-brands fa-github"></i></a>
    <div className="calculator-grid">
      <div className='output'>
         <div className='prev-operands'>{prevOperand}</div>
         <div className='second-operands'>{currentOperands}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>+</button>

      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <button>*</button>

      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <button>/</button>

      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <button>-</button>

      <DigitButton digit="." dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
      <button className="span-two">=</button>
    </div>
    </div>
  );
}
