import React from 'react'
import Markdown from 'markdown-to-jsx'

const Readme = (props) => {
  return (
    <div>
      <Markdown className="markdown-body my-20">{props.readme}</Markdown>
    </div>
  )
}
export default Readme
