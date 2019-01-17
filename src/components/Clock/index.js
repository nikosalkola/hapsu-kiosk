import './index.css'
import React from 'react'
import Time from 'react-live-clock'


export default () => (
  <div className="Clock">
    <Time
      format={ 'HH:mm' }
      ticking
    />
    <Time
      format={ 'dddd D.M.YYYY' }
      ticking
    />
  </div>
)
