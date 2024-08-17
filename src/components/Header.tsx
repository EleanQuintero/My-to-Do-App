import React from 'react'

import { CreateTodo } from './CreateTodo'
export const Header: React.FC = () => {
  const imgURL = 'https://imgs.search.brave.com/YF8pWGiJn3akjHyxMBrdi2rTt2PfYyC8zjHnQtni-8s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtcHJvZHVjdGlv/bi5ucG1qcy5jb20v/MjU1YTExOGY1NmY1/MzQ2Yjk3ZTU2MzI1/YTEyMTdhMTYuc3Zn'
  const style = { width: '60px', heigh: 'auto' }

  return (
    <header className='header'>
      <h1>todo <img src={imgURL} style={style} /></h1>
      <CreateTodo />
    </header>
  )
}
