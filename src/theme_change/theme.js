import React, { useState } from 'react'
import './theme.css'

function Theme(){
let [theme,settheme] = useState(false)

function theme_handle(){
  settheme(!theme)
}
let theme_control = theme ? 'dark': 'light' 

  return(
    <div className={theme_control} >
      <button onClick = {theme_handle}>change theme</button>
    </div>
    )
}

export default Theme;