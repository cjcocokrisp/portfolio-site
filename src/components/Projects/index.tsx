'use client'
import { sourceSans, sourceCodePro } from "@/app/ui/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Projects(props: any) {
    const [previewTitle, setPreviewTitle] = useState(null);
    const [yearPos, setYearPos] = useState("0");
    const [projectPos, setProjectPos] = useState("0");
    const [screenWidth, setScreenWidth] = useState(globalThis.innerWidth);

    useEffect(() => {
        globalThis.onresize = () => { setScreenWidth(globalThis.innerWidth) };
    }, [screenWidth]);

    function inRange(num: any, max: any, min: any) {
        return num >= min && num < max;
    }

    function getYears() {
        return Object.entries(props.data);
    }

    function getProjects() {
        return Object.entries(props.data[yearPos]["projects"]);
    }

    function handleYearClick(position: any) {
        let pos = position;
        return () => { 
            setYearPos(pos);
            setProjectPos("0"); 
        }
    }

    function handleProjectClick(position: any) {
        let pos = position;
        return () => {
            setProjectPos(pos);
        }
    }

    function handleProjectHover(title: any) {
        let text = title;
        return () => { setPreviewTitle(text); }
    }

    function reduceImgSize(width: any, height: any) {
        let reduceWidth = 0, reduceHeight = 0; 

        if(globalThis.innerWidth >= 1151) {
            reduceWidth = 440; 
            reduceHeight = 232; 
        }
        else if (inRange(globalThis.innerWidth, 1151, 950)) {
            reduceWidth = 420; 
            reduceHeight = 212; 
        }
        else if (inRange(globalThis.innerWidth, 935, 500)) {
            reduceWidth = 400; 
            reduceHeight = 192; 
        }
        else {
            reduceWidth = 200; 
            reduceHeight = 92; 
        }

        return [reduceWidth, reduceHeight];
    }

    let imgSize = reduceImgSize(528, 320);
    return (
        <div className="projects-items">
            <div className="experience-lines project">
                {
                    getYears().map((year: any) => {
                        let type = "experience-line-circle project"
                        if (year["0"] == yearPos) {
                            type += " animation";
                        }
                        return (
                            <div>
                                <div className={`${sourceCodePro.className} experience-lines-text project`}>{year["1"]["year"]}</div>
                                <div style={{display: 'flex'}}>
                                    <div className={"experience-line project"}/>
                                    <div className={type} onClick={handleYearClick(year["0"])}/>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <p className={`${sourceSans.className} projects-title`}>Projects</p>
            <div className="projects-info">
                <div className={`${sourceCodePro.className} projects-info-hover-text`}>{previewTitle}</div>
                <div className="projects-info-circles">
                    {
                        getProjects().map((project: any) => {
                            let type = "projects-info-circle";
                            if (project["0"] == projectPos) {
                                type += " animation";
                            }
                            return <div className={type} onClick={handleProjectClick(project["0"])} onMouseEnter={handleProjectHover(project["1"]["name"])} onMouseLeave={() => {return setPreviewTitle(null); }} />
                        })
                    }
                </div>
                <div className="projects-box">
                    <ul className="projects-list">
                        {
                            props.data[yearPos]["projects"][projectPos]["text"].map((text: any) => {
                                return <li className={`${sourceSans.className} experience-bullets`}>{text}</li>
                            })
                        }
                    </ul>
                    <div className="projects-info-box-format">
                        <p className={`${sourceSans.className} projects-info-box-title`}>{props.data[yearPos]["projects"][projectPos]["name"]}</p>
                        <div className={`${sourceCodePro.className} projects-info-box-title projects-repo`} style={{"fontSize": "1.2rem"}}><a href={props.data[yearPos]["projects"][projectPos]["repo"]}>Repository</a></div>
                        <Image
                            src={"/" + props.data[yearPos]["projects"][projectPos]["img"]}
                            width={imgSize[0]}
                            height={imgSize[1]}
                            alt={props.data[yearPos]["projects"][projectPos]["name"] + " Image"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}