import '../App.css';

type ButtonsPropsType = {
  count: number
  maxCount: number
  increment: () => void
  reset: () => void
}

function Buttons(props: ButtonsPropsType) {

  const classNameBtnIncrement = (props.count === props.maxCount) ? "Btn-increment-max" : "Btn-increment"
  const classNameBtnReset = (props.count === 0) ? "Btn-reset-start" : "Btn-reset"

  return (

    <div className="Btn-wrapper">

      <div className={classNameBtnIncrement}>
        {
          (props.count === props.maxCount) ? <button disabled>inc</button> : <button onClick={props.increment}>inc</button>
        }
      </div>

      <div className={classNameBtnReset}>
        {
          (props.count === 0) ? <button disabled>reset</button> : <button onClick={props.reset}>reset</button>
        }
      </div>

    </div>
  );
}

export default Buttons;