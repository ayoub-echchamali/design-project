import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <section className="w-screen">
       {/* TODO: dark mode */}
      <div id="login" className="container w-4/5 mx-auto mt-4 flex flex-row justify-center items-center border border-gray-300 rounded-2xl">
        <div id="gradient" className="w-1/2 rounded-l-2xl"/>
        {/* TODO: change highlight colors to gradient */}
        <form className="w-1/2 flex flex-col items-start justify-center space-y-10 pl-12 py-12" method="POST" action="http://127.0.0.1/login">
          <div className="flex flex-col items-start justify-center space-y-10 pl-12 py-12">
            <div className="space-y-3">
              <div className="text-grad text-zinc-800 text-2xl font-medium">
                Sign up
              </div>
              <div className="text-stone-500 text-opacity-80 text-sm font-normal">
                Access your dashboard
              </div>
            </div>
            <div className="space-y-6 w-full">
              <div className="space-y-1 flex flex-col">
                <label className="text-stone-500 text-xs font-normal" htmlFor="email">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="rounded-xl border text-sm border-stone-500 p-2 border-opacity-30"
                />
              </div>
              <div className="space-y-1 flex flex-col">
                <label className="text-stone-500 text-xs font-normal" htmlFor="password">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="rounded-xl border text-sm border-stone-500 p-2 border-opacity-30"
                />
              </div>
            </div>
            {/* TODO: recaptcha */}
            <div className="flex items-center space-x-32 bg-white rounded-2xl border border-zinc-800 py-2 px-5">
              <div className="flex-shrink-0 space-x-2">
                <input type="checkbox" name="robot" className="relative" />
                <label htmlFor="robot" className="text-zinc-800 text-sm font-light">
                  I am not a robot
                </label>
              </div>
              <div className="flex-shrink-0">
                <img className="h-full" src="/reCAPTCHA-logo.png" alt="reCAPTCHA Logo" />
              </div>
            </div>
            <div className="space-y-2 flex flex-col">
              <button className="btn-grad rounded-3xl p-4">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-sm font-medium">Sign in</span>
                </div>
              </button>
              <div className="inline-flex space-x-2.5">
                <span className="text-zinc-800 text-xs">You don't have an account?</span>
                <span className="text-neutral-900 text-xs font-normal underline">Sign up</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
