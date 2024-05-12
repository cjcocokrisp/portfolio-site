"use client";
import { sourceSans, sourceCodePro } from "@/app/ui/fonts";
import Image from "next/image";
import { useState } from "react";

export default function Experience(props: any) {
    const [current, setCurrent] = useState("0");

    // inRange function is exclusive to max and inclusive to min
    function inRange(num: any, max: any, min: any) {
        return num >= min && num < max;
    }

    function calcImgReduce() {
        let x = 0;
        if(globalThis.innerWidth >= 1536) x = 500;
        else if (inRange(globalThis.innerWidth, 1536, 1024)) x = 400;
        else if (inRange(globalThis.innerWidth, 1024, 640)) x = 200;
        else if (inRange(globalThis.innerWidth, 640, 475)) x = 100;
        return x;
    }

    function getWorkExperiences() {
        return Object.entries(props.data);
    }

    function handleClick(position: any) {
        let pos = position;
        return () => { setCurrent(pos); }
    }

    function reduceImgSize(width: any, height: any) {
        let reduceWidth = 0, reduceHeight = 0;

        reduceWidth = calcImgReduce();

        while (width > reduceWidth) {
            width /= 2;
            height /= 2;
        }
        // TODO: Figure out height scaling!
        // while (height > reduceHeight) {
        //     width /= 2;
        //     height /= 2;
        // }
        return [width, height];
    }

    return (
        <div className="experience-items">
            <div className="experience-lines">
                {
                    getWorkExperiences().map((exp: any) => {
                        let type = "experience-line-circle"
                        if (exp["0"] == current) {
                            type += " experience-line-circle-animation"
                        }
                        return (
                            <div>
                                <div className={`${sourceCodePro.className} experience-lines-text`}>{exp["1"]["start_year"]} - {exp["1"]["end_year"]}</div>
                                <div style={{display: 'flex'}}>
                                    <div className={"experience-line"}/>
                                    <div className={type} onClick={handleClick(exp["0"])}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={`${sourceSans.className} experience-text`}>
                <div className={`${sourceSans.className} experience-title`}>Work Experience</div>
                <div className={`${sourceSans.className} experience-job-info`}>{props.data[current]["company_name"]}</div>
                <div className={`${sourceSans.className} experience-job-info`}>{props.data[current]["title"]}</div>
                <ul className="experience-list">
                    {
                        props.data[current]["text"].map((text: any) => {
                            return <li className={`${sourceSans.className} experience-bullets`}>{text}</li>
                        })
                    }
                </ul>
            </div>
            <div className="experience-photos" style={{background: `linear-gradient(${props.data[current]["background_colors"][0]}, ${props.data[current]["background_colors"][1]})`, width: `${calcImgReduce()}px`}}>
                {
                    props.data[current]["imgs"].map((img: any) => {
                        let size = reduceImgSize(img[1], img[2])
                        return <Image
                        src={"/" + img[0]}
                        width={size[0]}
                        height={size[1]}
                        alt="Peral Logo"
                    />
                    }) 
                }
            </div>
        </div>
      );
}