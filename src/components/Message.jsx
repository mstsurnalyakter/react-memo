import React, { memo } from 'react'

const Message = ({number}) => {
    console.log('message rendering')
  return (
    <h1>Message {number}</h1>
  )
}


export default memo(Message);