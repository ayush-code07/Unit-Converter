import React from 'react'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router'

const Result = () => {
  const navigate = useNavigate()
  let location = useLocation()

  const conversionResult = location.state?.data
  console.log(conversionResult);

  return (
    <div className='px-6 py-5'>
      <h1 className='font-medium text-2xl mb-2 font-playpen'>Result of your calculation</h1>
      <p className='font-semibold text-3xl mb-5 font-playpen'>{conversionResult.val}{conversionResult.convertFrom} = {conversionResult.result}{conversionResult.convertTo}</p>

      <form action={() => {navigate('/')}}>
        <button className='border-2 px-4 py-1 font-playpen rounded-md hover:bg-blue-500' type="submit">Reset</button>
      </form>
    </div>
  )
}

export default Result