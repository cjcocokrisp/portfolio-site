"use client"

import { sourceCodePro } from "@/app/ui/fonts";
import { useRouter } from "next/navigation";

export default function MediumCard(props: any) {

    const router = useRouter();

    function getDescription() {
        let raw = props.article.description;
        return raw.slice(raw.search("<p>") + 3, raw.search("</p>"))
    }
    function sendArticle() {
        router.push(`/blog/article?title=${encodeURIComponent(props.article.title)}
                     &date=${encodeURIComponent(props.article.pubDate.slice(0, 10))}
                     &content=${encodeURIComponent(props.article.content)}
                     &link=${encodeURIComponent(props.article.link)}`)
    }

    return (
        <div className="container article-card">
            <p className={`${sourceCodePro.className}`}>{props.article.pubDate.slice(0, 10)}</p>
            <div className={`${sourceCodePro.className} article-card-info`} onClick={() => sendArticle()}>
                <p className="article-title">{props.article.title}</p>
                <p className="article-card-description">{getDescription()}</p>
            </div>
        </div>
    );
}