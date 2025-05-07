import utamaImage from '../assets/images/dovepage.png';
export default function About() {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <img src={utamaImage} alt="Tentang Kami" className="rounded-xl h-100" />
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Tentang Kami</h2>
            <p className="text-gray-700 mb-6">
            Dove Lens adalah layanan fotografi freelance yang menghadirkan sentuhan kreatif dan unik pada setiap jepretan. Kami percaya bahwa setiap momen memiliki cerita yang layak diabadikan secara istimewa. Dengan gaya fotografi yang beragam dan fleksibilitas sebagai freelancer, kami siap membantu Anda menciptakan karya visual yang memukau dan sesuai dengan karakter serta kebutuhan Anda.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Visi</h3>
                <p className="text-gray-600">Menjadi fotografer yang mengabadikan kenangan, menginspirasi cerita, dan memperkaya kehidupan melalui lensa kamera.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Misi</h3>
                <p className="text-gray-600">
                Misi kami adalah mengabadikan momen indah dengan layanan fotografi profesional dan personal.
Kami menjalin hubungan baik dengan klien melalui komunikasi dan pelayanan memuaskan.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  