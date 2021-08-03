import React from 'react'
import './App.css'
import Weather from './components/weather/Weather'
import {store} from './redux/store'
import {Provider} from 'react-redux'

const App = () => {
  return (
    <Provider store= {store}>
    <React.Fragment>
      <Weather/>

    </React.Fragment>
    </Provider>
      
    
  )
}

export default App
