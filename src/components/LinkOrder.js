function LinkOrder(props) {
  return (
    <div className={props.class}>
      <a 
        href="https://wa.me/6285328749030" 
        className={props.classElmtA}
        target='blank'>
          {props.text}
      </a>
    </div>
  )
}

export default LinkOrder 