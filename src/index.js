import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import MainView from 'components/MainView'
import Panel from 'components/Panel'

const App = () => (
  <>
    <MainView>
      <Panel>
        <div style={{backgroundColor:'#fdfdfd'}}>left</div>
        <div style={{backgroundColor:'#666666'}}>left</div>
      </Panel>
      <MainView>
        <div style={{backgroundColor:'#333333'}}>right</div>
        <div style={{backgroundColor:'#999999'}}>right</div>
      </MainView>
    </MainView>
  </>
)


ReactDOM.render(<App />, document.getElementById('root'))
