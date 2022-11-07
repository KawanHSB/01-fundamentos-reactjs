import { useState } from 'react'
import { Header } from './components/Header/Header'
import "./global.css"
import styles from "./app.module.css"
import { Sidebar } from './components/Header/Sidebar/Sidebar'

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main></main>
      </div>
    </div>
  )
}

export default App
