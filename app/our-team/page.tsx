type TeamMember = {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
    linkedin: string;
};
const leadershipTeam: TeamMember[] = [
    {
        id: '1',
        name: 'name1',
        role: 'co-lead1',
        imageUrl: 'https://via.placeholder.com/150',
        linkedin: 'https://linkedin.com',
    },
    {
        id: '2',
        name: 'name2',
        role: 'co-lead2',
        imageUrl: 'https://via.placeholder.com/150',
        linkedin: 'https://linkedin.com',
    },
];

export default function OurTeam() {


    return (
        <div className="min-h-screen bg-white">

            {/* top navigation bar */} 
            <nav className="bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center gap-8">
                    <a href="#home">Home</a>
                    <a href="#team">Our Team</a>
                    <a href="#project">Project</a>
                    <a href="#contact">Sponsors</a>
                    <a href="#contact">Recruitment</a>
                    <a href="#contact">Contact Us</a>
                    <a href="#contact">Data</a>
                </div>
            </nav>

             {/* main content */}
            <main className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-center text-4xl font-bold text-blue-600">
                    Meet the Team
                </h1>



                {/* Leads */}
                <div className="mt-16">

                    <div className="flex flex-wrap justify-center gap-20">

                        {leadershipTeam.map((person) => (
                            <div 
                                key={person.id}
                                className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-md hover:shadow-blue-400/50 hover:shadow-xl transition">
                                <div className="bg-white rounded-2xl p-6 w-80 text-center">
                                <img
                                    src={person.imageUrl}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="font-semibold text-lg">{person.name}</h3>
                                <p className="text-gray-500 mb-3">{person.role}</p>
                                <a
                                    href={person.linkedin}
                                    target="_blank"
                                    className="text-blue-600 text-sm underline"
                                >
                                    LinkedIn
                                </a>


                            </div>
                            </div>
                        ))}

                    </div>

                </div>







            </main>
        </div>
    );
}