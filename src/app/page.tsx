'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { sourceCodePro } from "./ui/fonts";
import { sourceSans } from "./ui/fonts";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Experience from "@/components/Experience";
import { loadWorkData, loadProjectData } from "./actions";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import projectData from "./data/projectData";
import workData from "./data/workData";

export default function Home() {
    // const [workData, setWorkData] = useState(null);
    // const [projectData, setProjectData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        // loadWorkData().then((res) => { 
        //     setWorkData(res);
        //     setLoading(false);
        // });
        // loadProjectData().then((res) => {
        //     setProjectData(res);
        //     setLoading(false);
        // });
        
    }, [isLoading])
    
    if (isLoading) return <p style={{height: "100vh"}}></p>;
    
    return (
        <main>
            <div id="about"/>
            <NavBar alt={false} dynamic={true}/>
            <div className="hero container">
                <div className="hero-info left">
                    <a href="https://www.github.com/cjcocokrisp">
                        <FontAwesomeIcon icon={faGithub} className="hero-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/christopher-coco-jr/">
                        <FontAwesomeIcon icon={faLinkedin} className="hero-icon" />
                    </a>
                    <div className="hero-line"></div>
                </div>
                <div className="hero-text" style={{alignSelf: "center"}}>
                    <p className={`${sourceCodePro.className} hero-text-name`}>Christopher Coco</p>
                    <p className={`${sourceCodePro.className} hero-text-title`}>Software Engineer</p>
                    <p className={`${sourceSans.className} hero-text-info`}>I’m a software engineer based in Massachusetts that is currently working on cloud native technologies at Red Hat. I’m interested in cloud native infrastructure, distributed systems, and networking.</p>
                </div>
                <div className="hero-img-container" style={{alignSelf: "center"}}>
                    <Image
                        src="/hero-img.png"
                        width={290}
                        height={290}
                        className="hero-img"
                        alt="Hero image"
                        priority={false}
                    />
                </div>
                <div className="hero-info right">
                    <p className={`${sourceCodePro.className} hero-email`}>chriscoco1205@gmail.com</p>
                    <div className="hero-line"></div>
                </div>
            </div>
            <div className="container" id="experience">
                <Experience data={workData}/>
            </div>
            <div className="container" id="projects">
                <Projects data={projectData}/>
            </div>
            <div className="container blog-contact" id="blog-contact">
                <div id="contact">
                    <div className={`${sourceSans.className} contact-title`}>Contact</div>
                    <div className={`${sourceSans.className} contact-text`}>Want to get in touch?</div>
                    <div className={`${sourceCodePro.className} contact-content`}>
                        <div className={`contact-linkedin`}><a href="https://www.linkedin.com/in/christopher-coco-jr/">Connect with me on <FontAwesomeIcon icon={faLinkedin} className="contact-icon" /></a></div>
                        <div className="contact-email">Email me at <em>chriscoco1205@gmail.com</em></div>
                    </div>
                    <div className={`${sourceSans.className} contact-text`}>More to the site coming eventually who knows when...</div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}
