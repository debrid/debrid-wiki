---
title: Riven
description: Documentation for Riven.
editLink: true
---

<div align="center">
  <a href="https://github.com/rivenmedia/riven">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/dreulavelle/iceberg/main/assets/iceberg-light.png">
      <img alt="Riven" src="https://raw.githubusercontent.com/dreulavelle/rivenmedia/riven/assets/riven-dark.png">
    </picture>
  </a>
</div>

<div align="center">
  <a href="https://github.com/rivenmedia/riven/stargazers" style="display: inline-block; margin-right: 10px;">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/rivenmedia/riven" />
  </a>
  <a href="https://github.com/rivenmedia/riven/issues" style="display: inline-block; margin-right: 10px;">
    <img alt="Issues" src="https://img.shields.io/github/issues/rivenmedia/riven" />
  </a>
  <a href="https://github.com/rivenmedia/riven/blob/main/LICENSE" style="display: inline-block; margin-right: 10px;">
    <img alt="License" src="https://img.shields.io/github/license/rivenmedia/riven" />
  </a>
  <a href="https://github.com/rivenmedia/riven/graphs/contributors" style="display: inline-block; margin-right: 10px;">
    <img alt="Contributors" src="https://img.shields.io/github/contributors/rivenmedia/riven" />
  </a>
  <a href="https://discord.gg/wDgVdH8vNM" style="display: inline-block;">
    <img alt="Discord" src="https://img.shields.io/badge/Join%20discord-8A2BE2" />
  </a>
</div>




<div align="center">
  <p>Plex torrent streaming through Real Debrid and 3rd party services like Overseerr, Mdblist, etc.</p>
  <p>Rewrite of <a target="_blank" href="https://github.com/itsToggle/plex_debrid">plex_debrid project.</a></p>
</div>

## What is Riven?

Riven is an advanced media management and streaming solution designed to integrate with various media servers and third-party services. It automates the process of finding, downloading, and organizing media content, making it instantly available for streaming through your preferred media server.

Riven streamlines your media consumption experience by:

1. Automatically discovering new content based on your preferences and watchlists.
2. Efficiently searching for and downloading high-quality media files.
3. Organizing your media library using a smart symlink system.
4. Seamlessly integrating with your chosen media server for immediate streaming access.
5. Providing a user-friendly web interface for easy management and configuration.

Whether you're a casual viewer or a media enthusiast, Riven offers a powerful, automated solution to keep your media library up-to-date and easily accessible.

## Table of Contents

