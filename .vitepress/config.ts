import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "./docs",
    title: "Debrid Wiki",
    description:
        "Debrid Wiki is a community-driven project that provides information about debrid services, media servers, and other related topics.",
    lastUpdated: true,
    lang: "en-US",
    cleanUrls: true,
    ignoreDeadLinks: true,
    markdown: {
        lineNumbers: true,
    },
    sitemap: {
        hostname: "https://debrid.wiki",
    },
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["meta", { name: "og:type", content: "website" }],
        ["meta", { name: "og:locale", content: "en" }],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/logo.png",
        nav: [
            { text: "Home", link: "/" },
            { text: "Guide", link: "/intro" },
        ],

        sidebar: [
            {
                text: "Introduction",
                link: "/intro",
                items: [
                    {
                        text: "Debrid Services",
                        link: "/debrid/",
                        items: [
                            {
                                text: "Real Debrid",
                                link: "/debrid/real-debrid",
                            },
                            {
                                text: "AllDebrid",
                                link: "/debrid/alldebrid",
                            },
                            {
                                text: "Premiumize",
                                link: "/debrid/premiumize",
                            },
                        ],
                    },
                    {
                        text: "Riven",
                        link: "/riven/",
                        items: [
                            { text: "Overview", link: "/riven/" },
                            { text: "Zurg/Rclone", link: "/riven/zurg-rclone" },
                            { text: "Symlinks and Permissions", link: "/riven/symlinks-and-permissions" },
                            { text: "Development", link: "/riven/development" }
                        ]
                    },
                ],
            },
            {
                text: "Contributors",
                link: "/contributors",
            },
            {
                text: "Contributing",
                link: "/contributing",
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/debrid/debrid-wiki" },
            { icon: "discord", link: "https://discord.gg/wDgVdH8vNM" },
        ],
        search: {
            provider: "local",
            options: {
                miniSearch: {
                    searchOptions: {
                        combineWith: "AND",
                        fuzzy: false,
                        // @ts-ignore
                        boostDocument: (
                            _,
                            term,
                            storedFields: Record<string, string | string[]>
                        ) => {
                            const titles = (storedFields?.titles as string[])
                                .filter((t) => Boolean(t))
                                .map((t) => t.toLowerCase());
                            // Uprate if term appears in titles. Add bonus for higher levels (i.e. lower index)
                            const titleIndex =
                                titles
                                    .map((t, i) => (t?.includes(term) ? i : -1))
                                    .find((i) => i >= 0) ?? -1;
                            if (titleIndex >= 0) return 10000 - titleIndex;

                            return 1;
                        },
                    },
                },
                detailedView: true,
            },
        },
        footer: {
            message: "Released under the MIT License.",
        },
        editLink: {
            pattern:
                "https://github.com/debrid/debrid-wiki/edit/main/docs/:path",
        },
    },
});
