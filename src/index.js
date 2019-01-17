import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Grid from 'components/Grid'
import Clock from 'components/Clock'
import Weather from 'components/Weather'
import Trams from 'components/Trams'




const App = () => (
  <Grid>
    <Clock />
    <Weather />
    <Trams />
  </Grid>
)




ReactDOM.render(<App />, document.getElementById('root'))
