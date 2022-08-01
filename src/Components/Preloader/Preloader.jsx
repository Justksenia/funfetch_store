import React from "react"
import ContentLoader from "react-content-loader"

const Preloader = (props) => (
  <ContentLoader 
    speed={3}
    width={240}
    height={320}
    viewBox="0 0 240 320"
    backgroundColor="#d8d4d4"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-2" y="34" rx="0" ry="0" width="271" height="154" /> 
    <rect x="7" y="238" rx="0" ry="0" width="155" height="14" /> 
    <rect x="24" y="264" rx="0" ry="0" width="80" height="15" /> 
    <rect x="25" y="290" rx="0" ry="0" width="80" height="15" />
  </ContentLoader>
)

export default Preloader