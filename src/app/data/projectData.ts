const projectData = {
    "0": {
        "year": "2024",
        "projects": {
            "0" : {
                "name": "Gup Rankings",
                "text": [
                    "Developed a Risk of Rain 2 mod that adds an In-Game Leaderboard system to the game to allow players to know how they are doing and add a competitive aspect to runs.",
                    "Synced the host and the clients to display the information about players statistics to allow for comparison in real time.",
                    "Published the mod on the Thunderstore to allow other players to easily access it and used Github Actions to help automate releases.",
                    "Risk of Rain 2 was developed in Unity so the mode was developed in C#."
                ],
                "img": "guprankings.png", 
                "repo": "https://github.com/cjcocokrisp/GupRankings"
            },
            "1" : {
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
    "1": {
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
    "2": {
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
    "3": {
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