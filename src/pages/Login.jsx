import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
   const navigate = useNavigate();
   const {users, setCurrentUser} = useContext(AuthContext);
   const {register, handleSubmit, reset, formState:{errors},} = useForm();

   const onSubmit = (data)=>{
       const existingUser = users.find(
        (user)=> user.email.toLowerCase() === data.email.toLowerCase() &&
                 user.password === data.password
        )
        if(!existingUser){
          toast.error("Invalid Email Or Password")
          return;
        }
        setCurrentUser(existingUser);

        localStorage.setItem("currentUser", JSON.stringify(existingUser));

        reset();
        navigate("/")
        toast.success("You Are Logged In")
        console.log("Login Successful", existingUser);
    //    console.log("Login data:", data);
    // console.log("Users:", users);
   }

  return (
    <div className="w-full">
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium text-gray-500">
          Welcome back
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Login to your account
        </h1>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Enter your details to continue shopping with us.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
            })}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black/10"
          />
           {errors.email && (
            <p className="text-red-700">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <button
              type="button"
              className="text-xs font-medium text-gray-600 transition hover:text-black"
            >
              Forgot password?
            </button>
          </div>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
            })}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black/10"
          />
           {errors.password && (
            <p className="text-red-700">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <input
            id="remember"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 accent-black"
          />

          <label
            htmlFor="remember"
            className="text-sm text-gray-600"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-black px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99]"
        >
          Login
        </button>

      </form>
      <p className="mt-7 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <a
          href="/auth/signup"
          className="font-semibold text-black hover:underline"
        >
          Create account
        </a>
      </p>
    </div>
  );
};

export default Login;