- [What is Riven?](#what-is-riven)
- [Table of Contents](#table-of-contents)
- [Supported Services](#supported-services)
- [Key Features](#key-features)
- [Main Components and Their Roles](#main-components-and-their-roles)
  - [Flowchart: How Riven Components Work Together](#flowchart-how-riven-components-work-together)
- [ElfHosted](#elfhosted)
- [Self Hosted](#self-hosted)
  - [Docker Compose](#docker-compose)
    - [What is ORIGIN?](#what-is-origin)
  - [Running outside of Docker](#running-outside-of-docker)
    - [First terminal:](#first-terminal)
    - [Second terminal:](#second-terminal)
- [Riven Settings.json](#riven-settingsjson)
- [Symlinks and Permissions](#symlinks-and-permissions)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Supported Services

| Service                                              | Supported |
| ---------------------------------------------------- | --------- |
| Download Services (Real-Debrid, *AllDebrid, Torbox*) | ✅         |
| Media Server (Plex, *Jellyfin, Emby*)                | ✅         |
| Overseerr                                            | ✅         |
| Mdblist                                              | ✅         |
| Trakt                                                | ✅         |
| Jackett                                              | ✅         |
| Media Server Watchlist                               | ✅         |
| Torrentio                                            | ✅         |
| Orionoid                                             | ✅         |
| Zilean                                               | ✅         |
| Listrr                                               | ✅         |

And more to come! Check out our [Project Board](https://github.com/users/dreulavelle/projects/2) to stay informed about upcoming features and integrations.

We welcome feature requests and bug reports. Please use our [Issue Tracker](https://github.com/dreulavelle/iceberg/issues) or join our [Discord](https://discord.gg/wDgVdH8vNM) to get involved with the community.

## Key Features

- Automated media discovery and download through multiple sources
- Integration with various Download Services for high-speed downloads
- Seamless media server library management
- Support for various third-party services for content curation
- Efficient symlink-based file management

## Main Components and Their Roles

1. **Content Discovery**:
   - Integrates with services like Overseerr, Mdblist, Trakt, etc.
   - Finds new media to download based on user preferences and watchlists

2. **Scraper**:
   - Searches for torrent files across various sources
   - Filters results based on quality preferences

3. **Downloader**:
   - Manages downloads through Real-Debrid
   - Handles torrent to direct download conversion

4. **Symlinker**:
   - Creates symbolic links to organize downloaded files
   - Manages the structure of the Plex library

5. **Media Server Updater**:
   - Keeps the media server library in sync with downloaded content
   - Manages metadata and organization within the media server

### Flowchart: How Riven Components Work Together

![Components flowchart](componentsflowchart.png)


This flowchart illustrates the main components of Riven and how they interact:

1. Content Discovery starts the process by finding new media based on user preferences and external services.
2. The Scraper then searches for appropriate torrent files for the discovered media.
3. The Downloader, integrated with the chosen Download Service, manages the actual file downloads.
4. Once downloaded, the Symlinker organizes the files using symbolic links.
5. The Media Server Updater then ensures the media server library is updated with the new content.
6. Finally, the organized and updated media is available in the media server for streaming.

User preferences influence both the Content Discovery and Scraper components, ensuring that the entire process aligns with the user's media preferences and quality settings. The Download Service (e.g., Real-Debrid) is explicitly shown as managing the Downloader component.

## ElfHosted

[ElfHosted](https://elfhosted.com) is a geeky [open-source](https://elfhosted.com/open/) PaaS which provides all the "plumbing" (_hosting, security, updates, etc_) for your self-hosted apps.

> [!IMPORTANT]
> Riven is a top-tier app in the [ElfHosted app catalogue](https://elfhosted.com/apps/). 30% of your subscription goes to Riven developers, and the remainder offsets [infrastructure costs](https://elfhosted.com/open/pricing/).

> [!TIP]
> New accounts get $10 free credit, enough for a week's free trial of the [Riven / Plex Infinite Streaming](https://store.elfhosted.com/product/infinite-plex-riven-streaming-bundle) bundle!

(_[ElfHosted Discord](https://discord.elfhosted.com)_)

## Self Hosted

### Docker Compose

> [!IMPORTANT]
> Before you begin, ensure you have Docker and Docker Compose installed on your system.

Create a `docker-compose.yml` file with the following contents: 

```yml
services:
    riven:
        image: spoked/riven:latest
        container_name: riven
        restart: unless-stopped
        environment:
            PUID: "1000"
            PGID: "1000"
            ORIGIN: "http://localhost:3000" # ORIGIN: read below to avoid CORS issues
            BACKEND_URL: http://127.0.0.1:8080 # optional
        ports:
            - "3000:3000"
        volumes:
            - ./data:/riven/data
            - /mnt:/mnt
```

Then run `docker compose up -d` to start the container in the background. You can then access the web interface at `http://localhost:3000` or whatever port and origin you set in the `docker-compose.yml` file.

> [!TIP]
> On first run, Riven creates a `settings.json` file in the `data` directory. You can edit the settings from frontend, or manually edit the file and restart the container or use `.env` or docker-compose environment variables to set the settings (see `.env.example` for reference).

#### What is ORIGIN?

> [!IMPORTANT]
> Setting the correct ORIGIN is crucial to avoid CORS issues and ensure proper functionality.

`ORIGIN` is the URL of the frontend on which you will access it from anywhere. If you are hosting Riven on a vps with IP address `123.45.67.890` then you will need to set the `ORIGIN` to `http://123.45.67.890:3000` (no trailing slash). Similarly, if using a domain name, you will need to set the `ORIGIN` to `http://riven.example.com:3000` (no trailing slash). If you change the port in the `docker-compose.yml` file, you will need to change it in the `ORIGIN` as well.

### Running outside of Docker

> [!TIP]
> Running outside of Docker can be useful for development or if you prefer more control over the environment.

To run outside of docker you will need to have node (v18.13+) and python (3.10+) installed. Then clone the repository

```sh
git clone https://github.com/rivenmedia/riven.git && cd riven
```

and open two terminals in the root of the project and run the following commands in each.

#### First terminal:

```sh
cd frontend
npm install
npm run build
ORIGIN=http://localhost:3000 BACKEND_URL=http://127.0.0.1 node build
```

Read above for more info on `ORIGIN`.

#### Second terminal:

```sh
pip install poetry
poetry install --without dev
poetry run python backend/main.py
```
## Riven Settings.json

For detailed information on how Riven uses `settings.json` file, please see the [Settings.json](./settings.md) page.

## Symlinks and Permissions

For detailed information on how Riven uses symlinks and manages permissions, please see the [Symlinks and Permissions](./symlinks-and-permissions.md) page.

## Development

For details on setting up the development environment and contributing to Riven, please see the [Development](./development.md) page.

## Contributing

For information on how to contribute to the Riven project, please see the [Contributing](./contributing.md) page.

---

<a href="https://github.com/dreulavelle/iceberg/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dreulavelle/iceberg" />
</a>

## License

This project is licensed under the GNU GPLv3 License - see the [LICENSE](LICENSE) file for details.

