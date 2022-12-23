import React, { useState } from 'react'

// components
import { Selection } from './Selection'

// styles and imgs
import './Homepage.scss'

function Homepage() {
  const [displayIndex, setDispaplyIndex] = useState(0)

  const selection = (
    <select
      value={displayIndex}
      onChange={(e) => {
        setDispaplyIndex(e.target.value)
      }}
    >
      {Selection.map((v, i) => {
        return (
          <option key={i} value={i}>
            {v.name}
          </option>
        )
      })}
    </select>
  )

  const MyComponent = Selection[displayIndex].component
  return (
    <div className="homepage-container">
      <div className="homehomepagepae-navbar">
        <p>navbar</p>
      </div>
      <div className="homepage-main">
        <div className="hompage-tabs">{selection}</div>
        <div className="hompage-body">
          <MyComponent />
        </div>
      </div>
      <div className="homepage-footer">
        <p>footer</p>
      </div>
    </div>
  )
}

export default Homepage
