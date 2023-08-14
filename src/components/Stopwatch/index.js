import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onReset = () => {
    this.setState({
      isTimerRunning: false,
      timeInSeconds: 0,
    })
    clearInterval(this.timerId)
  }

  onStop = () => {
    this.setState({
      isTimerRunning: false,
    })
    clearInterval(this.timerId)
  }

  onStart = () => {
    this.timerId = setInterval(this.timer, 1000)
    this.setState({
      isTimerRunning: true,
    })
  }

  timer = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }))
  }

  getTimer = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    const resMinutes = minutes > 9 ? minutes : `0${minutes}`
    const resSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${resMinutes}:${resSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Stopwatch</h1>
          <div className="inner-card">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="title"> Timer </p>
            </div>
            <h1 className="timing">{this.getTimer()}</h1>
            <div className="btn-card">
              <button
                className="btn btn-green"
                disabled={isTimerRunning}
                type="button"
                onClick={this.onStart}
              >
                Start
              </button>
              <button
                className="btn btn-red"
                type="button"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                className="btn btn-reset"
                type="button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
