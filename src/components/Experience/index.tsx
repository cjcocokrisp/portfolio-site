"use client";
import { sourceSans, sourceCodePro } from "@/app/ui/fonts";
import Image from "next/image";
import { useState } from "react";
import ExperienceLine from "./ExperienceLine";

export default function Experience(props: any) {
    const [current, setCurrent] = useState("0");

    function getWorkExperiences() {
        return Object.entries(props.data);
    }

    function handleClick(position: any) {
        let pos = position;
        return () => { setCurrent(pos); }
    }

    function reduceImgSize(width: any, height: any) {
        while (width > 400) {
            width /= 2;
            height /= 2;
        }
        while (height > 400) {
            width /= 2;
            height /= 2;
        }
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
            <div className="experience-photos" style={{background: `linear-gradient(${props.data[current]["background_colors"][0]}, ${props.data[current]["background_colors"][1]})`}}>
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