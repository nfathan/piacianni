function Brand(props) {
  return (
    <div className="logo mr-auto">
      <a href="index.html">
        <img src={props.source} alt="logo-piacianni" className="img-fluid" />
      </a>
    </div>
  )
}
export default Brand 