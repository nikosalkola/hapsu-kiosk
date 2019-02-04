import './index.css'
import React from 'react'
import tramIcon from './tramIcon.svg'


export default () => (
  <div className="Trams">
    <div className="TramsHead">
      <div> 7 </div>
      <img src= { tramIcon } alt="tramIcon" />
      <div> 9 </div>
    </div>
    <div className="line" />
    <div className="TramsClock">
      <div className="TramsCol">
        <div className="time">13:39</div>
        <div className="time">13:42</div>
        <div className="time">13:45</div>
        <div className="time">13:51</div>
        <div className="time">13:59</div>
      </div>
      <div className="TramsCol">
        <div className="time">13:39</div>
        <div className="time">13:42</div>
        <div className="time">13:45</div>
        <div className="time">13:51</div>
        <div className="time">13:59</div>
      </div>
    </div>
  </div>
)
