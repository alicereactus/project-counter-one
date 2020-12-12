import '../App.css';

type DisplayPropsType = {
  count: number
  maxCount: number
}

function Display(props: DisplayPropsType) {
  const classNameDisplayWrapper = (props.count === props.maxCount) ? "Display-wrapper-max" : "Display-wrapper"

  return (

    <div className={classNameDisplayWrapper}>
      {props.count}
    </div>

  );
}

export default Display;
