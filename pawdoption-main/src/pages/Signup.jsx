import { useState } from "react";
import PageNav from "../components/PageNav";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.replace("http://127.0.0.1:8000");
      } else {
        window.location.replace("http://127.0.0.1:8000");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  return (
    <div className="relative h-[30rem]">
      <PageNav />

      <div className="border-2 w-[20rem] lg:w-[32rem] felx  flex-col p-5 justify-center h-[40rem] px-10 absolute top-[90%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-center text-2xl font-bold">Signup</h1>
        <form className="mt-5 flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row  gap-10">
            <div className="flex flex-col gap-5">
              <label for="name" className="font-bold">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="border-2 border-black rounded-md px-2 py-1"
                placeholder="name"
              ></input>
            </div>
            <div className="flex flex-col gap-5">
              <label for="name" className="font-bold">
                Username
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="border-2 border-black rounded-md px-2 py-1"
                placeholder="Username"
              ></input>
            </div>
          </div>
          <label for="email" className="font-bold">
            E-mail
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 border-black rounded-md px-2 py-1"
            placeholder="example@gmail.com"
          ></input>

          <label for="name" className="font-bold">
            Password
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="*******"
            className="border-2 border-black rounded-md px-2 py-1"
          ></input>
          <label for="name" className="font-bold">
            Confirm Password
          </label>
          <input
            type="password"
            value={formData.confirm}
            onChange={handleChange}
            placeholder="*******"
            className="border-2 border-black rounded-md px-2 py-1"
          ></input>
          <input
            type="submit"
            onClick={handleSubmit}
            value="Signup"
            name="Signup "
            className="button"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Signup;
