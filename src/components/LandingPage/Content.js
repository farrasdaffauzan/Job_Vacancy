import { useEffect, useState } from "react";
import Card from "../../utilities/Card";
import axios from "axios";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://job-vacancy-api.vercel.app/api/jobs")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container py-2 px-4 m-auto my-4 lg:w-5/6">
        <div className="text-2xl font-semibold text-center p-5 lg:text-4xl lg:p-5">
          <h1> Job Vacancy</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {data !== null &&
            data.map((res) => {
              return (
                <>
                  <Card id={res._id} title={res.title} images={res.company_image_url} corporate={res.company_name} location={res.company_city} type={res.job_type} />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Content;
