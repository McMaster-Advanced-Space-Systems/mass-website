"use client";

import { useState } from "react";

type ProjectPopupComponents = {
    title: string;
    description: string;
    images: string[];

};

export default function ProjectPopup({ title, description, images }: ProjectPopupComponents) {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <>
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => setOpen(true)}
                    className="rounded-[4px] bg-[#1D2951] px-5 py-2 font-[var(--font-hanken-grotesk)] text-[14px] font-medium text-[#121414] transition hover:opacity-80 text-white"
                >
                    Learn More
                </button>
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="w-[90%] max-w-4xl max-h-[85vh] overflow-y-auto rounded-[2px] bg-[#1E2020] p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative h-[500px] rounded-[2px] bg-[#121414] flex items-center justify-center">

                            {/* Left arrow */}
                            <button
                                onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
                                className="absolute left-4 text-2xl text-[#1D2951]"
                            >
                                ←
                            </button>


                            {/* Image */}
                            <img
                                src={images[currentImage]} className="max-h-full max-w-full object-contain rounded-[2px]"
                            />


                            {/* Right arrow */}
                            <button
                                onClick={() => setCurrentImage((currentImage + 1) % images.length)}
                                className="absolute right-4 text-2xl text-[#1D2951]"
                            >
                                →
                            </button>

                        </div>

                        <h2 className="mt-6 font-[var(--font-space-grotesk)] text-[32px] font-semibold text-white">
                            {title}
                        </h2>

                        <p className="mt-3 font-[var(--font-hanken-grotesk)] text-[18px] text-white">
                            {description}
                        </p>

                        <button
                            onClick={() => setOpen(false)}
                            className="rounded-[4px] bg-[#1D2951] px-5 py-2 font-[var(--font-hanken-grotesk)] text-[14px] font-medium text-[#121414] transition hover:opacity-80 text-white"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}