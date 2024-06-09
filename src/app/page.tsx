'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { sourceCodePro } from "./ui/fonts";
import { sourceSans } from "./ui/fonts";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { projectData } from "./data/projectData";
import { workData } from "./data/workData";

export default function Home() {
    const [isLoading, setLoading] = useState(false);
    
    if (!workData || !projectData || isLoading) return <p style={{height: "100vh"}}></p>;
    
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
                    <a href="https://www.instagram.com/cjcocokrisp/">
                        <FontAwesomeIcon icon={faInstagram} className="hero-icon" />
                    </a>
                    <div className="hero-line"></div>
                </div>
                <div className="hero-text" style={{alignSelf: "center"}}>
                    <p className={`${sourceCodePro.className} hero-text-name`}>Chirstopher Coco</p>
                    <p className={`${sourceCodePro.className} hero-text-title`}>Software Engineer</p>
                    <p className={`${sourceSans.className} hero-text-info`}>I’m an aspiring software engineer based in Massachusetts that is currently studying Computer Science at the University of Massachusetts Lowell. I’m interested in Cloud Technology, Automation, and Game Development.</p>
                </div>
                <div className="hero-img-container" style={{alignSelf: "center"}}>
                    <Image
                        src="/hero-img.jpg"
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
                <div id="blog">
                    <div className={`${sourceSans.className} blog-title`}>Blog</div>
                    <div className="blog-content">
                        <div className={`${sourceSans.className} blog-text`}>If you’re interested in what I’m working on, learning, and more check out my blog!</div>
                        <a href="/blog"><button className={`${sourceSans.className} blog-button`}>To Blog</button></a>
                    </div>
                </div>
                <div id="contact">
                    <div className={`${sourceSans.className} contact-title`}>Contact</div>
                    <div className={`${sourceSans.className} contact-text`}>Want to get in touch?</div>
                    <div className={`${sourceCodePro.className} contact-content`}>
                        <div className={`contact-linkedin`}><a href="https://www.linkedin.com/in/christopher-coco-jr/">Connect with me on <FontAwesomeIcon icon={faLinkedin} className="contact-icon" /></a></div>
                        <div className="contact-email">Email me at <em>chriscoco1205@gmail.com</em></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}