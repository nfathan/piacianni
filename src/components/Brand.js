import ImageFluid from "./ImageFluid"

function Brand(props) {
  return (
    <div className="logo mr-auto">
      <a href="index.html">
        <ImageFluid source={props.source} altImg="logo-piacianni" />
      </a>
    </div>
  )
}
export default Brand 