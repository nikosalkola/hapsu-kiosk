import './index.css'
import React, { Component } from 'react'
import tramIcon from './tramIcon.svg'




class Trams extends Component {

  state = {
    loading: true,
  }



  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }



  render() {

    if ( this.state.loading ) {
      return (
        <div className="Trams">
          Loading
        </div>
      )
    }

    const tramNineNumber = 9

    return (
      <div className="Trams">
        <div className="TramsNumber"> 7 </div>
        <img src= { tramIcon } alt="tramIcon" />
        <div className="TramsNumber">{ tramNineNumber }</div>

        <div className="TramsLine" />
        <div className="TramsCol">
          <div className="TramsTime">13:39</div>
          <div className="TramsTime">13:42</div>
          <div className="TramsTime">13:45</div>
          <div className="TramsTime">13:51</div>
          <div className="TramsTime">13:59</div>
        </div>
        <div className="TramsCol TramsColLast">
          <div className="TramsTime">13:39</div>
          <div className="TramsTime">13:42</div>
          <div className="TramsTime">13:45</div>
          <div className="TramsTime">13:51</div>
          <div className="TramsTime">13:59</div>
        </div>
      </div>
    )
  }

}

export default Trams
