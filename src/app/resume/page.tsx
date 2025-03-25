'use client'
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { sourceCodePro } from "../ui/fonts";

export default function VersionHistory() {
    return (
        <main style={{backgroundImage: "linear-gradient(#353434, #0F0F0F)", minHeight: "100vh"}}>
            <NavBar alt={false}/>
            <div style={{display: "flex", justifyContent: "center", width: "100vw", marginTop: "2vh"}}>
                <iframe src="/files/Resume-Mar-2025.pdf" className="resume-iframe"/>
            </div>
            <Footer type={"transparent"}/>   
        </main>
    );
}