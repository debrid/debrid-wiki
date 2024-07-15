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
  <a href="https://github.com/rivenmedia/riven/stargazers"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/rivenmedia/riven"></a>
  <a href="https://github.com/dreulavelle/rivenmedia/riven"><img alt="Issues" src="https://img.shields.io/github/issues/rivenmedia/riven" /></a>
  <a href="https://github.com/rivenmedia/riven/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/github/license/rivenmedia/riven"></a>
  <a href="https://github.com/rivenmedia/riven/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/rivenmedia/riven" /></a>
  <a href="https://discord.gg/wDgVdH8vNM"><img alt="Discord" src="https://img.shields.io/badge/Join%20discord-8A2BE2" /></a>
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
  - [Symlinking Settings](#symlinking-settings)
- [Zurg/Rclone](#zurgrclone)
- [Riven Settings.json](#riven-settingsjson)
- [Symlinks and Permissions](#symlinks-and-permissions)
  - [Flowchart: Symlink Function in Riven](#flowchart-symlink-function-in-riven)
  - [Key Components](#key-components)
  - [Example Terminal Output](#example-terminal-output)
- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Initial Setup](#initial-setup)
  - [Using `make` for Development](#using-make-for-development)
  - [Development without `make`](#development-without-make)
  - [Additional Tips](#additional-tips)
- [Contributing](#contributing)
  - [Submitting Changes](#submitting-changes)
  - [Code Formatting](#code-formatting)
  - [Dependency Management](#dependency-management)
    - [Setting Up Your Environment](#setting-up-your-environment)
    - [Adding or Updating Dependencies](#adding-or-updating-dependencies)
  - [Running Tests and Linters](#running-tests-and-linters)
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

```mermaid
graph TD
    A[Content Discovery] -->|New media found| B[Scraper]
    B -->|Torrent files| C[Downloader]
    C -->|Downloaded files| D[Symlinker]
    D -->|Organized files| E[Media Server Updater]
    E -->|Updated library| F[Media Server]
    G[User Preferences] -->|Influences| A
    G -->|Filters| B
    H[External Services] -->|Provide data| A
    I[Download Service] -->|Manages| C
```

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

### Symlinking Settings

> [!IMPORTANT]
> Correct symlink settings are crucial for Riven to function properly with your media server.

Riven uses a symlink-based system to efficiently manage media files. Here are the key settings:

- `rclone_path`: Should point to your rclone mount that has your torrents on your host (e.g., `/mnt/zurg`).
- `library_path`: Should point to the location of the mount in your media server container (e.g., `/mnt/library`).

Example configuration:
```json
"symlink": {
    "rclone_path": "/mnt/zurg",
    "library_path": "/mnt/library"
    "separate_anime_dirs": false
}
```

> [!TIP]
> Double-check your paths to ensure they match your system's configuration.

By default, Riven creates the following directories:

| Type         | Categories     |
| ------------ | -------------- |
| Movies       | `movies`       |
| Shows        | `shows`        |
| Anime        | `anime_shows`  |
| Anime Movies | `anime_movies` |

> [!NOTE]
> The anime directories (`anime_movies` and `anime_shows`) are created by default but are not used unless the `separate_anime_dirs` option is `true` in `settings.json`. This allows for more flexible organization based on user preferences.

## Zurg/Rclone

For optimal performance with Riven, we recommend using Zurg with Rclone. Here's a suggested `zurg.yaml` configuration:

```yaml
# basic functionality
host: "[::]"
port: 9999
concurrent_workers: 32
check_for_changes_every_secs: 10

# misc configs
retain_folder_name_extension: true
retain_rd_torrent_name: true

enable_repair: true
ignore_renames: true
cache_network_test_results: true
log_requests: true

# network configs
retries_until_failed: 5

rar_action: extract
force_ipv6: false

serve_from_rclone: false

directories:
  torrents:
    group_order: 10
    group: media
    filters:
      - regex: /.*/
```

> [!NOTE]
> This configuration provides a good starting point for using Zurg with Riven. Adjust the settings as needed based on your specific requirements and system capabilities.

Additionally, here's a sample systemd service file for mounting Rclone with Zurg:

```
/etc/systemd/system/rclone.service
[Unit]
Description=Rclone Mount Service
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/rclone mount zurg:__all__ /mnt/zurg --allow-other --dir-cache-time 10s --vfs-cache-mode full --vfs-read-chunk-size 8M --vfs-read-chunk-size-limit 2G --buffer-size 16M --vfs-cache-max-age 150h --vfs-cache-max-size 20G --vfs-fast-fingerprint
ExecStop=/bin/fusermount -u /mnt/zurg
Restart=always
User=spoked
Group=spoked

[Install]
WantedBy=default.target
```

> [!NOTE]
> This service file will mount your Zurg remote to `/mnt/zurg` using Rclone. Make sure to adjust the `User` and `Group` fields as necessary for your system.

## Riven Settings.json

Riven uses a `settings.json` file to store its configuration. This file is created automatically on the first run and can be found in the `data` directory. You can edit this file manually or through the Riven web interface.

<details>
<summary>Click to view an example of a basic <code>settings.json</code> file</summary>

```json
{
    "version": "0.X.X",  // Version of the settings file
    "debug": true,  // Enable debug mode for more verbose logging
    "log": true,  // Enable logging
    "force_refresh": false,  // Force refresh of content on startup
    "map_metadata": true,  // Map metadata from external sources
    "tracemalloc": false,  // Enable tracemalloc for memory profiling
    "symlink": {
        "rclone_path": ".",  // Path to rclone mount
        "library_path": ".",  // Path to media library
        "separate_anime_dirs": false  // Use separate directories for anime
    },
    "updaters": {
        "updater_interval": 120,  // Interval in seconds for updaters
        "local": {
            "enabled": false  // Enable local updater
        },
        "plex": {
            "enabled": false,  // Enable Plex updater
            "token": "",  // Plex authentication token
            "url": "http://localhost:32400"  // URL of Plex server
        }
    },
    "downloaders": {
        "movie_filesize_min": 200,  // Minimum file size for movies in MB
        "movie_filesize_max": -1,  // Maximum file size for movies in MB (-1 for no limit)
        "episode_filesize_min": 40,  // Minimum file size for TV episodes in MB
        "episode_filesize_max": -1,  // Maximum file size for TV episodes in MB (-1 for no limit)
        "real_debrid": {
            "enabled": false,  // Enable Real-Debrid downloader
            "api_key": "",  // Real-Debrid API key
            "proxy_enabled": false,  // Enable proxy for Real-Debrid
            "proxy_url": ""  // Proxy URL for Real-Debrid
        },
        "all_debrid": {
            "enabled": false,  // Enable AllDebrid downloader
            "api_key": "",  // AllDebrid API key
            "proxy_enabled": false,  // Enable proxy for AllDebrid
            "proxy_url": ""  // Proxy URL for AllDebrid
        },
        "torbox": {
            "enabled": false,  // Enable Torbox downloader
            "api_key": ""  // Torbox API key
        }
    },
    "content": {
        "overseerr": {
            "update_interval": 60,  // Update interval for Overseerr in seconds
            "enabled": false,  // Enable Overseerr integration
            "url": "http://localhost:5055",  // Overseerr URL
            "api_key": "",  // Overseerr API key
            "use_webhook": false  // Use webhook for Overseerr updates
        },
        "plex_watchlist": {
            "update_interval": 60,  // Update interval for Plex watchlist in seconds
            "enabled": false,  // Enable Plex watchlist integration
            "rss": []  // RSS feeds for Plex watchlist
        },
        "mdblist": {
            "update_interval": 300,  // Update interval for MDBList in seconds
            "enabled": false,  // Enable MDBList integration
            "api_key": "",  // MDBList API key
            "lists": []  // MDBList lists to monitor
        },
        "listrr": {
            "update_interval": 300,  // Update interval for Listrr in seconds
            "enabled": false,  // Enable Listrr integration
            "movie_lists": [],  // Listrr movie lists to monitor
            "show_lists": [],  // Listrr TV show lists to monitor
            "api_key": ""  // Listrr API key
        },
        "trakt": {
            "update_interval": 300,  // Update interval for Trakt in seconds
            "enabled": false,  // Enable Trakt integration
            "api_key": "",  // Trakt API key
            "watchlist": [],  // Trakt watchlists to monitor
            "user_lists": [],  // Trakt user lists to monitor
            "collection": [],  // Trakt collections to monitor
            "fetch_trending": false,  // Fetch trending content from Trakt
            "trending_count": 10,  // Number of trending items to fetch
            "fetch_popular": false,  // Fetch popular content from Trakt
            "popular_count": 10  // Number of popular items to fetch
        }
    },
    "scraping": {
        "after_2": 2.0,  // Scrape interval after 2 hours
        "after_5": 6,  // Scrape interval after 5 hours
        "after_10": 24,  // Scrape interval after 10 hours
        "torrentio": {
            "enabled": false,  // Enable Torrentio scraper
            "filter": "sort=qualitysize%7Cqualityfilter=480p,scr,cam",  // Torrentio filter
            "url": "http://torrentio.strem.fun",  // Torrentio URL
            "timeout": 30,  // Timeout for Torrentio requests in seconds
            "ratelimit": true  // Enable rate limiting for Torrentio
        },
        "knightcrawler": {
            "enabled": false,  // Enable Knightcrawler scraper
            "filter": "sort=qualitysize%7Cqualityfilter=480p,scr,cam",  // Knightcrawler filter
            "url": "https://knightcrawler.elfhosted.com",  // Knightcrawler URL
            "timeout": 30,  // Timeout for Knightcrawler requests in seconds
            "ratelimit": true  // Enable rate limiting for Knightcrawler
        },
        "jackett": {
            "enabled": false,  // Enable Jackett scraper
            "url": "http://localhost:9117",  // Jackett URL
            "api_key": "",  // Jackett API key
            "timeout": 30,  // Timeout for Jackett requests in seconds
            "ratelimit": true  // Enable rate limiting for Jackett
        },
        "prowlarr": {
            "enabled": false,  // Enable Prowlarr scraper
            "url": "http://localhost:9696",  // Prowlarr URL
            "api_key": "",  // Prowlarr API key
            "timeout": 30,  // Timeout for Prowlarr requests in seconds
            "ratelimit": true,  // Enable rate limiting for Prowlarr
            "limiter_seconds": 60  // Rate limit interval in seconds
        },
        "orionoid": {
            "enabled": false,  // Enable Orionoid scraper
            "api_key": "",  // Orionoid API key
            "limitcount": 5,  // Limit count for Orionoid requests
            "timeout": 30,  // Timeout for Orionoid requests in seconds
            "ratelimit": true  // Enable rate limiting for Orionoid
        },
        "annatar": {
            "enabled": false,  // Enable Annatar scraper
            "url": "http://annatar.elfhosted.com",  // Annatar URL
            "limit": 2000,  // Limit for Annatar requests
            "timeout": 30,  // Timeout for Annatar requests in seconds
            "ratelimit": true  // Enable rate limiting for Annatar
        },
        "torbox_scraper": {
            "enabled": false,  // Enable Torbox scraper
            "timeout": 30,  // Timeout for Torbox requests in seconds
            "ratelimit": true  // Enable rate limiting for Torbox
        },
        "mediafusion": {
            "enabled": false,  // Enable MediaFusion scraper
            "url": "https://mediafusion.elfhosted.com",  // MediaFusion URL
            "timeout": 30,  // Timeout for MediaFusion requests in seconds
            "ratelimit": true,  // Enable rate limiting for MediaFusion
            "catalogs": [  // MediaFusion catalogs to use
                "prowlarr_streams",
                "torrentio_streams"
            ]
        },
        "zilean": {
            "enabled": false,  // Enable Zilean scraper
            "url": "http://localhost:8181",  // Zilean URL
            "timeout": 30,  // Timeout for Zilean requests in seconds
            "ratelimit": true  // Enable rate limiting for Zilean
        },
        "comet": {
            "enabled": false,  // Enable Comet scraper
            "url": "http://localhost:8000",  // Comet URL
            "indexers": [  // Comet indexers to use
                "bitsearch",
                "eztv",
                "thepiratebay",
                "therarbg",
                "yts"
            ],
            "timeout": 30,  // Timeout for Comet requests in seconds
            "ratelimit": true  // Enable rate limiting for Comet
        }
    },
    "ranking": {
        "profile": "default",  // Default ranking profile
        "require": [],  // Required tags for ranking
        "exclude": [],  // Excluded tags for ranking
        "preferred": [],  // Preferred tags for ranking
        "custom_ranks": {
            "uhd": {
                "enable": false,  // Enable UHD ranking
                "fetch": false,  // Fetch UHD content
                "rank": 120  // Rank for UHD content
            },
            "fhd": {
                "enable": false,  // Enable FHD ranking
                "fetch": true,  // Fetch FHD content
                "rank": 100  // Rank for FHD content
            },
            "hd": {
                "enable": false,  // Enable HD ranking
                "fetch": true,  // Fetch HD content
                "rank": 80  // Rank for HD content
            },
            "sd": {
                "enable": false,  // Enable SD ranking
                "fetch": false,  // Fetch SD content
                "rank": -120  // Rank for SD content
            },
            "bluray": {
                "enable": false,  // Enable Blu-ray ranking
                "fetch": true,  // Fetch Blu-ray content
                "rank": 80  // Rank for Blu-ray content
            },
            "hdr": {
                "enable": false,  // Enable HDR ranking
                "fetch": false,  // Fetch HDR content
                "rank": 80  // Rank for HDR content
            },
            "hdr10": {
                "enable": false,  // Enable HDR10 ranking
                "fetch": false,  // Fetch HDR10 content
                "rank": 90  // Rank for HDR10 content
            },
            "dolby_video": {
                "enable": false,  // Enable Dolby Vision ranking
                "fetch": false,  // Fetch Dolby Vision content
                "rank": -100  // Rank for Dolby Vision content
            },
            "dts_x": {
                "enable": false,  // Enable DTS:X ranking
                "fetch": false,  // Fetch DTS:X content
                "rank": 0  // Rank for DTS:X content
            },
            "dts_hd": {
                "enable": false,  // Enable DTS-HD ranking
                "fetch": false,  // Fetch DTS-HD content
                "rank": 0  // Rank for DTS-HD content
            },
            "dts_hd_ma": {
                "enable": false,  // Enable DTS-HD MA ranking
                "fetch": false,  // Fetch DTS-HD MA content
                "rank": 0  // Rank for DTS-HD MA content
            },
            "atmos": {
                "enable": false,  // Enable Dolby Atmos ranking
                "fetch": false,  // Fetch Dolby Atmos content
                "rank": 0  // Rank for Dolby Atmos content
            },
            "truehd": {
                "enable": false,  // Enable TrueHD ranking
                "fetch": false,  // Fetch TrueHD content
                "rank": 0  // Rank for TrueHD content
            },
            "ddplus": {
                "enable": false,  // Enable DD+ ranking
                "fetch": false,  // Fetch DD+ content
                "rank": 0  // Rank for DD+ content
            },
            "aac": {
                "enable": false,  // Enable AAC ranking
                "fetch": true,  // Fetch AAC content
                "rank": 70  // Rank for AAC content
            },
            "ac3": {
                "enable": false,  // Enable AC3 ranking
                "fetch": true,  // Fetch AC3 content
                "rank": 50  // Rank for AC3 content
            },
            "remux": {
                "enable": false,  // Enable remux ranking
                "fetch": false,  // Fetch remux content
                "rank": -1000  // Rank for remux content
            },
            "webdl": {
                "enable": false,  // Enable WEB-DL ranking
                "fetch": true,  // Fetch WEB-DL content
                "rank": 90  // Rank for WEB-DL content
            },
            "repack": {
                "enable": false,  // Enable repack ranking
                "fetch": true,  // Fetch repack content
                "rank": 5  // Rank for repack content
            },
            "proper": {
                "enable": false,  // Enable proper ranking
                "fetch": true,  // Fetch proper content
                "rank": 4  // Rank for proper content
            },
            "dubbed": {
                "enable": false,  // Enable dubbed ranking
                "fetch": true,  // Fetch dubbed content
                "rank": 3  // Rank for dubbed content
            },
            "subbed": {
                "enable": false,  // Enable subbed ranking
                "fetch": true,  // Fetch subbed content
                "rank": 3  // Rank for subbed content
            },
            "av1": {
                "enable":false,  // Enable AV1 ranking
                "fetch": false,  // Fetch AV1 content
                "rank": 0  // Rank for AV1 content
            },
            "h264": {
                "enable": false,  // Enable H.264 ranking
                "fetch": true,  // Fetch H.264 content
                "rank": 0  // Rank for H.264 content
            },
            "h265": {
                "enable": false,  // Enable H.265 ranking
                "fetch": true,  // Fetch H.265 content
                "rank": 0  // Rank for H.265 content
            },
            "hevc": {
                "enable": false,  // Enable HEVC ranking
                "fetch": true,  // Fetch HEVC content
                "rank": 0  // Rank for HEVC content
            },
            "avc": {
                "enable": false,  // Enable AVC ranking
                "fetch": true,  // Fetch AVC content
                "rank": 0  // Rank for AVC content
            },
            "dvdrip": {
                "enable": false,  // Enable DVDRip ranking
                "fetch": true,  // Fetch DVDRip content
                "rank": -100  // Rank for DVDRip content
            },
            "bdrip": {
                "enable": false,  // Enable BDRip ranking
                "fetch": true,  // Fetch BDRip content
                "rank": 5  // Rank for BDRip content
            },
            "brrip": {
                "enable": false,  // Enable BRRip ranking
                "fetch": true,  // Fetch BRRip content
                "rank": 0  // Rank for BRRip content
            },
            "hdtv": {
                "enable": false,  // Enable HDTV ranking
                "fetch": true,  // Fetch HDTV content
                "rank": -100  // Rank for HDTV content
            }
        }
    },
    "indexer": {
        "update_interval": 3600  // Update interval for indexer in seconds
    },
    "database": {
        "host": "postgresql+psycopg2://postgres:postgres@localhost/riven"  // Database connection string
    }
}
```

</details>

> [!NOTE]
> ## Ranking Settings
> 
> In the ranking section of the settings:
> 
> - "fetch": Determines whether to grab the content when it's scraped.
> - "enable": Allows you to set your own rank instead of using the internal ranking system from the specified profile name.

Key settings to note:

- `media_server`: Configure your media server (e.g., Plex, Jellyfin, Emby) settings here.
- `download_service`: Set up your preferred download service (e.g., Real-Debrid).
- `symlink`: Configure paths for your Rclone mount and media library.
- `scraper`: Enable or disable various scraper sources.

Remember to restart Riven after making changes to the `settings.json` file for the changes to take effect.

## Symlinks and Permissions

Riven uses a symlink-based system to efficiently manage media files without duplicating data. This system is crucial for both Riven and the media server to function correctly. Here's a detailed explanation of how it works:

### Flowchart: Symlink Function in Riven

```mermaid
graph TD
    A[Download Service] -->|Downloads to| B["/mnt/zurg"]
    B -->|Riven creates symlinks| C["/mnt/library"]
    C -->|Media Server reads from| D[Media Server Library]
    E[Riven] -->|Manages symlinks| C
    F[Container Bind Mount] -->|Makes accessible| B
    F -->|Makes accessible| C
```

### Key Components

1. **Download Location (`rclone_path`)**: `/mnt/zurg`
   - This is where files are downloaded and stored by the Download Service.
   - Mounted using Rclone with Zurg.

2. **Library Location (`library_path`)**: `/mnt/library`
   - This is where Riven creates symlinks pointing to the actual files in `/mnt/zurg`.
   - The media server reads from this location.

3. **Container Configuration**:
   - Both Riven and the media server containers should have the bind mount: `/mnt:/mnt`
   - This ensures both containers can access both the `rclone_path` and `library_path`.

4. **Permissions**:
   - It's crucial to set the correct permissions (1000:1000) for both paths.
   - This allows Riven to create symlinks and the media server to read them.

> [!WARNING]
> Do not mount the zurg directories (`/mnt/zurg`) directly in your media server (e.g., Plex). Always use the symlinked library path (`/mnt/library`) in your media server configuration. Mounting zurg directories directly can lead to incomplete metadata, incorrect file organization, and potential performance issues.

### Example Terminal Output

Here's what the typical permissions should look like:

```bash
$ ls -la /mnt
total 16
drwxr-xr-x 4 root root 4096 Jul 15 06:18 .
drwxr-xr-x 19 root root 4096 Jul 15 06:18 ..
drwxrwxr-x 2 1000 1000 4096 Jul 15 06:18 library
drwxrwxr-x 2 root root 4096 Jul 15 06:18 zurg

$ ls -la /mnt/library
total 24
drwxrwxr-x 6 1000 1000 4096 Jul 15 06:18 .
drwxr-xr-x 4 root root 4096 Jul 15 06:18 ..
drwxrwxr-x 2 1000 1000 4096 Jul 15 06:18 movies
drwxrwxr-x 2 1000 1000 4096 Jul 15 06:18 tv_shows
drwxrwxr-x 2 1000 1000 4096 Jul 15 06:18 anime_movies
drwxrwxr-x 2 1000 1000 4096 Jul 15 06:18 anime_shows
```

## Development

Welcome to the development section! Here, you'll find all the necessary steps to set up your development environment and start contributing to the project.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18.13+)
- **Python** (3.10+)
- **Poetry** (for Python dependency management)
- **Docker** (optional, for containerized development)

### Initial Setup

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/rivenmedia/riven.git && cd riven
   ```

2. **Install Backend Dependencies:**

   ```sh
   pip install poetry
   poetry install
   ```

3. **Install Frontend Dependencies:**
   ```sh
   cd frontend
   npm install
   cd ..
   ```

### Using `make` for Development

We provide a `Makefile` to simplify common development tasks. Here are some useful commands:

- **Initialize the Project:**

  ```sh
  make
  ```

- **Start the Development Environment:**
  This command stops any previous containers, removes old images, and rebuilds the image using cached layers. Any changes in the code will trigger a rebuild.

  ```sh
  make start
  ```

- **Restart the Container:**

  ```sh
  make restart
  ```

- **View Logs:**
  ```sh
  make logs
  ```

### Development without `make`

If you prefer not to use `make` and Docker, you can manually set up the development environment with the following steps:

1. **Start the Backend:**

   ```sh
   poetry run python backend/main.py
   ```

2. **Start the Frontend:**
   ```sh
   cd frontend
   npm run dev
   ```

### Additional Tips

- **Environment Variables:**
  Ensure you set the `ORIGIN` environment variable to the URL where the frontend will be accessible. For example:

  ```sh
  export ORIGIN=http://localhost:3000
  ```

- **Code Formatting:**
  We use `Black` for Python and `Prettier` for JavaScript. Make sure to format your code before submitting any changes.

- **Running Tests:**
  ```sh
  poetry run pytest
  ```

By following these guidelines, you'll be able to set up your development environment smoothly and start contributing to the project. Happy coding!

## Contributing

We welcome contributions from the community! To ensure a smooth collaboration, please follow these guidelines:

### Submitting Changes

1. **Open an Issue**: For major changes, start by opening an issue to discuss your proposed modifications. This helps us understand your intentions and provide feedback early in the process.
2. **Pull Requests**: Once your changes are ready, submit a pull request. Ensure your code adheres to our coding standards and passes all tests.

### Code Formatting

- **Backend**: We use [Black](https://black.readthedocs.io/en/stable/) for code formatting. Run `black` on your code before submitting.
- **Frontend**: We use [Prettier](https://prettier.io/) for code formatting. Run `prettier` on your code before submitting.
- **Line Endings**: Use CRLF line endings unless the file is a shell script or another format that requires LF line endings.

### Dependency Management

We use [Poetry](https://python-poetry.org/) for managing dependencies. Poetry simplifies dependency management by automatically handling package versions and resolving conflicts, ensuring consistency across all environments.

#### Setting Up Your Environment

1. **Install Poetry**: If you haven't already, install Poetry using `pip install poetry`.
2. **Install Dependencies**: After cloning the repository, navigate to the project's root directory and run `poetry install`. This command installs all necessary dependencies as defined in the `pyproject.toml` file and creates an isolated virtual environment.
3. **Activate Virtual Environment**: You can activate the virtual environment using `poetry shell` or run commands directly using `poetry run <command>`.

#### Adding or Updating Dependencies

- **Add a Dependency**: Use `poetry add <package-name>` to add a new dependency.
- **Update a Dependency**: Use `poetry update <package-name>` to update an existing dependency.

### Running Tests and Linters

Before submitting a pull request, ensure your changes are compatible with the project's dependencies and coding standards. Use the following commands to run tests and linters:

- **Run Tests**: `poetry run pytest`
- **Run Linters**: `poetry run ruff check backend` and `poetry run isort --check-only backend`

By following these guidelines, you help us maintain a high-quality codebase and streamline the review process. Thank you for contributing!

---

<a href="https://github.com/dreulavelle/iceberg/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dreulavelle/iceberg" />
</a>

## License

This project is licensed under the GNU GPLv3 License - see the [LICENSE](LICENSE) file for details.

