import { useState } from 'react'
import { useNavigate } from 'react-router'

function Weight() {
    const navigate = useNavigate()

    async function handleConvert(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const payload = {
            val: formData.get('val'),
            convertFrom: formData.get('convertFrom'),
            convertTo: formData.get('convertTo')
        }

        const response = await fetch("http://localhost:3000/weight", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        const result = await response.json()
        navigate('/result', {
            state: { data: result }
        })
    }

    return (
        <div className='bg-white min-h-screen min-w-screen inline'>
            <div className='rounded-md font-sans'>
                <div className='mt-5 px-5 text-xl font-playpen mb-5 font-medium'>
                    <form onSubmit={handleConvert}>
                        <h3>Enter the Weight to convert</h3>
                        <input className='mt-2 border-3 rounded-md' name='val'></input>

                        <h3 className='mt-5'>Unit to Convert from</h3>
                        <select className='mt-2 border-3 px-9 block rounded-md' name='convertFrom'>
                            {/*  milligram, gram, kilogram, ounce, pound. */}
                            <option value="milligram">mg</option>
                            <option value="gram">g</option>
                            <option value="kilogram">kg</option>
                            <option value="ounce">oz</option>
                            <option value="pound">lb</option>
                        </select>

                        <h3 className='mt-5'>Unit to Convert to</h3>
                        <select className='mt-2 border-3 px-9 block rounded-md' name='convertTo'>
                            {/*  milligram, gram, kilogram, ounce, pound. */}
                            <option value="milligram">mg</option>
                            <option value="gram">g</option>
                            <option value="kilogram">kg</option>
                            <option value="ounce">oz</option>
                            <option value="pound">lb</option>
                        </select>

                        <input className='mt-6 border-4 px-4 py-1 rounded-md hover:bg-blue-500' type="submit" value="Convert" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Weight
