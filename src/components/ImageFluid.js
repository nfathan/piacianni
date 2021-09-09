function ImageFluid(props) {
  return (
    <img src={props.source} className="img-fluid" alt={props.altImg} />
  )
}

export default ImageFluid