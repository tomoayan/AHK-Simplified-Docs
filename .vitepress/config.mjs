import { defineConfig } from 'vitepress'

export default defineConfig({
    srcDir: './docs',
    title: "AHK v2 Simplified",
    description: "A simplified, easy-to-understand documentation for AutoHotkey v2.",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/introduction' },
            { text: 'API', link: '/api/' }
        ],

        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    items: [
                        { text: 'Introduction', link: '/guide/introduction' }
                    ]
                }
            ],
            '/api/': [
                {
                    text: 'API Reference',
                    items: [
                        { text: 'Overview', link: '/api/' }
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/autohotkey/autohotkey' }
        ]
    }
})
