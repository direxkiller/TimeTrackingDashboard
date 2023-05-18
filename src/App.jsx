import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeCard from './TimeCard'
import UserCard from './UserCard'

function App() {

  return (

    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <UserCard />
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-4">
              <TimeCard icon="url(../img/icon-work.svg)"  title="Work" letra="32hrs" info="last week- 36hrs" fondo="hsl(15, 100%, 70%)"/>
            </div>
            <div className="col-4">
              <TimeCard icon="url(../img/icon-play.svg)"  title="Play" letra="10hrs" info="last week- 8hrs" fondo="hsl(195, 74%, 62%)"/>
            </div>
            <div className="col-4">
              <TimeCard icon="url(../img/icon-study.svg)"  title="Study" letra="4hrs" info="last week- 7hrs" fondo="hsl(348, 100%, 68%)"/>
            </div>
            <div className="col-4">
              <TimeCard icon="url(../img/icon-exercise.svg)"  title="Exercise" letra="4hrs" info="last week- 5hrs" fondo="hsl(145, 58%, 55%)"/>
            </div>
            <div className="col-4">
              <TimeCard icon="url(../img/icon-social.svg)"  title="Social" letra="5hrs" info="last week- 10hrs" fondo="hsl(264, 64%, 52%)"/>
            </div>
            <div className="col-4">
              <TimeCard icon="url(../img/icon-self-care.svg)"  title="Self-Care" letra="2hrs" info="last week- 2hrs " fondo="hsl(43, 84%, 65%)"/>
            </div>
          </div>
        </div>
      </div>
    </div>



  )

}

export default App
