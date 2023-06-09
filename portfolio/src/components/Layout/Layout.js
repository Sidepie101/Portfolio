import React from 'react';
import Header from '../header/Header';
import Pied from '../footer/Pied'

const layout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        <Pied />

    </div>
  )
}

export default layout