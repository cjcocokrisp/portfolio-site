"use client"
import { sourceCodePro } from "@/app/ui/fonts";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MediumCard(props: any) {

    const router = useRouter();

    function getDescription() {
        let raw = props.article.description;
        return raw.slice(raw.search("<p>") + 3, raw.search("</p>"))
    }

    return (
        <div className="container article-card">
            <p className={`${sourceCodePro.className}`}>{props.article.pubDate.slice(0, 10)}</p>
            <Link href={`/blog/article?title=${encodeURIComponent(props.article.title)}&link=${encodeURIComponent(props.article.link)}`}>        
                <div className={`${sourceCodePro.className} article-card-info`}>
                    <p className="article-title">{props.article.title}</p>
                    <p className="article-card-description">{getDescription()}</p>
                </div>
            </Link>
        </div>
    );
}