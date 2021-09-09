function ContactItem(props) {
  return (
    <div className={props.class1}>
      <i className={props.class2}></i>
      <h4>{props.h4Text}</h4>
      <p>{props.pText}</p>
    </div>
  )
}

export default ContactItem