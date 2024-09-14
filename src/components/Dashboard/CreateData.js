import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CreateData = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });

  useEffect(() => {
    if (location.state?.jobData) {
      setInput(location.state.jobData); // Populate form with job data if exists
    }
  }, [location]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access_token");
    try {
      if (location.state?.jobData) {
        await axios.put(`https://job-vacancy-api.vercel.app/api/jobs/${location.state.jobData._id}`, input, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
      } else {
        await axios.post("https://job-vacancy-api.vercel.app/api/jobs", input, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      <div className="mt-24">
        <div className="container px-3 lg:flex lg:justify-end lg:mx-3">
          <div className="border-2 border-black rounded-md lg:w-3/4">
            <div className="text-center text-2xl font-semibold p-2 bg-slate-700 text-slate-100">
              <h1>{location.state?.jobData ? "Update Job" : "Create Job"}</h1>
            </div>

            <div>
              <form className="flex w-full p-4 flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="title" value="Job Title" className="lg:text-lg" />
                  </div>
                  <TextInput id="title" type="text" value={input.title} onChange={handleChange} placeholder="Job Title" className="lg:text-2xl" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="description" value="Description" className="lg:text-lg" />
                  </div>
                  <TextInput id="job_description" type="text" value={input.job_description} onChange={handleChange} placeholder="Job description" className="lg:text-2xl" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="qualification" value="Qualification" className="lg:text-lg" />
                  </div>
                  <TextInput id="job_qualification" type="text" value={input.job_qualification} onChange={handleChange} placeholder="job Qualification" className="lg:text-2xl" required />
                </div>

                <div className="lg:grid-cols-2 lg:grid lg:gap-4">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="type" value="Job Type" className="lg:text-lg" />
                    </div>
                    <TextInput id="job_type" type="text" value={input.job_type} onChange={handleChange} placeholder="Job Type" className="lg:text-2xl" required />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="status" value="Job Status" className="lg:text-lg" />
                    </div>
                    <TextInput id="job_status" type="text" value={input.job_status} onChange={handleChange} placeholder="Job Status" className="lg:text-2xl" required />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="image" value="Company Image URL" className="lg:text-lg" />
                    </div>
                    <TextInput
                      id="company_image_url"
                      type="text"
                      value={input.company_image_url}
                      onChange={handleChange}
                      placeholder="https://www.telkomsat.co.id/uploads/n_header/20240423181421-2024-04-23n_header181419.png"
                      className="lg:text-2xl"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="tenure" value="Job Tenure" className="lg:text-lg" />
                    </div>
                    <TextInput id="job_tenure" type="text" value={input.job_tenure} onChange={handleChange} placeholder="Job Tenure" className="lg:text-2xl" required />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="name" value="Company Name" className="lg:text-lg" />
                    </div>
                    <TextInput id="company_name" type="text" value={input.company_name} onChange={handleChange} placeholder="Company Name" className="lg:text-2xl" required />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="city" value="Company City" className="lg:text-lg" />
                    </div>
                    <TextInput id="company_city" type="text" value={input.company_city} onChange={handleChange} placeholder="name@gmail.com" className="lg:text-2xl" required />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="min_salary" value="Min Salary" className="lg:text-lg" />
                    </div>
                    <TextInput id="salary_min" type="text" value={input.salary_min} onChange={handleChange} placeholder="Min Salary" className="lg:text-2xl" required />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="max_salary" value="Max Salary" className="lg:text-lg" />
                    </div>
                    <TextInput id="salary_max" type="text" value={input.salary_max} onChange={handleChange} placeholder="Max Salary" className="lg:text-2xl" required />
                  </div>
                </div>

                <Button type="submit" className="bg-slate-600">
                  {location.state?.jobData ? "Update" : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateData;
