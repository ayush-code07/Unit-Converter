import { useState } from 'react'
import { useNavigate } from 'react-router'

function Length() {
    const navigate = useNavigate()

    async function handleConvert(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const payload = {
            val: formData.get('val'),
            convertFrom: formData.get('convertFrom'),
            convertTo: formData.get('convertTo')
        }

        const response = await fetch("http://localhost:3000/length", {
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
                <div className='mt-5 px-5 text-xl mb-5 font-playpen font-medium'>
                    <form onSubmit={handleConvert}>
                        <h3>Enter the length to convert</h3>
                        <input className='mt-2 border-3 rounded-md' name='val'></input>

                        <h3 className='mt-5'>Unit to Convert from</h3>
                        <select className='mt-2 border-3 px-9 block rounded-md' name='convertFrom'>
                            {/* millimeter, centimeter, meter, kilometer, inch, foot, yard, mile. */}
                            <option value="millimeter">mm</option>
                            <option value="centimeter">cm</option>
                            <option value="meter">m</option>
                            <option value="kilometer">km</option>
                            <option value="inch">in</option>
                            <option value="foot">ft</option>
                            <option value="yard">yard</option>
                            <option value="mile">mile</option>
                        </select>

                        <h3 className='mt-5'>Unit to Convert to</h3>
                        <select className='mt-2 border-3 px-9 block rounded-md' name='convertTo'>
                            {/* millimeter, centimeter, meter, kilometer, inch, foot, yard, mile. */}
                            <option value="millimeter">mm</option>
                            <option value="centimeter">cm</option>
                            <option value="meter">m</option>
                            <option value="kilometer">km</option>
                            <option value="inch">in</option>
                            <option value="foot">ft</option>
                            <option value="yard">yard</option>
                            <option value="mile">mile</option>
                        </select>

                        <input className='mt-6 border-4 px-4 py-1 rounded-md hover:bg-blue-500' type="submit" value="Convert" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Length
