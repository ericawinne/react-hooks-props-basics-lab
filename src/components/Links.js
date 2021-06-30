import React from "react"

const Links = ({ github, linkedin }) => {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>
        {github}
      </a>
      <a href={linkedin}>
        {linkedin}
      </a>
    </div>
  )
}

export default Links

//Create a new component called Links. In this component, display the following:

//a <h3> element with the text of "Links"
//a <a> element with its href and text set to the user's Github link, passed down as a prop
//a second <a> element with its href and text set to the user's LinkedIn link, passed down as a prop