import React from 'react'
import {primaryTextColor as color} from './style'

const style = {
  color
}

export default function PageSubHeader({children}) {
  return (
    <h2>{children}</h2>
  )
}
