import { useState } from 'react';
import './form.css';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Form = () => {

const {register, handleSubmit, formState: { errors }} = useForm()
const [userInfo, setUserInfo] = useState()

const onSubmit = (data) => {
  setUserInfo(data)
  console.log(data)
}
console.log(errors)
    
  return (
    <section>
        <div className="register">
        <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
            <div className="col-1">
                <h2> SignUp To CareMark </h2>
                {/* <span>register and enjoy the service</span> */}

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
               
                <input type="text"  name="fullname"  placeholder="fullname" {...register("fullname", {required: true, })}   />
                {/* <p>{errors.firstname?.message}</p>  OR */} 
                {errors.fullname && <p className='errors' >  fullname is required </p>}
                
                <input type="text" name="medical facility" placeholder="medical facility"  {...register("medicalfacility", {required: true, })}  />
                {/* <p>{errors.username?.message}</p> OR */}
                {errors.medicalfacility && <p className='errors'> medicalfacility is required </p>}
                
                <input type="text"  name="location"  placeholder="location"  {...register("location", {required: true,})} />
                {/* <p>{errors.lastname?.message}</p>  OR */}
                {errors.location && <p className='errors'> location is required </p>}

                <input type="email" name="email" placeholder="name@gmail.com" {...register("email", {required: true, 
                pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
                message: 'Please enter a valid email', },})} />
                {/* <p>{errors.email?.message}</p> OR */}
                {errors.email && <p className='errors' > email is required </p>}    

                <input type="password" name="password"  placeholder="pass********"   {...register("password", {
                required: true, minLength: {
                value: 6, message: "password must be more than 6 characters", }, maxLength: {
                value: 10, message: "password must not exceed 6 characters", } })} />
                {/* <p>{errors.password?.message}</p> OR */}
                {errors.password && <p className='errors' > password is required </p>}

                <input type="password" name="cpassword"  placeholder="confirm pass********"  {...register("cpassword", {
                required: true, minLength: {
                value: 6, message: "password must be more than 6 characters", }, maxLength: {
                value: 10, message: "password must not exceed 6 characters", } })} />
                {/* <p>{errors.cpassword?.message}</p> OR */}
                {errors.cpassword && <p className='errors' > comfirm password </p>}
                    <button className='btn'>Sign In</button>
                    <p>
      Already have an account? 
      <Link className="link" to="/login">Log In</Link>

    </p>
                </form>

            </div>
        </div>
    </section>
  )
}

export default Form


            