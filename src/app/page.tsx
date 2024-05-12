'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { sourceCodePro } from "./ui/fonts";
import { sourceSans } from "./ui/fonts";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Experience from "@/components/Experience";
import loadWorkData from "./actions";

export default function Home() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        loadWorkData().then((res) => { 
            setData(res)
            setLoading(false);
        });
    }, [])

    if (!data || isLoading) return <p style={{height: "100vh"}}></p>;

    return (
        <main>
            <div id="about"/>
            <NavBar alt={false} dynamic={true}/>
            <div className="hero container">
                <div className="hero-info" style={{alignSelf: "flex-end"}}>
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
                    />
                </div>
                <div className="hero-info" style={{alignSelf: "flex-end", marginRight: "0.125rem"}}>
                    <p className={`${sourceCodePro.className} hero-email`}>chriscoco1205@gmail.com</p>
                    <div className="hero-line"></div>
                </div>
            </div>
            <div className="container" id="experience">
                <Experience data={data}/>
            </div>
        </main>
    );
}