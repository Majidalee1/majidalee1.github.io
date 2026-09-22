# majid-portfolio

One-page portfolio for **Majid Ali**, AI, React Native and backend engineer, live at
[majidalee.dev](https://majidalee.dev). It's laid out like an App Store listing.

Static HTML and CSS, no build step and no tracking. Open `index.html` or run
`python3 -m http.server 4321`.

```
index.html                   The one-page portfolio (recruiters, name searches)
react-native-app-development/, ai-app-development/, mvp-app-development/
                             Service pages for client searches (Service + FAQ schema)
blog/                        Articles (BlogPosting schema); add one by copying a post folder
css/site.css                 All styles, light and dark
assets/wordmark*.svg         The "majid" wordmark (light and dark)
assets/Majid_Ali_Resume.pdf  Résumé
404.html                     Sends old URLs (/work/*, /about.html…) back home
robots.txt, sitemap.xml      Search engines (sitemap includes the OG image and résumé)
llms.txt                     Plain-text profile for AI search (ChatGPT, Perplexity, Claude)
site.webmanifest, assets/    Icons, OG image (1200×630), self-hosted Instrument Sans
```

SEO lives in `<head>`: title and description, canonical, Open Graph and Twitter cards, and one
JSON-LD graph (WebSite, ProfilePage, Person, Organization, FAQPage). When a fact or a price
changes, update the visible text, the JSON-LD, `llms.txt` and `sitemap.xml` together.

Content rule: every claim traces to `../claude-resume-kit/resume_builder/experience/`.
Team work says team, contributions say contributed, and anything that wouldn't survive a
follow-up question in an interview stays off the page.
