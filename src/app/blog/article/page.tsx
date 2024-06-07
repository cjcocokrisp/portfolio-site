'use client'

import { useEffect, useState } from "react";
import { sourceCodePro } from "../../ui/fonts";
import { sourceSans } from "../../ui/fonts";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import DOMPurify from "dompurify";

export default function Home() {
    const router = useRouter();
    const title = useSearchParams().get("title");
    const date = useSearchParams().get("date");
    let link = useSearchParams().get("link");
    let content = useSearchParams().get("content");
    if (link == null) {
        link = "";
    }
    if (content == null) {
        content = "INVALID BLOG PAGE!";
    }
    
    return (
        <main style={{backgroundImage: "linear-gradient(#353434, #0F0F0F)"}}>
            <NavBar/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '0', gap: '0.01rem'}}>
                <div className={`${sourceCodePro.className} display-article-title`}>{title}</div>
                <div className={`${sourceCodePro.className} display-article-date`}>{date}</div>
                <div className={`${sourceSans.className} display-article-content`} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}></div>
                <a href={`${DOMPurify.sanitize(link)}`}><button className={`${sourceCodePro.className} display-article-back`}>Read on Medium</button></a>
                <button className={`${sourceCodePro.className} display-article-back`} onClick={() => router.back()}>Return</button>
            </div>
            <Footer type="transparent"/>
        </main>
    );
}