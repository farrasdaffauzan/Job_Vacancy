import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../utilities/Button";

const DetailContent = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://job-vacancy-api.vercel.app/api/jobs/${id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-12">
      <div className="container p-4 m-auto">
        <div key={data.id} className="flex flex-wrap">
          <div className="w-full lg:w-1/2 flex justify-end px-4">
            <img src={data.company_image_url} alt={data.title} className="w-full lg:w-3/4" />
          </div>
          <div className="w-full p-3 lg:w-1/2 content-center lg:px-7">
            <h1 className="text-4xl font-bold">{data.title}</h1>
            <h3 className="text-xl lg:text-2xl">
              {data.company_name} | <span>{data.job_type}</span>
            </h3>
            <div className="py-2">
              <p className="text-xl lg:py-3 lg:text-2xl">
                Status : <span>{data.job_status === 1 ? "Opened" : "Closed"}</span>
              </p>
              <p className="text-xl lg:py-3 lg:text-2xl">{data.company_city}</p>
              <p className="text-xl lg:py-3 lg:text-2xl">
                Description : <span>{data.job_description}</span>
              </p>
              <p className="text-xl lg:py-3 lg:text-2xl">
                Qualification : <span>{data.job_qualification}</span>
              </p>
              <p className="text-xl lg:py-3 lg:text-2xl">
                Salary : <span>{data.salary_min}</span> - <span>{data.salary_max}</span>
              </p>
            </div>
            <Button name={"Apply"} link={"/"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
