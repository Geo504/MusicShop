'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';

import { useAppContext } from '@/context/AppContext';
import { loginSchema } from '../../../schemas/loginSchema';
import { signUpSchema } from '../../../schemas/signUpSchema';
import { getAuth } from '@/services/getAuth';
import { createUser } from '@/services/createUser';

import style from './LoginForm.module.css'
import { FiMail } from 'react-icons/fi';
import { 
  AiOutlineGoogle,
  AiOutlineGithub,
  AiOutlineUser,
  AiOutlineEyeInvisible,
  AiOutlineEye
} from 'react-icons/ai';



export default function LoginForm() {
  const {actions} = useAppContext();
  const [loginMode, setLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  const setUserInfo = actions.setUserInfo;
  const setToken = actions.setToken;
  const {push} = useRouter();

  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: yupResolver(loginMode?loginSchema:signUpSchema),
  });

  const handleLoginMode = () => {
    setLoginMode(!loginMode);
    reset();
  }

  const onSubmit = handleSubmit( async(data) => {
    if (loginMode){
      const userData = await getAuth(data, setToken);
      if (!userData) return;
      else{
        setUserInfo(userData);
        push('/');
        alert('Welcome!!!');
        return;
      }
    } else {
      const userData = await createUser(data);
      if (!userData) {
        alert('Error creating user');
        return;
      }
      else{
        reset();
        setLoginMode(true);
        alert('User created successfully!');
        return;
      }
    }
  });


  return (
    <div className={style.form_container}>
      <h1 className='text-4xl font-bold'>
        {loginMode?'Login':'Sign Up'}
      </h1>

      <div className={style.social_web_container}>
        <p className='text-sm mb-2 text-center'>Choose your preferred login method:</p>
        
        <div className='flex gap-2 justify-center'>
          <button className={style.social_web_btn}>
            <AiOutlineGoogle className='text-lg' />
            Google
          </button>
          <button className={style.social_web_btn}>
            <AiOutlineGithub className='text-lg' />
            Github
          </button>
        </div>

        <p className={style.social_web_or}>Or:</p>
      </div>

      <form className='min-w-[100%] flex flex-col gap-2' onSubmit={onSubmit}>
        <div className='flex flex-col gap-8'>
          {loginMode?'':(
            <div className={`${style.input_group} ${errors.username?style.error:''}`}>
              <input 
                type="text" 
                name='username'
                id='username'
                {...register('username')}
                placeholder='' />
              <label htmlFor='username'>Username:</label>
              <AiOutlineUser className={style.form_icon} />
              {<span>{errors.username?.message}</span>}
            </div>
          )}

          <div className={`${style.input_group} ${errors.email?style.error:''}`}>
            <input 
              type="text" 
              name='email'
              id='email'
              {...register('email')}
              placeholder='' />
            <label htmlFor='email'>Email:</label>
            <FiMail className={style.form_icon} />
            {<span>{errors.email?.message}</span>}
          </div>

          <div className={`${style.input_group} ${errors.password?style.error:''}`}>
            <input 
              type={`${showPassword?'text':'password'}`} 
              name='password'
              id='password'
              {...register('password')}
              placeholder='' />
            <label htmlFor='password'>Password:</label>
            {showPassword?(
              <AiOutlineEye
                className={style.form_icon}
                onClick={() => setShowPassword(!showPassword)} />
            ):(
              <AiOutlineEyeInvisible
                className={style.form_icon}
                onClick={() => setShowPassword(!showPassword)} />
            )}
            {<span>{errors.password?.message}</span>}
          </div>
        </div>

        <button className={style.btn_submit} type='submit'>
          {loginMode?'Login':'Register'}
        </button>

        <footer className={style.footer_container}>
          <p>
            {loginMode?"Don't have an account?":"You already have an account?"}
            <button 
              type='button'
              className={style.register_btn}
              onClick={handleLoginMode} >
              {loginMode?'Sign Up':'Login'}
            </button>
          </p>
        </footer>
      </form>

    </div>
  )
}
