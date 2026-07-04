



export default function PreviousProjects() {
    return (
        <div className="min-h-screen bg-[#F2F2F0]">
            
            <nav className="w-full bg-[#000649] text-white">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


                    <div className="flex gap-6 text-sm md:text-base">
                        <a href="#home" className="hover:opacity-80">Home</a>
                        <a href="#about" className="hover:opacity-80">About Us</a>
                        <a href="#team" className="hover:opacity-80">Our Team</a>
                        <a href="#previous_projects" className="hover:opacity-80">Previous Projects</a>
                        <a href="#current_projects" className="hover:opacity-80">Current Projects</a>
                        <a href="#sponsors" className="hover:opacity-80">Sponsors</a>
                    </div>
                </div>
            </nav>



                <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 space-y-24">


                    <div className="flex flex-col md:flex-row items-center gap-10">
                        
                        
                        <div className="w-full md:w-1/2 h-64 md:h-80 bg-gray-300 rounded-xl shadow-inner" />
                        
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold text-[#000649] mb-4">
                                Project 1
                            </h2>

                            <p className="text-gray-700">
                                Description of project. 
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold text-[#000649] mb-4">
                                Project 2
                            </h2>

                            <p className="text-gray-700">
                                Description of project. 
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 h-64 md:h-80 bg-gray-300 rounded-xl shadow-inner" />
                    </div>


                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="w-full md:w-1/2 h-64 md:h-80 bg-gray-300 rounded-xl shadow-inner" />
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold text-[#000649] mb-4">
                                Project 3
                            </h2>

                            <p className="text-gray-700">
                                Description of project. 
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold text-[#000649] mb-4">
                                Project 4
                            </h2>

                            <p className="text-gray-700">
                                Description of project. 
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 h-64 md:h-80 bg-gray-300 rounded-xl shadow-inner" />
                    </div>


                </main>


                <footer className="bg-[#000649] text-white mt-24 w-full">
                    <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm">
                        © {new Date().getFullYear()} McMaster Advanced Space Systems
                    </div>
                </footer>

          

        </div>
    );
}