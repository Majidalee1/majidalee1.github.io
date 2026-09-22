# Next steps: SEO and growth for majidalee.dev

Where we left off (23 September 2026): the site is rebuilt and deployed. One-page portfolio on `/`,
three service pages, a blog with three articles, full structured data, sitemap, `llms.txt`.
All eight pages scored 100/100/100/100 in Lighthouse (performance, accessibility, best practices, SEO).

Pick up from the first unchecked box.

---

## 1. Ship it
- [x] Commit and push (deploys from the `gh-pages` branch; `main` is kept in sync)
- [ ] Check the live site: `https://majidalee.dev/`, `/sitemap.xml`, `/robots.txt`, `/llms.txt`
- [ ] Turn on **Enforce HTTPS** in GitHub → Settings → Pages once the certificate is issued
      (all canonical URLs are `https://`)

## 2. Get indexed (day 1 after launch, about 30 minutes, Majid)
- [ ] **Google Search Console**: add `majidalee.dev` as a Domain property, verify with the DNS TXT record
- [ ] Submit `https://majidalee.dev/sitemap.xml`
- [ ] URL Inspection → Request indexing for all 8 pages:
      `/`, `/react-native-app-development/`, `/ai-app-development/`, `/mvp-app-development/`,
      `/blog/`, `/blog/llm-inference-prefill-decode-kv-cache/`,
      `/blog/stream-llm-responses-react-native-sse/`, `/blog/javascript-tricks-production/`
- [ ] **Bing Webmaster Tools**: import from Search Console (Bing feeds ChatGPT search and DuckDuckGo)
- [ ] **Rich Results Test** on `/` and `/react-native-app-development/` to confirm Person, Service and FAQ are detected

## 3. Close the trust gaps (week 1, Majid provides, Claude wires in)
- [ ] **Headshot** (square, at least 800px). Goes in the About section and becomes the `image`
      of the Person schema, replacing `assets/og.png`
- [ ] **Three real client reviews** with names (Fiverr "Top Rated" history). Go on the service pages
- [ ] Languages spoken, if you want them in the Person schema (removed because unverified)
- [ ] Same name and link everywhere, "Majid Ali" + `https://majidalee.dev`:
  - [ ] LinkedIn: website field and headline
  - [ ] GitHub: profile website plus a profile README that links the site
  - [ ] Fiverr and Upwork profiles
  - [ ] Then add every profile URL to `sameAs` in the homepage JSON-LD

## 4. Get listed where client searches land (weeks 1–3)
Directories that already rank for "React Native app development company Pakistan":
- [ ] Clutch
- [ ] GoodFirms
- [ ] TechBehemoths
- [ ] Sortlist
- [ ] Upwork / Arc profile tuned for React Native + AI (these profiles rank on their own)

List **Codenetic** with a link to `/react-native-app-development/`. Ask Claude for ready-to-paste copy.

## 5. Publish two articles a month
In order of business value (update the list as articles ship):
1. [ ] **How much does a React Native app cost in 2026?** Buyer-intent; links to the pricing on the service page. **Write next.**
2. [ ] **How I cut a telemedicine platform's Azure bill by 88%**. Real case study; source text is in git history (`work/azure-cost-redesign.html`, commit `d90fa68`)
3. [ ] **Building an MCP server for a production database**. Real case study; source in `work/mcp-server.html`, same commit
4. [ ] **Expo vs bare React Native in 2026**. Comparison for teams choosing a stack
5. [ ] GPU / inference series from the Wafer reading list: quantization explained, speculative decoding explained
6. [ ] **Tracking an iOS TurboModule crash with git bisect (ChartVision)**. Needs 3–4 real details from Majid first

For every new article:
- Follow the SuperSEO `write-content` anti-slop rules; never invent numbers, clients or quotes
- Add it to `blog/index.html`, `sitemap.xml` and `llms.txt`; link it from a related service page
- Give it BlogPosting + BreadcrumbList JSON-LD like the existing posts (copy a post folder as the template)

## 6. Share each article (backlinks)
- [ ] Cross-post to dev.to or Hashnode with the canonical URL pointing to majidalee.dev
- [ ] LinkedIn post for each article
- [ ] r/reactnative when it genuinely helps someone (SSE article, cost article)
- [ ] Hacker News for the LLM inference article

## 7. Measure and adjust (from week 3–4)
- [ ] Search Console → Performance: which queries show impressions; rewrite titles where impressions are high but clicks low
- [ ] Monthly SuperSEO `page-audit` on the live URLs
- [ ] Decide on cookieless analytics (e.g. Cloudflare Web Analytics). If yes, update the "Data not collected" line on the homepage

---

## Targets and expectations
| Query | Expectation |
|---|---|
| "Majid Alee", "Majid Ali React Native", "Majid Ali AI engineer" | Page one within weeks of indexing |
| "React Native app development Pakistan / Karachi", article topics | 3–6 months, if steps 3–6 happen |
| "react native developer" (generic) | Not a target: owned by Toptal, Coursera and job boards |

## Ground rules for future changes
- The homepage stays a single page for recruiters; client-search pages are separate.
- Every fact traces to `../claude-resume-kit`. No fabricated reviews, numbers or client names.
- When a fact or price changes, update the visible text, the JSON-LD, `llms.txt` and `sitemap.xml` together.
- Pricing: $25–40/hr, projects from $3,000.
