'use client'
import { useEffect, useState } from "react";
import { sourceSans } from "../ui/fonts";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MediumCard from "@/components/MediumCard";
import getAPIKey from "../data/getAPIKey";

export default function Blog() {
    const [blogData, setBlogData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [apiKey, setAPIKey] = useState("");

    useEffect(() => {  
        getAPIKey().then(res => {
            if (res == undefined) {
                res = "";
            }
            setAPIKey(res);
        });
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.medium.com%2Ffeed%2F%40cjcocokrisp&api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            setBlogData(data.items);
            setLoading(false);
        })
    }, [])
    
    if (blogData.length == 0 || isLoading) return <p style={{height: "100vh"}}></p>;

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