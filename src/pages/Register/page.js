import { useState } from "react";
import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      axios.post("https://job-vacancy-api.vercel.app/api/auth/register", {
        name,
        image_url: imageUrl,
        email,
        password,
      });
      setSuccess("Registration successful");
      setError("");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.response?.data?.message || "Registration failed");
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
            <h1>Sign Up</h1>
          </div>

          <div className="border-2 m-4 py-5 rounded-lg shadow-xl">
            <form className="flex w-full p-4 flex-col gap-4" onSubmit={handleRegister}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name" className="lg:text-lg" />
                </div>
                <TextInput id="name" type="text" placeholder="Your Name" className="lg:text-2xl" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="image_url" value="Profile Image URL" className="lg:text-lg" />
                </div>
                <TextInput id="image_url" type="text" placeholder="https://example.com/image.jpg" className="lg:text-2xl" required value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" className="lg:text-lg" />
                </div>
                <TextInput id="email" type="email" placeholder="name@gmail.com" className="lg:text-2xl" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Create password" className="lg:text-lg" />
                </div>
                <TextInput id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="confirmPassword" value="Confirm password" className="lg:text-lg" />
                </div>
                <TextInput id="confirmPassword" type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>

              <Button type="submit" className="bg-slate-600">
                Sign Up
              </Button>
              <p className="text-center -mt-3">
                Sudah Punya akun?
                <span className="text-slate-800 font-semibold hover:opacity-70">
                  <a href="/login">Login</a>
                </span>
              </p>

              {error && <p className="text-red-600 text-center mt-2">{error}</p>}
              {success && <p className="text-green-600 text-center mt-2">{success}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
