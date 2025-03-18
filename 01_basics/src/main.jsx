import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
const linka = (
  <a href='https://google.com'>Click Me</a>
)

const ele = React.createElement(
  'a',
  {href:'https://wikipedia.com', target:'_blank'},
  'wikipedia link'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    {ele}
  </>
  
  
)

