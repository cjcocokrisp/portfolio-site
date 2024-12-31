"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { sourceCodePro } from "@/app/ui/fonts";
import { useEffect, useState } from "react"
import PropTypes from "prop-types";
import Image from "next/image";

function determineColor(state: boolean) {
    return state ? "black" : "var(--text-red)";
}

function determineLogo(state: boolean) {
    return state ? "/headerlogo_alt.png" : "/headerlogo.png";
}

const NavBar = (props: any) => {
    const [isAlt, setisAlt] = useState(props.alt);
    const [navSelected, setNavSelected] = useState(false);
    const [width, setWidth] = useState(0);

    
    useEffect(() => {
        const onScroll = () => {
            if (Math.floor((globalThis.scrollY + 24) / globalThis.innerHeight) % 2 != 0) {
                setisAlt(true);
            } else {
                setisAlt(false);
            }
        }
        if (props.dynamic) document.addEventListener("scroll", onScroll);

        setWidth(globalThis.innerWidth)
    }, [isAlt])

    function handleClick() {
        navSelected ? setNavSelected(false) : setNavSelected(true);
    }

    function determineContent() {
        if (width > 414) {
            return (
                <div className="nav-links">
                    <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>01.</b> <a href="/#about">About</a></p>
                    <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>02.</b> <a href="/#experience">Experience</a></p>
                    <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>03.</b> <a href="/#projects">Projects</a></p>
                    <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>04.</b> <a href="/blog">Blog</a></p>
                    <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>05.</b> <a href="/#blog-contact">Contact</a></p>
                    <a href="/resume"><button style={{border: `1px solid ${determineColor(isAlt)}`}}className={`resume-button ${sourceCodePro.className}`}>Resume</button></a>
                </div>
            )
        }
        else {
            if (navSelected) {
                return (
                    <div className="navbar-mobile">
                        <FontAwesomeIcon icon={faX} onClick={handleClick} style={{color: determineColor(isAlt)}}className="navbar-mobile-x"/>
                        <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>01.</b> <a href="/#about">About</a></p>
                        <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>02.</b> <a href="/#experience">Experience</a></p>
                        <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>03.</b> <a href="/#projects">Projects</a></p>
                        <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>04.</b> <a href="/#blog-contact">Blog</a></p>
                        <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>05.</b> <a href="/#blog-contact">Contact</a></p>
                        <a href="/resume"><button style={{border: `1px solid ${determineColor(isAlt)}`}}className={`resume-button ${sourceCodePro.className}`}>Resume</button></a>
                    </div>
                )
            }
            else {
            return (
                    <FontAwesomeIcon icon={faBars} onClick={handleClick} style={{color: determineColor(isAlt)}}className="navbar-mobile-bars"/>
                )
            }
        }
    }

    return (
        <div className={`${sourceCodePro.className} nav container`}>
            <a href={'/'}>
                <Image
                    src={determineLogo(isAlt)}
                    width={54}
                    height={44}
                    className="header-logo"
                    alt="Site logo"
                />
            </a>
            {determineContent()}
        </div>
      );
}

NavBar.proptypes = {
    alt: PropTypes.bool,
}

export default NavBar;