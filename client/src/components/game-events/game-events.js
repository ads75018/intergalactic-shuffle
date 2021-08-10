import React, { Component } from 'react'
import TimeRemaining from "../game-events/time-remaining"
import Score from "../game-events/score"
import Objects from "../game-events/objects"
import Notice from "../game-events/notice"




export default class GameEvents extends Component {
  render() {
    // console.log("props", this.props.time)
    console.log(this.props.one,this.props.two,this.props.three)
    // console.log("props score", this.props.score)
    return (
      <div className="game-events">
        <TimeRemaining timeRemaining={this.props.time} />
        <Score score={this.props.scorePlayer} />
        <Objects one ={this.props.one} two ={this.props.two} three ={this.props.three} />
        <Notice />


      </div>
    )
  }
}

