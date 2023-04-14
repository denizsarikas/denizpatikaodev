import React from 'react'

import { Button1, Button2, Button3 } from 'denizpatikaodev'
import 'denizpatikaodev/dist/index.css'

const App = () => {
  return (
    <>
      <div className='container'>
        <Button1 text={'Button1'} onClick={() => alert('Button1')} />
        <Button2 text={'Button2'} onClick={() => alert('Button2')} />
        <Button3 text={'Button3'} onClick={() => alert('Button3')} />
      </div>

    </>
  )
}

export default App