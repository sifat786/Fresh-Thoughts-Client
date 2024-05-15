import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import signup from '../../assets/images/register.jpg';
import logo from '/favicon.png';
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";


const Register = () => {

    const {createUser, updateUser, user, setUser, loading} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, reset , formState: { errors } } = useForm();

    useEffect(() => {
        if(user) {
            navigate('/');
        }
    },[navigate, user]);

    const handleRegister = async (data) => {
        const {name, email, password} = data;
        reset();
        const from = location?.state || '/';

        try {
            await createUser(email, password)
            updateUser(name)
            setUser({ ...user, displayName: name })
            toast.success('SignUp Successfully');
            navigate(from, {replace: true});
            
        } catch (err) {
            console.log(err);
            toast.error('Your email is already registered!');
        }
    }

    if(user || loading) return;

    return (
        <div className="pb-8 md:pb-[70px] lg:pb-[130px] pt-4 md:pt-[30px] lg:pt-[60px] container">
            <div className="">
                <div className="flex justify-between flex-col lg:flex-row items-center">
                    <div className="w-full md:flex hidden lg:justify-start md:justify-center mb-5 lg:mb-0">
                        <img src={signup} />
                    </div>
                    
                    <div className="w-full card rounded-[10px] border border-stone-300 md:p-[50px] lg:p-[75px]">
                        <form onSubmit={handleSubmit(handleRegister)} className="card-body">
                            <Link to={'/'}>
                                <img className="w-14 mx-auto md:mt-[-50px] md:mb-5" src={logo} />
                            </Link>
                            <h1 className='text-center text-3xl mx-auto md:text-left md:text-[45px] font-semibold md:mt-[-25px] '>Sign Up</h1>

                            <div className="form-control mt-2 md:mt-5">
                                <label className="label">
                                    <span className="label-text text-neutral-700 text-lg font-medium">Name</span>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Enter your name" 
                                    className="input py-5 input-bordered text-neutral-700 text-lg font-medium" 
                                    required
                                    {...register("name")}
                                />
                            </div>

                            <div className="form-control">
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
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'invalid email address'
                                        }
                                    })}
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
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'password must be at least 6 characters'
                                            },
                                            validate: {
                                                oneUpperCase: (value) => /^(?=.*[A-Z]).{6,}$/.test(value) || 'password must be at least 1 uppercase letter',
                                                oneSpecialCharacter : (value) => /^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/.test(value) || 'password must be at least 1 special character',
                                                oneNumericCharacter : (value) => /^(?=.*\d).{8,}$/.test(value) || 'password must be at least 1 numeric character'
                                            }
                                        })}
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
                                <input type="submit" value="Sign Up" className='w-full py-2 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-red-600 via-red-400 to-red-200 rounded-[10px] text-white text-lg font-medium cursor-pointer'/>
                            </div>
                        </form>

                        <div>
                            <p className='text-center text-neutral-500 text-lg mb-8 md:mb-0'>Already have an account? 
                                <Link to={'/login'}>
                                    {' '}
                                    <span className='text-[#FF3811] text-lg font-semibold'>Sign In</span>
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;