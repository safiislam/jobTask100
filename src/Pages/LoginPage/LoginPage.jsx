import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Redux/user/userSlice';


const LoginPage = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = (data) =>{
        const email = data.email
        const password = data.password
        dispatch(loginUser({email,password}))
    }
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-1/3">
                <h1 className="text-2xl font-semibold mb-6">User Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            {...register("email")}
                            placeholder='Enter your Email'
                            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            {...register("password")}
                            placeholder='Enter your Password'
                            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;