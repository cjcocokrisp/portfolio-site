"use client";
import { sourceCodePro } from "@/app/ui/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer(props: any) {
    let type = "linear-gradient(#353434, #0F0F0F)";
    switch (props.type) {
    case "alt":
        type = "linear-gradient(var(--title-red), var(--img-stroke)";
        break;
    case "transparent":
        type = "rgba(0,0,0,0)";
        break;
        //  linear-gradient(#353434, #0F0F0F
    }

    return (
        <div className={`${sourceCodePro.className} footer container`} style={{background: type}}>
            <div className="footer-icons">
                <a href="https://www.github.com/cjcocokrisp">
                    <FontAwesomeIcon icon={faGithub} className="footer-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/christopher-coco-jr/">
                    <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
                </a>
            </div>
            <div className="footer-text">Christopher Coco Jr. | Copyright All Rights Reserved | <a href="/version-history">v1.3.1</a></div>
        </div>
      );
}