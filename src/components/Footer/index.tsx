"use client";
import { sourceCodePro } from "@/app/ui/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function Footer(props: any) {
    return (
        <div className={`${sourceCodePro.className} footer container`}>
            <div className="footer-icons">
                <a href="https://www.github.com/cjcocokrisp">
                    <FontAwesomeIcon icon={faGithub} className="footer-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/christopher-coco-jr/">
                    <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
                </a>
                <a href="https://www.instagram.com/cjcocokrisp/">
                    <FontAwesomeIcon icon={faInstagram} className="footer-icon"/>
                </a>
            </div>
            <div className="footer-text">Christopher Coco Jr. | Copyright All Rights Reserved</div>

        </div>
      );
}