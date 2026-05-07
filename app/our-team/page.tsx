import { FaLinkedin } from "react-icons/fa";
import { Julius_Sans_One, Archivo_Narrow, Alice } from "next/font/google";
const julius = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
});

const archivo = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const alice = Alice({
  subsets: ["latin"],
  weight: "400",
});

type TeamMember = {
    id: string;
    name: string;
    role: string;
    program: string;
    imageUrl: string;
    linkedin: string;
};
const leadTeam: TeamMember[] = [
    { id: 'l1', name: 'Tharani Elilvannan', role: 'Software Lead', program: 'Software Engineering', imageUrl: '/team/Tharani Elilvannan.JPG', linkedin: 'https://www.linkedin.com/in/tharani-elilvannan/', },
    { id: 'l2', name: 'Parul Hedau', role: 'Science Lead', program: 'program', imageUrl: '/team/MASS.jpeg', linkedin: '#', },
    { id: 'l3', name: 'Chloe Hoang', role: 'Electrical Lead', program: 'Engineering Physics', imageUrl: '/team/MASS.jpeg', linkedin: '#', },
];

const mechanicalTeam: TeamMember[] = [
    { id: 'm1', name: 'Ciara Doody', role: 'Mech Subteam', program: 'Engineering 1', imageUrl: '/team/MASS.jpeg', linkedin: 'http://www.linkedin.com/in/ciaradoody' },
    { id: 'm2', name: 'Muhammad Hassaan', role: 'Mech Subteam', program: 'Mechanical Engineering Co-op', imageUrl: '/team/Muhammad Hassaan.jpeg', linkedin: 'https://www.linkedin.com/in/muhammad-hassaan-ba02ba383?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    { id: 'm3', name: 'Aysha Isovic', role: 'Mech Subteam', program: 'Engineering Physics', imageUrl: '/team/Aysha Isovic.jpeg', linkedin: 'https://www.linkedin.com/in/aysha-isovic?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    { id: 'm4', name: 'Minaya Karunarathne', role: 'Mech Subteam', program: 'Mechanical Engineering', imageUrl: '/team/Minaya Karunarathne.jpg', linkedin: 'https://www.linkedin.com/in/minaya-karunarathne-b4a472240/' },
    { id: 'm5', name: 'Shoaib Khawar', role: 'Mech and Science Subteam', program: 'Mechanical and Biomedical Engineering', imageUrl: '/team/MASS.jpeg', linkedin: 'http://www.linkedin.com/in/shoaib-khawar-30abb0385' },
    { id: 'm6', name: 'Franco Lau', role: 'Mech Subteam', program: 'Mechanical Engineering and Management', imageUrl: '/team/Franco Lau.png', linkedin: 'https://www.linkedin.com/in/franco-lau-b3366a2b9/' },
    { id: 'm7', name: 'Dhruv Phadnis', role: 'Mech Subteam', program: 'Mechanical Engineering', imageUrl: '/team/MASS.jpeg', linkedin: 'https://ca.linkedin.com/in/dhruv-phadnis-139158315' },
    { id: 'm8', name: 'Adithya Rajesh', role: 'Mech Subteam', program: 'Mechanical Engineering and Management', imageUrl: '/team/Adithya Rajesh.png', linkedin: 'http://www.linkedin.com/in/adithya-rajesh-5208bb28b' },
    { id: 'm9', name: 'Catharine Santos', role: 'Mech Subteam', program: 'Engineering 1', imageUrl: '/team/Catharine Santos.jpeg', linkedin: 'http://www.linkedin.com/in/catharine-santos' },
    { id: 'm10', name: 'Hilary Tse', role: 'Mech Subteam', program: 'Engineering 1', imageUrl: '/team/Hilary Tse.png', linkedin: 'https://www.linkedin.com/in/hilary-tse-b6a430286?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
];

const electricalTeam: TeamMember[] = [
    { id: 'e1', name: 'Dominic Clarke', role: 'Elec Subteam', program: 'Engineering Physics', imageUrl: '/team/Dominic Clarke.jpeg', linkedin: 'https://www.linkedin.com/in/dominicccclarke/' },
    { id: 'e2', name: 'Arjun Mangal', role: 'Elec Subteam', program: 'Electrical Engineering and Management', imageUrl: '/team/Arjun Mangal.jpeg', linkedin: 'http://www.linkedin.com/in/arjun-mangal' },
    { id: 'e3', name: 'Aymaan Mirza', role: 'Elec Subteam', program: 'Electrical Engineering', imageUrl: '/team/MASS.jpeg', linkedin: 'https://www.linkedin.com/in/aymaan-mirza?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    { id: 'e4', name: 'Seungbe Oh', role: 'Elec Subteam', program: 'Engineering Physics', imageUrl: '/team/Seungbe Oh.jpg', linkedin: 'https://www.linkedin.com/in/seungbe-oh/' },
    { id: 'e5', name: 'Carter Sider', role: 'Elec Subteam', program: 'Computer Engineering', imageUrl: '/team/Carter Sider.png', linkedin: 'https://www.linkedin.com/in/carter-sider-710198331/' },
    { id: 'e6', name: 'Keerath Singh', role: 'Elec Subteam', program: 'Mechatronics Engineering', imageUrl: '/team/Keerath Singh.jpeg', linkedin: 'https://www.linkedin.com/in/keerath-singh/' },
    { id: 'e7', name: 'Ryan Su', role: 'Elec Subteam', program: 'Mechatronics Engineering', imageUrl: '/team/MASS.jpeg', linkedin: 'https://www.linkedin.com/in/ryan-su-51847625a/' },
    { id: 'e8', name: 'Shrey Talati', role: 'Elec Subteam', program: 'Computer Engineering and Management', imageUrl: '/team/MASS.jpeg', linkedin: 'http://www.linkedin.com/in/shreytalati08' },
];

const scienceTeam: TeamMember[] = [
    { id: 's1', name: 'Udval Altansukh', role: 'Science Subteam', program: 'Chemical and Physical Sciences Gateway', imageUrl: '/team/Udval A.png', linkedin: 'http://linkedin.com/in/udval-altansukh-92bb773a7' },
    { id: 's2', name: 'Sophia Bianchi', role: 'Science Subteam', program: 'Engineering 1', imageUrl: '/team/sophia.png', linkedin: 'https://www.linkedin.com/in/sophia-bianchi-7841152b3/' },
    { id: 's3', name: 'Sarah Newallo', role: 'Science Subteam', program: 'Material Science Engineering', imageUrl: '/team/Sarah Newallo.jpeg', linkedin: '#' },
    { id: 's4', name: 'Marut Shah', role: 'Science Subteam', program: 'Software and Biomedical Engineering ', imageUrl: '/team/MASS.jpeg', linkedin: 'http://www.linkedin.com/in/marut-shah' },
    { id: 's5', name: 'Kayla Siriban', role: 'Science Subteam', program: 'Mechanical Engineering', imageUrl: '/team/MASS.jpeg', linkedin: 'http://www.linkedin.com/in/kaylasiriban' },
];

const softwareTeam: TeamMember[] = [
    { id: 'so1', name: 'Komabasi Bassey', role: 'Embedded Developer', program: 'Engineering 1', imageUrl: '/team/Komabasi Bassey.jpg', linkedin: 'https://www.linkedin.com/in/komabasi-bassey' },
    { id: 'so2', name: 'Braden Chan', role: 'Web Developer', program: 'Computer Science', imageUrl: '/team/Braden Chan.png', linkedin: 'https://www.linkedin.com/in/bradenchan/' },
    { id: 'so3', name: 'Ranica Chawla', role: 'Embedded Developer', program: 'Software Engineering', imageUrl: '/team/Ranica Chawla.jpeg', linkedin: 'https://www.linkedin.com/in/ranica-chawla' },
    { id: 'so4', name: 'Viho Huang', role: 'Embedded Developer', program: 'Software Engineering', imageUrl: '/team/Viho.jpg', linkedin: 'https://www.linkedin.com/in/viho-huang' },
    { id: 'so5', name: 'Raiya Kassam', role: 'Embedded Developer', program: 'Computer Engineering and Management', imageUrl: '/team/Raiya Kassam.png', linkedin: 'https://www.linkedin.com/in/raiya-kassam-83b578291' },
    { id: 'so6', name: 'Youssef Khafagy', role: 'Web Developer', program: 'Software Engineering', imageUrl: '/team/MASS.jpeg', linkedin: '#' },
    { id: 'so7', name: 'Varsha Kotturri', role: 'Embedded Developer', program: 'Engineering 1', imageUrl: '/team/MASS.jpeg', linkedin: 'https://www.linkedin.com/in/varsha-kotturri-a8b694282/' },
    { id: 'so8', name: 'Maria Loucaides', role: 'Embedded Developer', program: 'Electrical Engineering and Management ', imageUrl: '/team/Maria Loucaides.jpg', linkedin: 'http://www.linkedin.com/in/maria-loucaides-938a62380' },
    { id: 'so9', name: 'Meigan Rogers', role: 'Web Developer', program: 'Software Engineering', imageUrl: '/team/Meigan Rogers.png', linkedin: 'https://www.linkedin.com/in/meigan-rogers/' },
    { id: 'so10', name: 'Oscar Zhao', role: 'Web Developer', program: 'Engineering 1', imageUrl: '/team/Oscar Zhao.jpg', linkedin: 'https://www.linkedin.com/in/zhaooscar/' },
];

{/* UI for the team cards */ }
function TeamCard({ person }: { person: TeamMember }) {
    return (
        <div className="p-[2px] rounded-2xl bg-[#4648FF] shadow-md hover:-translate-y-1 hover:shadow-lg transition duration-150">
            <div className="bg-white rounded-2xl p-6 w-64 text-center h-full flex flex-col">
                <img
                    src={person.imageUrl}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[#4648FF]"
                />
                <h3 className="text-lg font-bold text-[#010101]">{person.name}</h3>
                <p className="text-gray-400 text-sm font-medium mt-0.5">{person.role} </p>
                <p className="text-gray-600 text-sm font-medium mt-0.5">{person.program}</p>
                <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center text-blue-600 hover:text-blue-800 transition"
                >
                    <FaLinkedin size={18} />
                </a>
            </div>
        </div>
    );
}

export default function OurTeam() {

    return (
        <div className="min-h-screen bg-[#F2F2F0]">

            {/* top navigation bar */}
            <nav className={`bg-[#4648FF] text-white w-full shadow-md ${julius.className}`}>
                <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-6 text-sm md:text-base">

                    <a href="#home" className="hover:text-blue-200 transition">Home</a>
                    <a href="#team" className="hover:text-blue-200 transition">Team</a>
                    <a href="#project" className="hover:text-blue-200 transition">Project</a>
                    <a href="#sponsors" className="hover:text-blue-200 transition">Sponsors</a>
                    <a href="#recruitment" className="hover:text-blue-200 transition">Recruitment</a>
                    <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
                    <a href="#data" className="hover:text-blue-200 transition">Data</a>

                </div>
            </nav>

            {/* main content */}
            <main className={`max-w-7xl mx-auto px-4 py-12 ${alice.className}`}>
                <h1 className={`text-center text-4xl font-bold text-[#4648FF] ${archivo.className}`}>
                    The CAN-SBX Team
                </h1>

                {/* Team Leads */}
                <div className="mt-16">
                    <h2 className={`text-center text-2xl font-semibold text-[#4648FF] ${archivo.className}`}>
                        Team Leads
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-[#4648FF] rounded-full mx-auto mb-8"></div>
                    <div className="flex flex-wrap justify-center gap-20">

                        {leadTeam.map((person) => (
                            <TeamCard key={person.id} person={person} />
                        ))}

                    </div>
                </div>


                {/* Mechanical Team */}
                <div className="mt-20">
                    <h2 className={`text-center text-2xl font-semibold text-[#4648FF] ${archivo.className}`}>
                        Mechanical Team
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-[#4648FF] rounded-full mx-auto mb-8"></div>
                    <div className="flex flex-wrap justify-center gap-12">
                        {mechanicalTeam.map((person) => (
                            <TeamCard key={person.id} person={person} />
                        ))}
                    </div>
                </div>


                {/* Electrical Team */}
                <div className="mt-20">
                    <h2 className={`text-center text-2xl font-semibold text-[#4648FF] ${archivo.className}`}>
                        Electrical Team
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-[#4648FF] rounded-full mx-auto mb-8"></div>
                    <div className="flex flex-wrap justify-center gap-12">

                        {electricalTeam.map((person) => (
                            <TeamCard key={person.id} person={person} />
                        ))}
                    </div>
                </div>


                {/* Science Team */}
                <div className="mt-20">
                    <h2 className={`text-center text-2xl font-semibold text-[#4648FF] ${archivo.className}`}>
                        Science Team
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-[#4648FF] rounded-full mx-auto mb-8"></div>
                    <div className="flex flex-wrap justify-center gap-12">

                        {scienceTeam.map((person) => (
                            <TeamCard key={person.id} person={person} />
                        ))}
                    </div>
                </div>

                {/* Software Team */}
                <div className="mt-20">
                    <h2 className={`text-center text-2xl font-semibold text-[#4648FF] ${archivo.className}`}>
                        Software Team
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-[#4648FF] rounded-full mx-auto mb-8"></div>
                    <div className="flex flex-wrap justify-center gap-12">

                        {softwareTeam.map((person) => (
                            <TeamCard key={person.id} person={person} />
                        ))}
                    </div>
                </div>

            </main>
            
            {/* Footer */}
            <footer className={`bg-[#4648FF] text-white mt-14 w-full ${julius.className}`}>
                <div className="w-full">

                    <div className="max-w-7xl mx-auto px-4 py-6">

                         <p className="text-center w-full"> {new Date().getFullYear()} MASS CAN-SBX</p>

                    </div>

                </div>
            </footer>



        </div>
    );
}