
import './calculator.css';

export const  Calculator=()=> {
  return (
    <div className='calculator-background'>
    <div className="calculator-grid">
      <div className='output'>
         <div className='prev-operands'>7</div>
         <div className='second-operands'>3+4</div>
      </div>
      <button>AC</button>
      <button>DEL</button>
      <button>+</button>

      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>

      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>/</button>

      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>

      <button>0</button>
      <button>.</button>
      <button>=</button>
    </div>
    </div>
  );
}
