'use server'
import { promises as fs } from 'fs';

export async function loadWorkData() {
    const workFile = await fs.readFile('/data/work.json', 'utf8');
    const workData = JSON.parse(workFile);
    return workData;
}

export async function loadProjectData() {
    const projectFile = await fs.readFile('/data/projects.json', 'utf8')
    const projectData = JSON.parse(projectFile);
    return projectData
}