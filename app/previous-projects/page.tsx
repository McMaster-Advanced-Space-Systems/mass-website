import ProjectPopup from "./ProjectPopup";

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
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D2951] rounded-full" />


                    {/* project 1 */}
                    <article
                        className="relative animate-fade-up mt-14"
                        style={{ animationDelay: "0.2s" }}
                    >
                        {/* Timeline star */}
                        <div className="absolute -left-[77px] top-1/2 -translate-y-1/2 text-[#1D2951] text-5xl z-10">
                            ✦
                        </div>


                        <h2 className="text-2xl font-[var(--font-space-grotesk)] text-[32px] sm:text-3xl">
                            CAN-ARX : StellarScope
                        </h2>

                        <p className="mt-1 font-[var(--font-hanken-grotesk)] text-[14px] font-medium text-[#1D2951] mb-6">
                            2023-2024
                        </p>



                        {/* image*/}
                        <div className="w-full h-72 sm:h-80 rounded-[2px] overflow-hidden bg-[#1E2020] flex items-center justify-center ">
                            <img
                                src="/projects/stellarscope/using-telescope.png"
                                alt="CAN-ARX StellarScope team"
                                className="w-[90%] h-[90%] object-cover"
                            />
                        </div>

                        <div className="flex justify-center">
                            <ProjectPopup
                                title="CAN-ARX : StellarScope"
                                description="This project explores how analogue extra-planetary environments impact radio telescope observations and develops strategies to mitigate these effects. The team designed and built a constructible radio telescope capable of collecting and analyzing flux measurements under challenging conditions.This project explores how analogue extra-planetary environments impact radio telescope observations and develops strategies to mitigate these effects. The team designed and built a constructible radio telescope capable of collecting and analyzing flux measurements under challenging conditions."
                                images={[
                                        "/projects/stellarscope/multi-team-photo.png",
                                        "/projects/stellarscope/cad.png",
                                        "/projects/stellarscope/using-telescope.png",]}
                            />
                        </div>

                    </article>


                    {/* project 2 */}
                    <article
                        className="relative animate-fade-up mt-14"
                        style={{ animationDelay: "0.4s" }}
                    >
                        {/* Timeline star */}
                        <div className="absolute -left-[77px] top-1/2 -translate-y-1/2 text-[#1D2951] text-5xl z-10">
                            ✦
                        </div>

                        <h2 className="text-2xl font-[var(--font-space-grotesk)] text-[32px] sm:text-3xl mb-6">
                            Project 2
                        </h2>

                        {/* image placeholder*/}
                        <div className="w-full h-72 sm:h-80 bg-[#1E2020] rounded-[2px]" />

                        
                    </article>

                </div>

            </main>


            <Footer />
        </div>
    );
}