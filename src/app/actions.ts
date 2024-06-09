'use server'
import { promises as fs } from 'fs';

export async function loadWorkData() {
    console.log(process.cwd() + '/data/work.json')
    const workFile = await fs.readFile(process.cwd() + '/data/work.json', 'utf-8');
    const workData = JSON.parse(workFile);
    return workData;
}

export async function loadProjectData() {
    console.log(process.cwd() + '/data/projects.json');
    const projectFile = await fs.readFile(process.cwd() + '/data/projects.json', 'utf-8')
    const projectData = JSON.parse(projectFile);
    return projectData
}