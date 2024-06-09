import { sourceCodePro } from "./ui/fonts";
import Image from "next/image";

export default function notFound() {
    return (
    <div className={`${sourceCodePro.className} error404`}>
        Error 404 | Not Found
        <Image
           src="/404_meme.png"
           width={290}
           height={290}
           alt="If Memory Serves Me Right..."
        />
    </div>
    )
}