---
title: Zurg/Rclone
description: Configuration and setup for Zurg and Rclone with Riven.
editLink: true
---

# Zurg/Rclone

For optimal performance with Riven, we recommend using Zurg with Rclone.
Here's a sample systemd service file for mounting Rclone with Zurg:

```/etc/systemd/system/rclone.service```

```
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

Here's a sample systemd service file for starting Zurg:

```/etc/systemd/system/zurg.service```

```
[Unit]
Description=zurg
After=network.target
Wants=network-online.target

[Service]
Type=simple
User=spoked
ExecStart=/root/zurgfiles/zurg
WorkingDirectory=/root/zurgfiles
StandardOutput=file:/var/log/zurg.log
StandardError=file:/var/log/zurg.log
Restart=on-abort
RestartSec=10
StartLimitInterval=45
StartLimitBurst=5

[Install]
WantedBy=multi-user.target
```

> [!NOTE]
> This service file will start http Zurg. Make sure to adjust the `User` field as necessary for your system.

Here's a suggested `zurg.yaml` configuration:

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
> 
Here's a suggested `rclone.conf` configuration:

```
[realdebrid]
type = realdebrid
api_key = TOKENHERE

[zurg]
type = webdav
url = http://localhost:9999/dav
vendor = other
pacer_min_sleep = 0
 
[zurghttp]
type = http
url = http://localhost:9999/http
no_head = false
no_slash = false
```