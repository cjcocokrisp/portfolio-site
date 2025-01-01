'use client'
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { sourceCodePro } from "../ui/fonts";

export default function VersionHistory() {
    return (
        <main style={{backgroundImage: "linear-gradient(#e03e3e, #c54d4d)", minHeight: "100vh"}}>
            <NavBar alt={true}/>
            <div className="container history-details" style={{minHeight: "86vh"}}>
                <p className={`${sourceCodePro.className} history-title`}>Site Version History</p>
                <div className={`${sourceCodePro.className} version-card`}>
                    <p className="version-title">v1.2.1</p>
                    <ul>
                        <li>Adjusted project box size to make it look better on smaller screens.</li>
                        <li>Adjusted Resume iframe for a better viewing experience on mobile.</li>
                    </ul>
                </div>
                <div className={`${sourceCodePro.className} version-card`}>
                    <p className="version-title">v1.2.0</p>
                    <ul>
                        <li>Added information about two projects completed in the Fall 2024 semester.</li>
                        <li>Adjusted the size of the box in the projects section.</li>
                        <li>Removed Instagram link in hero.</li>
                        <li>Resume is now displayed in site on its own page through an iframe.</li>
                        <li>Updated hero about text.</li>
                    </ul>
                </div>
                <div className={`${sourceCodePro.className} version-card`}>
                    <p className="version-title">v1.1.4</p>
                    <ul>
                        <li>Added information about my Attendance Bot project to the site.</li>
                        <li>Update research work description.</li>
                    </ul>
                </div>
                <div className={`${sourceCodePro.className} version-card`}>
                    <p className="version-title">v1.1.3</p>
                    <ul>
                        <li>Added information about my Gup Rankings project to the site.</li>
                    </ul>
                </div>
                <div className={`${sourceCodePro.className} version-card`}>
                    <p className="version-title">v1.1.2</p>
                    <ul>
                        <li>Improve blog system on the site by shortening the URL of the articles.</li>
                    </ul>
                </div>
                <div className={`${sourceCodePro.className} version-card`}>
                    <p className="version-title">v1.1.1</p>
                    <ul>
                        <li>Improve experience on mobile be adjusting viewport values to dynamic.</li>
                    </ul>
                </div>
                <div className={`${sourceCodePro.className} version-card`}>
                    <p className="version-title">v1.1.0</p>
                    <ul>
                        <li>Add version information to the footer of the site.</li>
                        <li>Add a version history page that is accessible by clicking the version on footer.</li>
                    </ul>
                </div>
                <div className={`${sourceCodePro.className} version-card`}>
                    <p className="version-title">v1.0.4</p>
                    <ul>
                        <li>Fix typo on about section.</li>
                        <li>Update portfolio site image on projects section.</li>
                    </ul>
                </div>
                <div className={`${sourceCodePro.className} version-card`}>
                    <p className="version-title">v1.0.3</p>
                    <ul>
                        <li>Fix issues with RSS2JSON API URL.</li>
                    </ul>
                </div>
                <div className={`${sourceCodePro.className} version-card`}>
                    <p className="version-title">v1.0.2</p>
                    <ul>
                        <li>Update about photo to a more modern photo.</li>
                    </ul>
                </div>
                <div className={`${sourceCodePro.className} version-card`}>
                    <p className="version-title">v1.0.1</p>
                    <ul>
                        <li>Add API key to call for RSS2JSON for better updating.</li>
                    </ul>
                </div>
                <div className={`${sourceCodePro.className} version-card`}>
                    <p className="version-title">v1.0.0</p>
                    <ul>
                        <li>Inital site release!</li>
                        <li>Adds portfolio sections being about, experience, projects, blog, and contact.</li>
                        <li>Blog page uses Medium RSS feed and the RSS2JSON API to display ten most recent articles.</li>
                    </ul>
                </div>
            </div>
            <Footer type={"transparent"}/>   
        </main>
    );
}