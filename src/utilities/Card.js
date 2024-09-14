import { Card } from "flowbite-react";
import Button from "./Button";

const CardTemplate = ({ id, title, images, type, location, corporate }) => {
  return (
    <>
      <Card className="max-w-sm flex flex-col p-2 border-2 border-slate-400 shadow-lg bg-slate-400" imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc={images}>
        <h1 className="text-xl font-bold tracking-tight text-slate-100">
          {title}
          <span> (Tenture) </span>
        </h1>
        <h5 className="text-slate-100 font-semibold text-xl -mt-2 ">{corporate}</h5>
        <p className="font-normal text-lg -mt-2 text-gray-50 dark:text-gray-400">
          {location} | <span> {type}</span>
        </p>

        <Button name={"Detail"} link={`/lowongan/${id}`} />
      </Card>
    </>
  );
};

export default CardTemplate;
