'use client'
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { sourceCodePro } from "../ui/fonts";

export default function VersionHistory() {
    return (
        <main style={{backgroundImage: "linear-gradient(#353434, #0F0F0F)", minHeight: "100vh"}}>
            <NavBar alt={false}/>
            <div style={{display: "flex", justifyContent: "center", width: "100vw", marginTop: "2vh"}}>
                <iframe src="/files/Resume-Dec-2024.pdf" style={{width: "50vw", height: "85vh"}}/>
            </div>
            <Footer type={"transparent"}/>   
        </main>
    );
}