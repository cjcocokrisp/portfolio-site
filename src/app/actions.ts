'use server'
import { promises as fs } from 'fs';

export default async function loadWorkData() {
    const workFile = await fs.readFile(process.cwd() + '/data/work.json', 'utf8');
    const workData = JSON.parse(workFile);

    return workData;
}