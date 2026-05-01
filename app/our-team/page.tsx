type TeamMember = {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
    linkedin: string;
};
const leadershipTeam: TeamMember[] = [
    { id: '1', name: 'name1', role: 'co-lead1', imageUrl: 'https://via.placeholder.com/150', linkedin: 'https://linkedin.com', },
    { id: '2', name: 'name2', role: 'co-lead2', imageUrl: 'https://via.placeholder.com/150', linkedin: 'https://linkedin.com', },
    { id: '3', name: 'name3', role: 'co-lead3', imageUrl: 'https://via.placeholder.com/150', linkedin: 'https://linkedin.com', },
];

const mechanicalTeam: TeamMember[] = [
    { id: 'm1', name: 'Person 1', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'm2', name: 'Person 2', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'm3', name: 'Person 3', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'm4', name: 'Person 4', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'm5', name: 'Person 5', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'm6', name: 'Person 6', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'm7', name: 'Person 7', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'm8', name: 'Person 8', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'm9', name: 'Person 9', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'm10', name: 'Person 10', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
];

const electricalTeam: TeamMember[] = [
    { id: 'e1', name: 'Person 1', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'e2', name: 'Person 2', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'e3', name: 'Person 3', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'e4', name: 'Person 4', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'e5', name: 'Person 5', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'e6', name: 'Person 6', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'e7', name: 'Person 7', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'e8', name: 'Person 8', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'e9', name: 'Person 9', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'e10', name: 'Person 10', role: 'Team member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
];

const scienceTeam: TeamMember[] = [
    { id: 's1', name: 'Person 1', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 's2', name: 'Person 2', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 's3', name: 'Person 3', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 's4', name: 'Person 4', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 's5', name: 'Person 5', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 's6', name: 'Person 6', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 's7', name: 'Person 7', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 's8', name: 'Person 8', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
];

const softwareTeam: TeamMember[] = [
    { id: 'so1', name: 'Person 1', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'so2', name: 'Person 2', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'so3', name: 'Person 3', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'so4', name: 'Person 4', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'so5', name: 'Person 5', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'so6', name: 'Person 6', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'so7', name: 'Person 7', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'so8', name: 'Person 8', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'so9', name: 'Person 9', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
    { id: 'so10', name: 'Person 10', role: 'Team Member', imageUrl: 'https://via.placeholder.com/150', linkedin: '#' },
];

export default function OurTeam() {


    return (
        <div className="min-h-screen bg-white">

            {/* top navigation bar */}
            <nav className="bg-blue-600 text-white w-full">
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


                {/* Mechanical Team */}
                <div className="mt-20">
                    <h2 className="text-center text-2xl font-semibold text-blue-600 mb-8">
                        Mechanical Team
                    </h2>

                    <div className="flex flex-wrap justify-center gap-12">

                        {mechanicalTeam.map((person) => (
                            <div
                                key={person.id}
                                className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-md hover:shadow-blue-400/50 transition"
                            >
                                <div className="bg-white rounded-2xl p-6 w-80 text-center">

                                    <img
                                        src={person.imageUrl}
                                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                    />

                                    <h3 className="font-semibold">{person.name}</h3>
                                    <p className="text-gray-500 mb-2">{person.role}</p>

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


                {/* Electrical Team */}
                <div className="mt-20">
                    <h2 className="text-center text-2xl font-semibold text-blue-600 mb-8">
                        Electrical Team
                    </h2>

                    <div className="flex flex-wrap justify-center gap-12">

                        {electricalTeam.map((person) => (
                            <div
                                key={person.id}
                                className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-md hover:shadow-blue-400/50 transition"
                            >
                                <div className="bg-white rounded-2xl p-6 w-80 text-center">

                                    <img
                                        src={person.imageUrl}
                                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                    />

                                    <h3 className="font-semibold">{person.name}</h3>
                                    <p className="text-gray-500 mb-2">{person.role}</p>

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


                {/* Science Team */}
                <div className="mt-20">
                    <h2 className="text-center text-2xl font-semibold text-blue-600 mb-8">
                        Science Team
                    </h2>

                    <div className="flex flex-wrap justify-center gap-12">

                        {scienceTeam.map((person) => (
                            <div
                                key={person.id}
                                className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-md hover:shadow-blue-400/50 transition"
                            >
                                <div className="bg-white rounded-2xl p-6 w-80 text-center">

                                    <img
                                        src={person.imageUrl}
                                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                    />

                                    <h3 className="font-semibold">{person.name}</h3>
                                    <p className="text-gray-500 mb-2">{person.role}</p>

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

                {/* Software Team */}
                <div className="mt-20">
                    <h2 className="text-center text-2xl font-semibold text-blue-600 mb-8">
                        Software Team
                    </h2>

                    <div className="flex flex-wrap justify-center gap-12">

                        {softwareTeam.map((person) => (
                            <div
                                key={person.id}
                                className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-md hover:shadow-blue-400/50 transition"
                            >
                                <div className="bg-white rounded-2xl p-6 w-80 text-center">

                                    <img
                                        src={person.imageUrl}
                                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                    />

                                    <h3 className="font-semibold">{person.name}</h3>
                                    <p className="text-gray-500 mb-2">{person.role}</p>

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


            {/* Footer */}
            <footer className="bg-blue-600 text-white mt-24 w-full">
                <div className="w-full">

                    <div className="max-w-7xl mx-auto px-4 py-10">

                        <div className="text-center mb-6">
                            <h3 className="text-xl font-semibold">
                                Want to join the team?
                            </h3>

                            <a
                                href="mailto:careers@company.com"
                                className="inline-block mt-4 bg-white text-blue-600 px-5 py-2 rounded-full font-medium hover:bg-blue-100 transition"
                            >
                                Click here to apply
                            </a>
                        </div>

                        <div className="border-t border-blue-400 pt-6 text-sm text-blue-100 flex flex-col md:flex-row justify-between items-center gap-4">

                            <p>© {new Date().getFullYear()} Your Team Name. All rights reserved.</p>

                            <div className="flex gap-6">
                                <a href="#home" className="hover:text-white">Home</a>
                                <a href="#team" className="hover:text-white">Team</a>
                                <a href="#contact" className="hover:text-white">Contact</a>
                            </div>

                        </div>

                    </div>

                </div>
            </footer>



        </div>
    );
}