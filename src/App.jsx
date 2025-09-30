import './style/index.css'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <>
      <main className='mb-30'>
        <Outlet />
      </main>
    </>
  )
}

export default App