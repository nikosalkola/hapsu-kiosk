import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import MainView from 'components/MainView'

// TODO: make Panel component

const App = () => (
  <>
    <MainView>
      <div>left</div>
      <div>right</div>
    </MainView>
  </>
)


ReactDOM.render(<App />, document.getElementById('root'))
