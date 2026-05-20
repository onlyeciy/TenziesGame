export default function Die(props) {
    const style = props.isHeld ? '#50C878': '#f2f2f2'

  return (
      <button className="die" style={{backgroundColor:`${style}`}} onClick={props.hold}>{props.dieValue}</button>
  )
}
