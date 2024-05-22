"use client";
import { sourceCodePro } from "@/app/ui/fonts";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { useEffect, useState } from "react"

function determineColor(state: boolean) {
    return state ? "black" : "var(--text-red)";
}

function determineLogo(state: boolean) {
    return state ? "/headerlogo_alt.png" : "/headerlogo.png";
}

const NavBar = (props: any) => {
    const [isAlt, setisAlt] = useState(props.alt);

    const onScroll = () => {
        if (Math.floor((globalThis.scrollY + 24) / globalThis.innerHeight) % 2 != 0) {
            setisAlt(true);
        } else {
            setisAlt(false);
        }
    }

    useEffect(() => {
        if (props.dynamic) document.addEventListener("scroll", onScroll);
    }, [isAlt])

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
            <div className="nav-links">
                <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>01.</b> <a href="/#about">About</a></p>
                <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>02.</b> <a href="/#experience">Experience</a></p>
                <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>03.</b> <a href="/#projects">Projects</a></p>
                <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>04.</b> <a href="/#blog">Blog</a></p>
                <p style={{color: "white"}}><b style={{color: determineColor(isAlt)}}>05.</b> <a href="/#contact">Contact</a></p>
                <button style={{border: `1px solid ${determineColor(isAlt)}`}}className={`resume-button ${sourceCodePro.className}`}>Resume</button>
            </div>
        </div>
      );
}

NavBar.proptypes = {
    alt: PropTypes.bool,
}

export default NavBar;