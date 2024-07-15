---
title: Symlinks and Permissions
description: Detailed information on how Riven uses symlinks and manages permissions.
editLink: true
---

# Symlinks and Permissions

Riven uses a symlink-based system to efficiently manage media files. This page provides detailed information on how Riven handles symlinks and permissions.

## Flowchart: Symlink Function in Riven

```mermaid
graph TD
    A[Download Completed] -->|File Available| B[Create Symlink]
    B --> C{Check Permissions}
    C -->|Correct| D[Symlink Created Successfully]
    C -->|Incorrect| E[Adjust Permissions]
    E --> B
    D --> F[Update Media Server Library]
```

This flowchart illustrates the symlink creation process in Riven:

1. Once a download is completed, the file becomes available for symlinking.
2. Riven attempts to create a symlink to the file.
3. The system checks if the permissions are correct for the symlink.
4. If permissions are correct, the symlink is created successfully.
5. If permissions are incorrect, Riven adjusts them and attempts to create the symlink again.
6. After successful symlink creation, the media server library is updated.

## Key Components

1. **Rclone Path**: This is the path to your Rclone mount that contains your downloaded torrents on your host system.
2. **Library Path**: This is the location where your media server (e.g., Plex, Jellyfin, Emby) expects to find the media files.
3. **Symlink Creation**: Riven creates symbolic links from the Library Path to the actual files in the Rclone Path.
4. **Permission Management**: Riven ensures that the symlinks have the correct permissions for your media server to access them.

## Example Terminal Output

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

Remember to configure your `settings.json` file correctly to ensure Riven can create and manage symlinks effectively:

```json
"symlink": {
    "rclone_path": "/mnt/zurg",
    "library_path": "/mnt/library",
    "separate_anime_dirs": false  // Use separate directories for anime

}
```

By understanding how Riven manages symlinks and permissions, you can ensure your media files are organized efficiently and accessible to your media server.
