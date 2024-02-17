// Import yang diperbarui
"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const LoginPage = ({ searchParams }: any) => {

  console.log(searchParams);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const callbackUrl = searchParams.callbackUrl || "/";
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl,
      });
      if (!res?.error) {
        router.push(callbackUrl);
        setIsLoading(false);
      } else {
        if (res.status === 401) {
          setError(" Email or Password is Incorrect");
          setIsLoading(false);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col mb-2">
      {error !== "" && <h3 className="text-red-500 font-bold">{error}</h3>}
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={(e) => handleLogin(e)}>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h3>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLoading ? "Loading..." : "Login to your account"}
          </button>
          <hr />
          <button
            type="button"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              // const callbackUrl = searchParams.callbackUrl || "/";
              signIn("google", {
                callbackUrl,
                redirect: true,
              });
            }}
          >
            {isLoading ? "Loading..." : "Sign in with Google"}
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              href="/register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );

	// console.log(searchParams);
	// console.log(process.env.API_KEY);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const callbackUrl = searchParams.callbackUrl || "/";
	const handleLogin = async (e: any) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const res = await signIn("credentials", {
				redirect: false,
				email: e.target.email.value,
				password: e.target.password.value,
				callbackUrl,
			});
			if (!res?.error) {
				router.push(callbackUrl);
				setIsLoading(false);
			} else {
				if (res.status === 401) {
					setError(" Email or Password is Incorrect");
					setIsLoading(false);
				}
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className="h-screen w-full flex justify-center items-center flex-col mb-2">
			{error !== "" && <h3 className="text-red-500 font-bold">{error}</h3>}
			<div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
				<form className="space-y-6" onSubmit={(e) => handleLogin(e)}>
					<h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
					<div>
						<label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
							Your email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
							placeholder="name@company.com"
						/>
					</div>
					<div>
						<label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
							Your password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						/>
					</div>

					<button
						disabled={isLoading}
						type="submit"
						className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						{isLoading ? "Loading..." : "Login to your account"}
					</button>
					<hr />
					<button
						type="button"
						className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						onClick={() => {
							const callbackUrl = searchParams.callbackUrl || "/";
							signIn("google", {
								callbackUrl,
								redirect: true,
							});
						}}
					>
						{isLoading ? "Loading..." : "Sign in with Google"}
					</button>
					<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
						Not registered?{" "}
						<Link href="/register" className="text-blue-700 hover:underline dark:text-blue-500">
							Create account
						</Link>
					</div>
				</form>
			</div>
		</div>
	);

};
export default LoginPage;
