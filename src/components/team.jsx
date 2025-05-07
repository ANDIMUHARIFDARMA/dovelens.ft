import marselImage from '../assets/images/anggota/marsel.jpeg';
import andiImage from '../assets/images/anggota/andi.jpeg';
import ceoImage from '../assets/images/anggota/ceo.png';
import jonathanImage from '../assets/images/anggota/Jonathan.jpg';
import wiraImage from '../assets/images/anggota/Wira.jpg';
import audriImage from '../assets/images/anggota/Audri.jpg';
import amanyImage from '../assets/images/anggota/Amany.jpg';
import done123 from '../assets/images/hiro/done.png';

// Import images

const people = [
    {
        name: 'Marcello',
        role: 'CEO & Founder',
        imageUrl: marselImage,
    },
    {
        name: 'Andi',
        role: 'COO & Co-Founder',
        imageUrl: andiImage,
    },
    {
        name: 'Ceo',
        role: 'Crew Photographer',
        imageUrl: ceoImage,
    },
    {
        name: 'Jonathan',
        role: 'Crew Photographer',
        imageUrl: jonathanImage,
    },
    {
        name: 'Wira',
        role: 'Crew Photographer',
        imageUrl: wiraImage,
    },
    {
        name: 'Audri',
        role: 'Staff Admin',
        imageUrl: audriImage,
    },
    {
        name: 'Amany',
        role: 'Staff Admin',
        imageUrl: amanyImage,
    },
];

export default function Team() {
    return (
        <section
            id="team"
            className="text-white py-10 px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: `url(${done123})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    opacity: 0.6,
                    zIndex: 0,
                }}
            ></div>
            <div className="relative max-w-7xl mx-auto text-center" style={{ zIndex: 1 }}>
                <h2 className="text-3xl font-bold sm:text-4xl">Our Team Dove</h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
                    Kami adalah tim yang berdedikasi untuk memberikan pengalaman terbaik dalam setiap momen yang kami abadikan. Dengan keahlian dan semangat, kami siap membantu Anda menciptakan kenangan tak terlupakan.
                </p>
            </div>

            <div className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto" style={{ zIndex: 1 }}>
                {people.map((member, idx) => (
                    <div key={idx} className="text-center">
                        <img
                            src={member.imageUrl}
                            alt={`Foto ${member.name}, ${member.role}`}
                            className="w-full h-72 object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-gray-400">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
