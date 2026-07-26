# majid-portfolio

Personal branding / portfolio site for **Majid Ali** — backend, cloud infrastructure and
AI/LLM tooling engineer.

Static HTML, CSS and vanilla JS. No build step, no framework, no dependencies, no tracking.
Open `index.html` in a browser or serve the folder.

```bash
python3 -m http.server 4321   # → http://localhost:4321
```

---

## Structure

```
index.html                     Home — hero, stats, capabilities, 88% proof,
                               selected work, working stack, trajectory, contact
about.html                     Narrative, experience timeline, track record ledger,
                               education, stack pointer
stack.html                     Full technical stack with depth markers + opinions
contact.html                   Contact routes
work/index.html                All 14 projects, filterable by domain
work/mcp-server.html           Case study — MCP database tool surface
work/leafgistics-wms.html      Case study — event-driven WMS on AWS
work/azure-cost-redesign.html  Case study — ~88% Azure cost reduction
work/myaigi-agents.html        Case study — 7-agent LangGraph platform
css/tokens.css                 Design system: colour, type scale, spacing, reset
css/main.css                   Layout + components
js/main.js                     Nav, scroll reveals, count-up stats, work filter
assets/Majid_Ali_Resume.pdf    Résumé, linked from every page
```

---

## Design system

The visual language is derived from the **Marke** Webflow template
(`../claude-resume-kit/design_reference/marke-agency-webflow/`), retuned for an
engineering register. The reference's published style guide values are used verbatim:

**Palette** — `#F5FE90` signal yellow · `#081122` ink · `#FBFAF9` warm paper ·
`#6B707A` muted, plus four semantic domain colours (cloud `#B0E0FF`, AI `#DAD6FF`,
mobile `#BCFFB0`, data `#F5FE90`) used to *label* rather than decorate.

**Type** — Schibsted Grotesk for everything typographic (72/56/42/32/24/20/16 scale at
−2% tracking, straight off the reference style guide) plus IBM Plex Mono for all
metadata, section indices, stack entries and schematics.

**What was deliberately changed from the reference:**

| Reference (agency) | Here (engineering) |
|---|---|
| Stock lifestyle photography | Terminal card, blueprint grids, CSS architecture schematics |
| Pastel chip eyebrows | Monospace section index + rule |
| Decorative line-art data visual | Real bar chart of the $12,000 → $1,500 cost change |
| Vanity metrics | Metrics with the employer, date and role attached |
| Invented testimonials | Removed entirely — nothing fabricated |
| Pricing tiers | Dropped; replaced with a stack page |

---

## Content rules

Every claim on this site is traceable to `../claude-resume-kit/resume_builder/experience/`
and obeys the provenance flags in `../claude-resume-kit/config.md`:

- Team deliveries say "contributed to" / "shipped", never "built" or "led".
- Work architected by Majid but implemented by others says exactly that.
- The Gold Minds client is described ("a US charter school network"), never named.
- The PSX MCP server is a **contribution** to an existing project, never authorship.
- Third-party company scale figures (client funding, transaction volume) are omitted —
  they are not evidence of anything Majid did.
- No lines-of-code or test counts anywhere.
- The Sehat Kahani platform is described as handling "protected patient data", never as
  HIPAA-compliant — it operates under Pakistani regulation.

If a claim wouldn't survive a follow-up question in an interview, it isn't on the page.

---

## Deploying

The site is fully static, so any host works.

**GitHub Pages** (matches `majidalee1.github.io` in `config.md`):

```bash
git init && git add . && git commit -m "portfolio site"
git remote add origin git@github.com:Majidalee1/majidalee1.github.io.git
git push -u origin main
```

**Netlify / Vercel / Cloudflare Pages** — drag the folder in, or point at the repo with
no build command and the repo root as the publish directory.

Fonts load from Google Fonts; everything else is local.

---

## Maintenance

- Adding a project: copy a `<article class="prow">` block in `work/index.html` and set
  `data-domain` to one or more of `cloud backend ai mobile` so the filter picks it up.
- Adding a case study: copy any file in `work/`; the `.schema` component in the sidebar
  builds diagrams from `.snode` rows and `.schema__branch` groups — no images needed.
- Adding a track-record row: `about.html`, `.record` section. Every row needs a context
  line *and* a role line; a number without them doesn't go on the page.
