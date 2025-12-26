const projectData = {
    "0": {
        "year": "2025",
        "projects": {
            "0" : {
                "name": "mc2sf",
                "text": [
                    "Developed a small tool in Python to backup a Minecraft Server to Seafile.",
                    "Archives server as a zip file and then uses Seafile's REST API to uplaod the file.",
                    "Created a Helm Chart to deploy the tool to Kubernetes as a cronjob.",
                    "Tried out uv as the Python package manager for this project, it is pretty neat."
                ],
                "img": "mc2sf.png", 
                "repo": "https://github.com/cjcocokrisp/mc2sf"

            },
            "1" : {
                "name": "Homelab",
                "text": [
                    "Created a homelab to self host various services.",
                    "Created a Fedora bootc image for the operating system of the devices in my homelab.",
                    "Used Terraform to deploy VMs of Talos Linux to act as nodes in a Kubernetes cluster.",
                    "Wrote Kubernetes manifests to deploy various applications.",
                    "Set up local DNS with Unbound.",
                    "For outside access to the whole network set up Tailscale as a VPN.",
                    "Exposed services to the public internet with Cloudflare tunnels.",
                    "Created documentation for some aspects of the homelab."
                ],
                "img": "homelab.png", 
                "repo": "https://github.com/cjcocokrisp/homelab"
            },
            "2" : {
                "name": "SongSwipe",
                "text": [
                    "Participated in development of a web application for Spotify Playlist cleaning inspired by dating apps.",
                    "Developed in Typescript.",
                    "Handled interactions with the Spotify API and designed system for data store.",
                    "Added a metric server to the application to be able to record data on how this app improved experience. Created graphs from metrics.",
                    "Created testing suite for the application.",
                    "Developed for the COMP.4120 (Software Engineering II) Spring 2025 Project."
                ],
                "img": "songswipe.png", 
                "repo": "https://github.com/ListenToAJ/SongSwipe"
            },
            "3" : {
                "name": "go-dexcomshare",
                "text": [
                    "Developed a Go module to interact with the Dexcom Share API.",
                    "Interacting with this API allows for users to pull real time estimated glucose values from their Dexcom CGM.",
                    "Properly documented the module and uploaded it to the Go package manager to allow for easy installation.",
                ],
                "img": "dexcomshare.png", 
                "repo": "https://github.com/cjcocokrisp/go-dexcomshare"
            }
        },
    },
    "1": {
        "year": "2024",
        "projects": {
            "0" : {
                "name": "Trivia Cloud",
                "text": [
                    "Created a real-time Trivia Game with AWS interacts with the Open Trivia Database to pull questions from various categories. The entire application was designed to be serverless.",
                    "Implemented a web socket API that handles managing game state and active connections built using AWS API Gateway and written in the Go programming language.",
                    "Stored the game data and state along with active connections in AWS DynamoDB.",
                    "Built the front end of the application in React and stored the compiled app in an S3 bucket to serve to users.",
                    "Automated deployments through GitHub actions to push the latest version on every commit to the main branch.",
                    "Developed for the COMP.4600 (Selected Topics: Cloud Computing) Fall 2024 Final Project."
                ],
                "img": "trivia-cloud.png", 
                "repo": "https://github.com/cjcocokrisp/trivia-cloud"
            },
            "1" : {
                "name": "Shiny Sim",
                "text": [
                    "Developed a Pokémon Shiny Hunting Simulator web application that utilizes PokéAPI to pull data and information.",
                    "Used SQLite to store hunt information in a uniform fashion.",
                    "Built the back end REST API in the Go programming language that interacts with the SQLite database.",
                    "Containerized the application using Docker to make it easier to install the application to run locally."
                ],
                "img": "shiny-sim.png", 
                "repo": "https://github.com/cjcocokrisp/shiny-sim"
            },
            "2" : {
                "name": "Attendance Bot",
                "text": [
                    "Developed a Discord Attendance Bot as an AWS Lambda function to be used by the UML Cloud Computing Club at their meetings to track and get statistics of their events.",
                    "By using AWS Lambda, billing was ensured to only be charged for the use time of the bot to optimize cost-efficiency.",
                    "Utilized DynamoDB as the backend database to store and manage user information and attendance codes.",
                    "Designed and implemented validation mechanisms to prevent the reuse of codes and enforce expiration politicies.",
                    "Implemented a query system to pull statistics about attedance and send reports to requested Discord channel in CSV format."
                ],
                "img": "attendance.png", 
                "repo": "https://github.com/UMLCloudComputing/attendance"
            },
            "3" : {
                "name": "Gup Rankings",
                "text": [
                    "Developed a Risk of Rain 2 mod that adds an In-Game Leaderboard system to the game to allow players to know how they are doing and add a competitive aspect to runs.",
                    "Synced the host and the clients to display the information about players statistics to allow for comparison in real time and consistent display.",
                    "Published the mod on the Thunderstore to allow other players to easily access it and used Github Actions to help automate releases and build tasks.",
                    "Risk of Rain 2 was developed in Unity so the mod was developed in C#.",
                ],
                "img": "guprankings.png", 
                "repo": "https://github.com/cjcocokrisp/GupRankings"
            },
            "4" : {
                "name": "Portfolio Website",
                "text": [
                    "Developed a portfolio website to host information about myself and career.",
                    "Displays most recent Medium blog posts by pulling data from Medium's RSS Feed and then displays it to the user to read on the site.",
                    "Built using Next.JS and vanilla CSS."
                ],
                "img": "portfoliosite.png", 
                "repo": "https://github.com/cjcocokrisp/portfolio-site"
            }
        }
    },
    "2": {
        "year": "2023",
        "projects": {
            "0" : {
                "name": "Shine.AI",
                "text": [
                    "Developed a machine learning framework in Python that uses a neural network to detect if an image of a Pokémon is shiny-type.",
                    "This framework was then used to automate the model on 3DS hardware by using input redirection and remote streaming.",
                    "Implemented a Discord bot that would notify the user on the status of the hunt through automated messages every cycle."
                ],
                "img": "shineai.png",
                "repo": "https://github.com/cjcocokrisp/shine.ai"
            },
            "1" : {
                "name": "Chip8 Emulator",
                "text": [
                    "Wrote an emulator for the Chip8 interpreted programming language in C.",
                    "Implemented CPU Opcodes, emulated the system’s memory registers, graphics output, sound output, and clock.",
                    "Used basic OpenGL to draw the current state of the screen."
                ],
                "img": "chip8emu.png", 
                "repo": "https://github.com/cjcocokrisp/CHIP8_EMU"
            }
        }
    },
    "3": {
        "year": "2022",
        "projects": {
            "0": {
                "name": "MYR Image Converter",
                "text": [
                    "Wrote a Python Script to convert images to be viewable in the MYR VR platform.",
                    "Another script was packaged in that allows for resizing images by percentages",
                    "Developed as apart of the SoarCS 2022 Final Projects and was presented at DevConf 2022."
                ], 
                "img": "myr.png",
                "repo": "https://github.com/cjcocokrisp/myr-image-converter"
            },
            "1": {
                "name": "Insulate",
                "text": [
                    "Developed a Python Application that aims to help motivate children with Type 1 Diabetes to learn more about caring for their diabetes on their own.",
                    "Uses CGM data from Dexcom’s Web API to reward the user for having good blood sugar averages."
                ],
                "img": "insulate.png",
                "repo": "https://github.com/cjcocokrisp/insulate"
            }
        }
    },
    "4": {
        "year": "2021",
        "projects": {
            "0": {
                "name": "Reaction Test Game",
                "text": [
                    "Developed a simple reaction test game in Python with the Pygame library.",
                    "Created as my submission for the AP Computer Science Principles Create Task."
            ],
                "img": "reaction-test.png",
                "repo": "https://github.com/cjcocokrisp/reaction-test"
            },
            "1": {
                "name": "Simple Platformer Project",
                "text": [
                    "Developed a simple platformer game with one level with Python and the Pygame library.",
                    "This was my first bigger project that I worked on."
                ],
                "img": "platformer.png",
                "repo": "https://github.com/cjcocokrisp/simple-platformer-project"
            }
        }
    }
}

export default projectData;
