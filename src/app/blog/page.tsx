'use client'
import { useEffect, useState } from "react";
import { sourceCodePro, sourceSans } from "../ui/fonts";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MediumCard from "@/components/MediumCard";
import getAPIKey from "../data/getAPIKey";

export default function Blog() {
    const [blogData, setBlogData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {  
        window.scroll(0, 0);
        getAPIKey().then(res => {
            if (res == undefined) {
                res = "";
            }
            fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.medium.com%2Ffeed%2F%40cjcocokrisp&api_key=${res}`)
            .then(res => res.json())
            .then(data => {
                setBlogData(data.items);
                setLoading(false);
            })
        });
    }, [])
    
    if (isLoading) return <p style={{height: "100dvh"}}></p>;
    else if (blogData == undefined || blogData.length == 0) return <p className={`${sourceCodePro.className}`} style={{height: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>There was an error with the Medium RSS feed. Please try again later.</p>

    return (
        <main style={{backgroundImage: "linear-gradient(#353434, #0F0F0F)"}}>
            <NavBar/>
            <div className="container blog-articles" style={{minHeight: "86vh"}}>
                <p className={`${sourceSans.className} blog-title`}>Most Recent Blog Articles</p>
                {blogData.map((article) => (
                    <MediumCard key={article} article={article}/>
                ))}
                <p className={`${sourceSans.className} blog-notice`}><a href="https://medium.com/@cjcocokrisp">To view all articles click here to be redirected to my Medium profile!</a></p>
            </div>
            <Footer type="transparent"/>
        </main>
    );
}