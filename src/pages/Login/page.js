import { useState } from "react";
import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://job-vacancy-api.vercel.app/api/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("access_token", token);
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="h-screen content-center">
      <div className="container m-auto">
        <div className="w-full fixed top-0 bg-white">
          <div className="container m-auto">
            <div className="w-full flex p-2 lg:p-3 items-center justify-between">
              <div className="text-2xl font-bold uppercase">
                <a href="/">Worked</a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col justify-center m-auto lg:w-[700px]">
          <div className="text-xl font-medium text-center lg:text-2xl">
            <h1>Login</h1>
          </div>

          <div className="border-2 m-4 py-5 rounded-lg shadow-xl">
            <form className="flex w-full p-4 flex-col gap-4" onSubmit={handleLogin}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" className="lg:text-lg" />
                </div>
                <TextInput id="email" type="email" placeholder="name@gmail.com" className="lg:text-2xl" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" className="lg:text-lg" />
                </div>
                <TextInput id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <Button type="submit" className="bg-slate-600">
                Login
              </Button>

              {error && <p className="text-red-600 text-center mt-2">{error}</p>}

              <p className="text-center -mt-3">
                Belum Punya akun?
                <span className="text-slate-800 font-semibold hover:opacity-70">
                  <a href="/signup">Sign Up</a>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
