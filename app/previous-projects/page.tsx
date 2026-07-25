import type { Metadata } from "next";
import Nav from "../nav";
import Footer from "../footer";

export const metadata: Metadata = {
    title: "Competitions — McMaster Advanced Space Systems",
    description:
        "The engineering competitions McMaster Advanced Space Systems (MASS) designs, builds, and tests for.",
};


export default function PreviousProjects() {
    return (


        <div style={{ minHeight: "100vh", backgroundColor: "#121414" }}>
            <Nav />

            <main className="mx-auto w-full max-w-3xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">

                <h1 className="animate-fade-up text-[48px] font-bold text-white"
                    style={{ fontFamily: "var(--font-space-grotesk)", animationDelay: "0.05s" }}
                >
                    Previous Projects
                </h1>

                <p
                    className="animate-fade-up mt-4 text-[18px] text-white"
                    style={{ fontFamily: "var(--font-hanken-grotesk)", animationDelay: "0.12s" }}
                >
                    An overview of the projects.....
                </p>



                <div className="relative mt-14 pl-15">
                    {/* timeline */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFB1C6] rounded-full" />


                    {/* project 1 */}
                    <article
                        className="relative animate-fade-up mt-14"
                        style={{ animationDelay: "0.2s" }}
                    >
                        {/* Timeline star */}
                        <div className="absolute -left-[77px] top-1/2 -translate-y-1/2 text-[#FFB1C6] text-5xl z-10">
                            ✦
                        </div>


                        <h2 className="text-2xl font-[var(--font-space-grotesk)] text-[32px] sm:text-3xl mb-6">
                            Project 1
                        </h2>

                        {/* image placeholder*/}
                        <div className="w-full h-72 sm:h-80 bg-[#1E2020] rounded-[2px]" />


                        <div className="mt-6 text-base leading-7">
                           <p className="font-[var(--font-hanken-grotesk)] text-[18px] font-normal leading-7 text-white">
                                Description for project 1.
                            </p>
                        </div>
                    </article>

                    <div className="flex justify-center mt-10">
                        <div className="w-1/3 border-t border-[#000649] opacity-50" />
                    </div>


                    {/* project 2 */}
                    <article
                        className="relative animate-fade-up mt-14"
                        style={{ animationDelay: "0.2s" }}
                    >
                        {/* Timeline star */}
                        <div className="absolute -left-[77px] top-1/2 -translate-y-1/2 text-[#FFB1C6] text-5xl z-10">
                            ✦
                        </div>

                        <h2 className="text-2xl font-[var(--font-space-grotesk)] text-[32px] sm:text-3xl mb-6">
                            Project 2
                        </h2>

                        {/* image placeholder*/}
                        <div className="w-full h-72 sm:h-80 bg-[#1E2020] rounded-[2px]" />

                        <div className="mt-6 text-base leading-7">
                            <p className="font-[var(--font-hanken-grotesk)] text-[18px] font-normal leading-7 text-white">
                                Description for project 2.
                            </p>
                        </div>
                    </article>

                    <div className="flex justify-center mt-10">
                        <div className="w-1/3 border-t border-[#000649] opacity-50" />
                    </div>


                    {/* project 3 */}
                    <article
                        className="relative animate-fade-up mt-14"
                        style={{ animationDelay: "0.2s" }}
                    >
                        {/* Timeline star */}
                        <div className="absolute -left-[77px] top-1/2 -translate-y-1/2 text-[#FFB1C6] text-5xl z-10">
                            ✦
                        </div>

                        <h2 className="text-2xl font-[var(--font-space-grotesk)] text-[32px] sm:text-3xl mb-6">
                            Project 3
                        </h2>

                        {/* image placeholder*/}
                        <div className="w-full h-72 sm:h-80 bg-[#1E2020] rounded-[2px]" />

                        <div className="mt-6 text-base leading-7">
                            <p className="font-[var(--font-hanken-grotesk)] text-[18px] font-normal leading-7 text-white">
                                Description for project 3.
                            </p>
                        </div>
                    </article>

                    <div className="flex justify-center mt-10">
                        <div className="w-1/3 border-t border-[#000649] opacity-50" />
                    </div>


                    {/* project 4 */}
                    <article
                        className="relative animate-fade-up mt-14"
                        style={{ animationDelay: "0.2s" }}
                    >
                        {/* Timeline star */}
                        <div className="absolute -left-[77px] top-1/2 -translate-y-1/2 text-[#FFB1C6] text-5xl z-10">
                            ✦
                        </div>

                        <h2 className="text-2xl font-[var(--font-space-grotesk)] text-[32px] sm:text-3xl mb-6">
                            Project 4
                        </h2>

                        {/* image placeholder*/}
                        <div className="w-full h-72 sm:h-80 bg-[#1E2020] rounded-xl" />

                        <div className="mt-6 text-base leading-7">
                            <p className="font-[var(--font-hanken-grotesk)] text-[18px] font-normal leading-7 text-white">
                                Description for project 4.
                            </p>
                        </div>
                    </article>
                </div>

            </main>


            <Footer />
        </div>
    );
}