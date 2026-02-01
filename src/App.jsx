import { useState } from 'react';
import 'animate.css';
const App = ()=>{
  const model = {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    username:'',
    mobile:''
  };

  const errModel = {
    firstname:null,
    lastname:null,
    email:null,
    password:null,
    username:null,
    mobile:null
  };
  const[formError, setFormError] = useState(errModel)

  const[form,setForm] = useState(model)

  const validator = (key, value)=>{
    if(!value.length)
    {
      setFormError({
        ...formError,
        [key]: `${key} field is required`
      })
    }
    else {
      setFormError({
        ...formError,
        [key]: null
      })
    }
  }
  
  const getFormValue = (e)=>{
    const input = e.target;
    const value = input.value;
    const key = input.name;
    setForm({
      ...form,
        [key]: value
    })
    validator(key, value)
  }
  
  const getData = (e)=>{
    e.preventDefault();
   // console.log(form);
    const keys = Object.keys(form)
    for(let key of keys)
    {
      let value = form[key]
      validator(key, value)
    }
  }
  return(
     <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white px-8 py-6 w-[450px] shadow-lg rounded-lg animate__animated animate__zoomIn">
        <h1 className='text-3xl font-bold mb-6 text-center'>Form Validation</h1>
        <form onSubmit={getData} autoComplete="off" className='flex flex-col gap-5'>
          <div className='flex flex-col gap-1'>
            <label className='text-lg font-semibold'>Firstname</label>
            <input
            onChange={getFormValue}
            name='firstname' 
            type='text'
            placeholder='Enter first name'
            className='border border-gray-300 rounded p-3'
            />
            {formError.firstname &&         <small className='text-rose-500 font-semibold text-sm'>{formError.firstname}</small>}
          </div>

           <div className='flex flex-col gap-1'>
            <label className='text-lg font-semibold'>Lastname</label>
            <input
            onChange={getFormValue}
            name='lastname' 
            type='text'
            placeholder='Enter last name'
            className='border border-gray-300 rounded p-3'
            />
            {formError.lastname &&         <small className='text-rose-500 font-semibold text-sm'>{formError.lastname}</small>}
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-lg font-semibold'>Email</label>
            <input
            onChange={getFormValue}
            name='email' 
            type='email'
            placeholder='example@gamil.com'
            className='border border-gray-300 rounded p-3'
            />
            {formError.email &&         <small className='text-rose-500 font-semibold text-sm'>{formError.email}</small>}
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-lg font-semibold'>Password</label>
            <input
            onChange={getFormValue}
            name='password' 
            type='password'
            placeholder='Enter your password'
            className='border border-gray-300 rounded p-3'
            />
            {formError.password &&         <small className='text-rose-500 font-semibold text-sm'>{formError.password}</small>}
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-lg font-semibold'>Username</label>
            <input
            onChange={getFormValue}
            name='username' 
            type='text'
            placeholder='Enter user name'
            className='border border-gray-300 rounded p-3'
            />
            {formError.username &&         <small className='text-rose-500 font-semibold text-sm'>{formError.username}</small>}
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-lg font-semibold'>Mobile</label>
            <input
            onChange={getFormValue}
            name='mobile' 
            type='number'
            placeholder='Enter your mobile no.'
            className='border border-gray-300 rounded p-3'
            />
            {formError.mobile &&         <small className='text-rose-500 font-semibold text-sm'>{formError.mobile}</small>}
          </div>

          <button className='bg-blue-500 text-white font-semibold rounded p-3 hover:bg-blue-400 transition delay-100' >Submit</button>
        </form>
      </div>
     </div>
  );
}
export default App;