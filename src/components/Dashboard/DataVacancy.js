"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DataVacancy = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://job-vacancy-api.vercel.app/api/jobs")
        .then((res) => {
          setData([...res.data]);
          setFetchStatus(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [fetchStatus, setFetchStatus]);

  const handleDelete = (id) => {
    const token = localStorage.getItem("access_token");

    axios
      .delete(`https://job-vacancy-api.vercel.app/api/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setFetchStatus(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = (item) => {
    setSelectedData(item); // Save the selected data
    navigate("/dashboard/createdata", { state: { jobData: item } });
  };

  return (
    <>
      <div className="mt-20 ">
        <div className="container px-3 lg:flex lg:justify-end lg:mx-3">
          <div className="lg:w-3/4">
            <div class="container mx-auto m-4">
              <h1 class="text-xl font-bold ">Manage Data</h1>
            </div>

            <div className="">
              <table class="table-auto border-2 border-slate-600">
                <thead className="border-2 border-slate-600">
                  <tr>
                    <th className="border-2 border-slate-600 p-2">No</th>
                    <th className="border-2 border-slate-600">Title</th>
                    <th className="border-2 border-slate-600">Description</th>
                    <th className="border-2 border-slate-600">Qualification</th>
                    <th className="border-2 border-slate-600">Type</th>
                    <th className="border-2 border-slate-600">Tenture</th>
                    <th className="border-2 border-slate-600">Status</th>
                    <th className="border-2 border-slate-600">Company</th>
                    <th className="border-2 border-slate-600">Logo</th>
                    <th className="border-2 border-slate-600">City</th>
                    <th className="border-2 border-slate-600">Salary</th>
                    <th className="border-2 border-slate-600">Action</th>
                  </tr>
                </thead>
                {data !== null &&
                  data.map((res) => {
                    return (
                      <tbody>
                        <tr className="" key={res.id}>
                          <td className="p-2 border-2 border-slate-600 text-center">1</td>
                          <td className="p-2 border-2 border-slate-600">{res.title}</td>
                          <td className="p-2 border-2 border-slate-600">{res.job_description}</td>
                          <td className="p-2 border-2 border-slate-600">{res.job_qualification}</td>
                          <td className="p-2 border-2 border-slate-600">{res.job_type}</td>
                          <td className="p-2 border-2 border-slate-600">{res.job_tenure}</td>
                          <td className="p-2 border-2 border-slate-600 text-center">{res.job_status}</td>
                          <td className="p-2 border-2 border-slate-600">{res.company_name}</td>
                          <td className="p-2 border-2 border-slate-600">
                            <img src={res.company_image_url} alt="..." />
                          </td>
                          <td className="p-2 border-2 border-slate-600">{res.company_city}</td>
                          <td className="p-2 border-2 border-slate-600">
                            {res.salary_min} - {res.salary_max}
                          </td>
                          <td className="p-2 border-2 border-slate-600">
                            <button className="bg-emerald-600 py-2 px-3 text-slate-50 hover:opacity-80 m-1 rounded-lg" onClick={() => handleEdit(res)}>
                              Edit
                            </button>
                            <button className="bg-red-700 py-2 px-3 text-slate-50 hover:opacity-80 m-1 rounded-lg" onClick={() => handleDelete(res._id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataVacancy;
