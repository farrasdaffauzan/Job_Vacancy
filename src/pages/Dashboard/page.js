import Navbar from "../../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <div className="">
        <aside>
          <Navbar />
        </aside>

        <div className="h-screen content-center text-center">
          <div className="border-2 w-1/2 m-auto border-slate-700 text-2xl font-semibold">
            <h1>Selamat Datang!!!</h1>
            <h1>Di Dashboard</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
