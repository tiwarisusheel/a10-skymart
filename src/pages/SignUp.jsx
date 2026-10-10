import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const SignUp = () => {
    const navigate =  useNavigate();
    const {users, setUsers} = useContext(AuthContext);
    const {register, handleSubmit, watch, reset, formState:{errors}} = useForm({
      mode: "onchange",
    });
    
    const onSubmit = (data)=>{
        
        const existingUser = users.find(
          (user) => user.email.toLowerCase() === data.email.toLowerCase()
          );

          if(existingUser){
            toast.error("Email Already Registered")
            return;
          }
      
        const newUser = {
          id:nanoid(),
          ...data
        }
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        reset();
        navigate("/auth/login")
        toast.success("You Are Registered Now You Can Log In");
    }


  return (
    <div className="w-full">
      <div className="mb-3">
        <p className="mb-1 text-sm font-medium text-gray-500">
          Get started
        </p>

        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Create your account
        </h1>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Create an account and start your shopping journey.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Full name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            {...register("name", {
              required: "Name is required",
              setValueAs: (value)=> value.trim(),
              validate: (value)=> value.trim() !== "" || "Spaces are not allowed as a valid input"
            })}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black/10"
          />
          {errors.name && (
            <p className="text-red-700">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email address
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Please enter a valid email"
            }
            })}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black/10"
          />
           {errors.email && (
            <p className="text-red-700">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Create a password"
            {...register("password", {
               required: "Password is required",
               minLength: {
               value: 6,
               message: "Password must be at least 6 characters"
               }
            })}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black/10"
          />
           {errors.password && (
            <p className="text-red-700">{errors.password.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Confirm password
          </label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPassword",{
              validate: (value)=> value === watch("password") || "Password do not match"
            })}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black/10"
          />
          {errors.confirmPassword && (
            <p className="text-red-700">{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="flex items-start gap-2">
          <input
            id="terms"
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-black"
          />

          <label
            htmlFor="terms"
            className="text-xs leading-5 text-gray-500"
          >
            I agree to the Terms of Service and Privacy Policy.
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99]"
        >
          Create account
        </button>

      </form>
      <p className="mt-7 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <a
          href="/auth/login"
          className="font-semibold text-black hover:underline"
        >
          Login
        </a>
      </p>
    </div>
  );
};

export default SignUp;