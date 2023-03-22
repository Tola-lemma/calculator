
import { useReducer } from 'react';
import './calculator.css';
import { DigitButton } from './Digitbutton';
import { OperationButton } from './OperationButton';
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
      if(state.overwrite){
      return {
        ...state,
        currentOperands:payload.digit,
        overwrite:false
    }
  }
  if(payload.digit==="0" && state.currentOperands==="0") return state
  if(payload.digit==="." && state.currentOperands.includes(".")) return state
  return {
 ...state,
 currentOperands:`${state.currentOperands || ""}${payload.digit}`,
  }
case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperands==null && state.prevOperand == null) {
          return state
      }
      if(state.currentOperands==null){
          return{
              ...state,
              operation:payload.operation
          }
      }
      if(state.prevOperand==null){
          return{
              ...state,
              operation: payload.operation,
              prevOperand: state.currentOperands,
              currentOperands:null
          }
      }
      return{
          ...state,
          //
          operation: payload.operation,
          currentOperands: null
      }
  
case ACTIONS.CLEAR: return {}
case ACTIONS.EVALUATIONS:
  if(state.operation ==null || state.currentOperands==null ||state.prevOperand==null){
     return state
  }
  return{
      ...state,
      overwrite:true,
      operation:null,
      prevOperand:null,
      //
  }
case ACTIONS.DELETE_DIGITS:
  if (state.overwrite){
      return {
          ...state,
          overwrite:false,
          currentOperands:null
      }
  }
  if(state.currentOperands==null) return state
  if(state.currentOperands.length===1){
      return {...state,currentOperands:null}
  }
  return{
      ...state,
      currentOperands:state.currentOperands.slice(0,-1)
  }
  default:
      return state
  }
}
export const  Calculator=()=> {
  const [{currentOperands,prevOperand,operation},dispatch] = useReducer(reducer,{});
  return (
    <div className='calculator-background'>
      <a href='https://github.com/Tola-lemma/calculator' style={{fontSize:"2rem",fontWeight:"bold",marginLeft:"85rem"}}><i className="fa-brands fa-github"></i></a>
    <div className="calculator-grid">
      <div className='output'>
         <div className='prev-operands'>{prevOperand}{operation}</div>
         <div className='second-operands'>{currentOperands}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <OperationButton operation="+" dispatch={dispatch} />

      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperationButton operation="*" dispatch={dispatch} />

      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <OperationButton operation="/" dispatch={dispatch} />

      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch} />

      <DigitButton digit="." dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
      <button className="span-two">=</button>
    </div>
    </div>
  );
}
