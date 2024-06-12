'use server'
export default async function getAPIKey() {
    return process.env.RSS2JSONAPIKEY;
}