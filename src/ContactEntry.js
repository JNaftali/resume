import React from 'react'

export default function ContactEntry({children: text}) {
  const words = text.split(' ')

  return (
    <div><span>{words.shift()}</span><span>{words.join(' ')}</span></div>
  )
}
