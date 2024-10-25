import { FaGithub, FaLinkedin, FaRegFilePdf, FaSlackHash } from "react-icons/fa";
import Image from 'next/image'
import React from "react";
export default function Footer() {
    return (
        <>

            <footer className="footer flex justify-between text-base-content mt-auto pb-7 sm:pb-2">
                <section className="lg:pl-10 pl-4">
                    <div className="grid grid-flow-col group">
                        <p className="sm:text-xs pl-2 pt-0 sm:pt-1 group-hover:hidden" >
                            Copyright © {new Date().getFullYear()} - All right reserved
                        </p>

                        <div className="hidden group-hover:flex">
                            <p className="sm:text-xs pl-2 pt-0 sm:pt-1 ">
                                Designed and developed in
                            </p>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="ml-1 w-8 rounded-sm" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/512px-Flag_of_India.svg.png" alt={"Indian flag"} />
                        </div>
                    </div>

                </section>
                <section className=" lg:pr-10 pr-4">
                    <div className="grid grid-flow-col gap-4">
                        <a target="_blank" href="https://www.linkedin.com/in/abhinav1426/" rel="noopener noreferrer"><FaLinkedin size={25} /></a>
                        <a target="_blank" href="https://github.com/Abhinav1426/devUtils" rel="noopener noreferrer"><FaGithub size={25} /></a>
                        {/* <a target="_blank" href="https://bit.ly/mpabhinav_resume" rel="noopener noreferrer"><FaRegFilePdf size={25} /></a> */}
                    </div>
                </section>
            </footer>

        </>
    );
}