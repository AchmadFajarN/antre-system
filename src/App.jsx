import './style/index.css'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <>
      <main className=''>
        <Outlet />
      </main>
    </>
  )
}

export default App