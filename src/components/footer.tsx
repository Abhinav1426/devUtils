import Link from "next/link";
import { FaGithub, FaLinkedin, FaRegFilePdf, FaSlackHash } from "react-icons/fa";
import { RiFilePdfLine } from "react-icons/ri";

export default function Footer() {
    return (
        <>

                    <footer className="footer flex justify-between text-base-content mt-auto pb-7">
                        <section className="lg:pl-10 pl-4">
                            <div className="grid grid-flow-col">
                                <FaSlackHash size={25} />
                                <p className="sm:text-xs">Copyright © {new Date().getFullYear()} - All right reserved</p>
                            </div>
                        </section>
                        <section className=" lg:pr-10 pr-4">
                            <div className="grid grid-flow-col gap-4">
                                <a target="_blank" href="https://www.linkedin.com/in/abhinav1426/" rel="noopener noreferrer"><FaLinkedin size={25} /></a>
                                <a target="_blank" href="https://github.com/Abhinav1426" rel="noopener noreferrer"><FaGithub size={25} /></a>
                                <a target="_blank" href="https://bit.ly/mpabhinav_resume" rel="noopener noreferrer"><FaRegFilePdf size={25} /></a>
                            </div>
                        </section>
                    </footer>

        </>
    );
}