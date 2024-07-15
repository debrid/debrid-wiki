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

Key settings to note:

- `media_server`: Configure your media server (e.g., Plex, Jellyfin, Emby) settings here.
- `download_service`: Set up your preferred download service (e.g., Real-Debrid).
- `symlink`: Configure paths for your Rclone mount and media library.
- `scraper`: Enable or disable various scraper sources.

Remember to restart Riven after making changes to the `settings.json` file for the changes to take effect.

> [!NOTE]
> Ranking Settings
> 
> In the ranking section of the settings:
> - `fetch`: Determines whether to grab the content when it's scraped.
> - `enable`: Allows you to set your own rank underneath `enable` instead of using the internal ranking system from the specified profile name.
