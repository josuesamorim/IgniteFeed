import { Header } from './components/Header'
import { Post } from './posts'
import styles from './App.module.css'
import "./global.module.css"
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
