function Keunggulan(props) {
  return (
    <div className="icon-box" data-aos="zoom-in" data-aos-delay={props.dataAosDelay}>
      <div className="icon"><i className={props.class}></i></div>
      <h4 className="title">{props.title}</h4>
      <p className="description">{props.desc}</p>
    </div>
  )
}

export default Keunggulan