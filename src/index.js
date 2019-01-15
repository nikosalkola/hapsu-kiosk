import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Grid from 'components/Grid'
import Clock from 'components/Clock'




const App = () => (
  <Grid>
    <Clock />
    <div />
    <div />
  </Grid>
)




ReactDOM.render(<App />, document.getElementById('root'))
