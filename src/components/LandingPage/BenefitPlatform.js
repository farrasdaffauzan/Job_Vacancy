import { FaHandshake, FaRegSmile, FaClock } from "react-icons/fa";

const PlatformBenefits = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-center text-2xl font-bold mb-8">Keunggulan Platform</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center">
          <FaHandshake size={40} className="text-blue-500 mb-4" />
          <h3 className="font-semibold text-lg">Lowongan Terpercaya</h3>
          <p className="text-gray-600">Semua lowongan sudah melalui proses verifikasi yang ketat.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaRegSmile size={40} className="text-green-500 mb-4" />
          <h3 className="font-semibold text-lg">Proses Mudah</h3>
          <p className="text-gray-600">Proses pendaftaran dan pelamaran yang sangat sederhana dan cepat.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaClock size={40} className="text-yellow-500 mb-4" />
          <h3 className="font-semibold text-lg">Update Terbaru Setiap Hari</h3>
          <p className="text-gray-600">Lowongan pekerjaan selalu diperbarui setiap hari untuk Anda.</p>
        </div>
      </div>
    </div>
  );
};

export default PlatformBenefits;
