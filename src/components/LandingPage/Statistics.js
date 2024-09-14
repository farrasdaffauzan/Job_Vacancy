const Statistics = () => {
  return (
    <div className="py-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Platform dalam Angka</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-5xl font-extrabold text-gray-800">10,000+</h3>
          <p>Lowongan Terdaftar</p>
        </div>
        <div>
          <h3 className="text-5xl font-extrabold text-gray-800">50,000+</h3>
          <p>Pengguna Aktif</p>
        </div>
        <div>
          <h3 className="text-5xl font-extrabold text-gray-800">500+</h3>
          <p>Perusahaan Terkemuka</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
