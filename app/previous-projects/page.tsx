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


        <div style={{ minHeight: "100vh", backgroundColor: "var(--mass-white)" }}>
            <Nav />

            <main className="mx-auto w-full max-w-3xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
                <h1 className="animate-fade-up text-4xl font-semibold text-white sm:text-5xl"
                    style={{ animationDelay: "0.05s" }}
                >
                    Previous Projects
                </h1>

                <p
                    className="animate-fade-up mt-4 text-lg leading-7 text-slate-400"
                    style={{ animationDelay: "0.12s" }}
                >
                    An overview of the projects.
                </p>




                {/* project 1 */}
                <article
                    className="animate-fade-up mt-14"
                    style={{ animationDelay: "0.2s" }}
                >
                    <h2 className="text-2xl font-semibold text-[#000649] sm:text-3xl mb-6">
                        Project 1
                    </h2>

                    {/* image placeholder*/}
                    <div className="w-full h-72 sm:h-80 bg-[var(--mass-blue)] rounded-xl" />

                    <div className="mt-6 text-base leading-7">
                        <p className="text-black">
                            Description for project 1.
                        </p>
                    </div>
                </article>

                <div className="flex justify-center mt-10">
                    <div className="w-1/3 border-t border-[#000649] opacity-50" />
                </div>


                


                {/* project 2 */}
                <article
                    className="animate-fade-up mt-14"
                    style={{ animationDelay: "0.2s" }}
                >
                    <h2 className="text-2xl font-semibold text-[#000649] sm:text-3xl mb-6">
                        Project 2
                    </h2>

                    {/* image placeholder*/}
                    <div className="w-full h-72 sm:h-80 bg-[var(--mass-blue)] rounded-xl" />

                    <div className="mt-6 text-base leading-7">
                        <p className="text-black">
                            Description for project 2.
                        </p>
                    </div>
                </article>

                <div className="flex justify-center mt-10">
                    <div className="w-1/3 border-t border-[#000649] opacity-50" />
                </div>


                {/* project 3 */}
                <article
                    className="animate-fade-up mt-14"
                    style={{ animationDelay: "0.2s" }}
                >
                    <h2 className="text-2xl font-semibold text-[#000649] sm:text-3xl mb-6">
                        Project 3
                    </h2>

                    {/* image placeholder*/}
                    <div className="w-full h-72 sm:h-80 bg-[var(--mass-blue)] rounded-xl" />

                    <div className="mt-6 text-base leading-7">
                        <p className="text-black">
                            Description for project 3.
                        </p>
                    </div>
                </article>

                <div className="flex justify-center mt-10">
                    <div className="w-1/3 border-t border-[#000649] opacity-50" />
                </div>


                {/* project 4 */}
                <article
                    className="animate-fade-up mt-14"
                    style={{ animationDelay: "0.2s" }}
                >
                    <h2 className="text-2xl font-semibold text-[#000649] sm:text-3xl mb-6">
                        Project 4
                    </h2>

                    {/* image placeholder*/}
                    <div className="w-full h-72 sm:h-80 bg-[var(--mass-blue)] rounded-xl" />

                    <div className="mt-6 text-base leading-7">
                        <p className="text-black">
                            Description for project 4.
                        </p>
                    </div>
                </article>


            </main>


            <Footer />
        </div>
    );
}