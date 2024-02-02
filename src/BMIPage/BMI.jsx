import { useState } from 'react';
import './BMI.css'

const BMI = () => {
    const [weight,setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi,setBmi] = useState('')
    const [message,setMessage] = useState('')

    let findBMI = (e) =>{
        e.preventDefault()
        if(weight === 0 || height === 0){
            alert('Please enter your weight and height')
        }
        else{
            let bmi = (weight/(height*height)*703)
            setBmi(bmi.toFixed(2))

            if(bmi<1500){
                setMessage('you are underweight')
            }
            else if(bmi >=1500 && bmi <2500){
                setMessage('you have healthy body')
            }
            else{
                setMessage('you are over weight')
            }
        }
    }

    let reload = () =>{
        window.location.reload()
    }
    return (
        <div className='bgImg'>
            <div className='content py-8 px-10'>
                <div className='text-center'>
                <h2 className='text-3xl font-bold py-1'>Calculate Your BMI</h2>
                <p className='text-base font-medium text-[#555454] py-1'>Body mass index,or BMI  is used to determine whether<br></br> you are a healthy weight range for your height</p>
                </div>

                <form onSubmit={findBMI} className='py-12 space-y-4'>
                      <div className='flex flex-col space-y-2'>
                        <label className='font-medium text-[#505050]'>Your weight(kg)</label>
                        <input value={weight} onChange={(e) => setWeight(e.target.value)} type="text" className='border outline-none py-2 px-2 rounded-md' placeholder='Enter your weight' />
                      </div>

                      <div className='flex flex-col space-y-2'>
                        <label className='font-medium text-[#505050]'>Your Height(in)</label>
                        <input value={height} onChange={(e) => setHeight(e.target.value)} type="text" className='border outline-none py-2 px-2 rounded-md' placeholder='Enter your height' />
                      </div>

                      <div className='flex cursor-pointer space-x-4'>
                         <input className='py-2 px-8 bg-[#0A66C2] text-white font-medium hover:bg-[#5aa7f3] duration-300 hover:text-[#262626] cursor-pointer' type="submit" value="Calculate" />

                         <input onClick={reload} className='py-2 px-8 bg-[red] text-white font-medium hover:bg-[#f46363] duration-300 hover:text-[#262626] cursor-pointer' type="submit" value="Reload" />
                      </div>

                      <div>
                          <h2 className='text-lg font-medium py-2'>Your BMI is: {bmi}</h2>
                          <p className='text-red-500'>{message}</p>
                      </div>
                </form>
            </div>
        </div>
    );
};

export default BMI;