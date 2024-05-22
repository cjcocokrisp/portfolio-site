'use server'
import { promises as fs } from 'fs';

export async function loadWorkData() {
    const workFile = await fs.readFile(process.cwd() + '/data/work.json', 'utf8');
    const workData = JSON.parse(workFile);
    return workData;
}

export async function loadProjectData() {
    const projectFile = await fs.readFile(process.cwd() + '/data/projects.json', 'utf-8')
    const projectData = JSON.parse(projectFile);
    return projectData
}