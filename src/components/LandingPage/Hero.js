"use client";

const Hero = () => {
  return (
    <>
      <div className="">
        <div className="container m-auto">
          <div
            className="h-[400px] lg:h-screen content-center text-center rounded-md bg-slate-600 shadow-sm bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <h1 className="text-4xl font-bold uppercase z-50 text-white pt-16">Temukan Karir Impianmu</h1>
            <p className="mt-4 text-lg lg:text-xl z-50 text-white bg-slate-600">Bergabunglah bersama perusahaan terbaik dan wujudkan masa depan cemerlang. Ribuan peluang menantimu!</p>
            <button className="mt-8 px-6 py-3 font-semibold bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition">Lihat Lowongan Sekarang</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
