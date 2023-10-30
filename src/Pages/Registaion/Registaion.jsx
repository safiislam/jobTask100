import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/user/userSlice";


const Registaion = () => {
    const dispatch =  useDispatch()
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
        const email = data.email
        const name = data.name
        const password = data.password
        dispatch(createUser({email,password,name}))
    };
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-1/3">
                <h1 className="text-2xl font-semibold mb-6">User Registration</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            {...register("name")}
                            placeholder='Enter your Name'
                            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="mobile"
                            name="mobile"
                            {...register("email")}
                            placeholder='Enter your Email'
                            required
                            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Enter your Password'
                            {...register("password")}
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

export default Registaion;