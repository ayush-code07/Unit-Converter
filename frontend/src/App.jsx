import './index.css'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router'

function App() {
  return (
    <>
      <div className='bg-white min-h-screen min-w-screen px-130 py-15'>
        <div className='border-4 pb-8 rounded-md font-sans'>
          <h1 className='p-4 text-black text-3xl font-semibold select-none font-playpen'>Unit Converter</h1>
          <nav className='px-2 pb-5 gap-4'>
            <NavLink className='px-4 focus:text-blue-900 font-bold focus:underline font-playpen text-2xl' to="/length">Length</NavLink>
            <NavLink className='px-4 focus:text-blue-900 font-bold focus:underline font-playpen text-2xl' to="/weight">Weight</NavLink>
            <NavLink className='px-4 focus:text-blue-900 font-bold focus:underline font-playpen text-2xl' to="/temperature">Temperature</NavLink>
          </nav>
          <div>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
