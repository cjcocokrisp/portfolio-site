'use client'
import { sourceCodePro } from "../../ui/fonts";
import { sourceSans } from "../../ui/fonts";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import DOMPurify from "dompurify";
import { Suspense, useState } from "react";
import { useEffect } from "react";
import getAPIKey from "@/app/data/getAPIKey";
import { Console } from "console";
import Link from "next/link";

function Article() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState("");

    let date: string = "";
    let title = useSearchParams().get("title")?.trimEnd();

    useEffect(() => { 
        window.scroll(0, 0);
        getAPIKey().then(res => {
            if (res == undefined) {
                res = "";
            }
            fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.medium.com%2Ffeed%2F%40cjcocokrisp&api_key=${res}`)
            .then(res => res.json())
            .then(data => {
                console.log(title)
                for (let article of data.items) {
                    console.log(article.title === title, article.title);
                    if (article.title === title) {
                        setContent(article.content);
                        date = article.date;
                    }
                }
                setLoading(false);
                console.log(content);
            })
        });
    }, [])
    
    let link = useSearchParams().get("link");
    if (link == null) {
        setContent("Invalid Blog Page...");
        link = "";
    }
    if (content === "") {
        setContent("Article is no longer available through RSS feed. Please read it on medium by clicking the \"Read on Medium\" button.");
    }
    
    if (loading) return <p style={{height: "100dvh"}}></p>;

    return (
        <div>
            <NavBar/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '0', gap: '0.01rem', minHeight: '87vh'}}>
                <div className={`${sourceCodePro.className} display-article-title`}>{title}</div>
                <div className={`${sourceCodePro.className} display-article-date`}>{date}</div>
                <div className={`${sourceSans.className} display-article-content`} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}></div>
                <a href={`${DOMPurify.sanitize(link)}`}><button className={`${sourceCodePro.className} display-article-back`}>Read on Medium</button></a>
                <Link href="/blog"><button className={`${sourceCodePro.className} display-article-back`}>Return</button></Link>
            </div>
            <Footer type="transparent"/>
        </div>
    );
}

export default function ArticleView(props: any) {
    return (
        <main style={{backgroundImage: "linear-gradient(#353434, #0F0F0F)"}}>
            <Suspense>
                <Article/>
            </Suspense>
        </main>
    )
}