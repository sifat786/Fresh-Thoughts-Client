import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from '../../assets/images/login.jpg';
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import logo from '/favicon.png';
import useAuth from './../../Hooks/useAuth';
import toast from "react-hot-toast";


const Login = () => {

  const {loginUser, googleLogin, user} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset , formState: { errors } } = useForm();

  useEffect(() => {
    if(user) {
        navigate('/');
    }
  },[user, navigate]);

  const handleLogin = async (data) => {
    const {email, password} = data;
    reset();
    const from =  location?.state || '/';

    try{
      await loginUser(email, password);
        toast.success('SignIn Successfully');
        navigate(from, {replace: true});
        
    } catch(err) {
      console.log(err);
      toast.error(err.message);
    }
  }

  //* google login:
  const handleGoogleLogin = async () => {

    try {
      await googleLogin();
        toast.success('SignIn Successfully');
        navigate(location?.state ? location.state : '/', {replace: true});

    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  }

  if(user) return;

  return (
    <div className="pb-8 md:pb-[70px] lg:pb-[130px] pt-4 md:pt-[30px] lg:pt-[60px] container">
            <div>
                <div className="flex justify-between flex-col lg:flex-row items-center">
                    <div className="w-full md:flex lg:justify-start md:justify-center mb-5 lg:mb-0 hidden">
                        <img src={login} />
                    </div>
                    
                    <div className="w-full card rounded-[10px] border border-stone-300 md:p-[50px] lg:p-[75px]">
                        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                            <Link to={'/'}>
                                <img className="w-14 mx-auto md:mt-[-50px] md:mb-5" src={logo} />
                            </Link>
                            <h1 className='text-center text-neutral-900 text-3xl mx-auto md:text-left md:text-[45px] font-bold md:mt-[-25px]'>Login</h1>

                            <div className="form-control mt-2 md:mt-5">
                                <label className="label">
                                    <span className="label-text text-neutral-700 text-lg font-medium">Email</span>
                                </label>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="input py-5 input-bordered text-neutral-700 text-lg font-medium" 
                                    {...register("email", { 
                                        required: {
                                            value: true,
                                            message: 'please enter your email address'
                                    }})}
                                />
                                {errors.email && <span className="text-left text-red-600 font-medium">{errors.email.message}</span>}
                            </div>

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-neutral-700 text-lg font-medium">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'}
                                       placeholder="Enter your password" 
                                       className="input py-5 input-bordered text-neutral-700 text-lg font-medium"
                                       {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'please enter your password',
                                      }})}
                                />
                                {errors.password && <span className="text-left text-red-600 font-medium">{errors.password.message}</span>}
                                <span 
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute top-[55px] right-5'
                                >
                                    {
                                        showPassword ? <FiEye className='text-2xl'/> : <FiEyeOff className='text-2xl'/>
                                    }
                                </span>
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" value="Sign In" className='w-full py-2 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-red-600 via-red-400 to-red-200 rounded-[10px] text-white text-lg font-medium cursor-pointer'/>
                            </div>
                        </form>

                        <div>
                            <div className='divider text-neutral-700 text-lg font-medium'>
                                Or Sign In with
                            </div>
                            <div className='mx-auto w-fit mt-[30px] mb-5 md:mb-[30px]'>
                                <button onClick={handleGoogleLogin} className="btn btn-circle">
                                    <FcGoogle className='text-xl'/>
                                </button>
                            </div>
                            <p className='text-center text-neutral-500 text-lg mb-8 md:mb-0'>Don&apos;t have an account?
                                <Link to={'/register'}>
                                    {' '}
                                    <span className='text-[#FF3811] text-lg font-semibold'>Sign Up</span>
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  );
};

export default Login;
