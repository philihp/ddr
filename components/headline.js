import React from 'react'
import { MAXIMUM_BLUE, COLUMBIA_BLUE } from './colors'

const Headline = () => (
  <>
    <h1 className="title">demidigitalrenegades</h1>
    <style jsx>
      {`
        h1 {
          margin: 0;
          text-shadow: 0 0 10px ${MAXIMUM_BLUE}, 0 0 5px ${COLUMBIA_BLUE};
        }
      `}
    </style>
  </>
)

export default Headline
