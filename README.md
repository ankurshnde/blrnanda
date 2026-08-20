# Project NANDA — Bangalore Chapter

> **Network of AI Agents in Decentralized Architecture** &bull; **Bangalore Regional Node**
> Reference: [SF Bay Area Chapter](https://sfbayarea.projectnanda.org/) | Repository: [blrnanda](https://github.com/ankurshnde/blrnanda)

---

## 🌟 Overview

The Bangalore Chapter of **Project NANDA** serves as the regional hub for advancing decentralized AI-agent infrastructure across Bengaluru and India's broader tech ecosystem. We convene builders, researchers, and institutions to develop open standards, foster collaborative research, grow the agentic startup ecosystem, and accelerate real-world deployment.

---

## 🚀 Key Features

- **Hero & Branding**: Styled with `hero-bg.jfif` background and `NANDA Golden Transparent.svg` logo.
- **Chapter Metrics**: Highlights active community builders, startups, hackathons, and open architecture.
- **Chapter Leaders**: Configured with sleek placeholder silhouette avatars and temporary placeholder names, ready to be updated with real names and photos anytime.
- **Advisors & Speakers / Friends & Well Wishers**: Paginated grid highlighting ecosystem leaders, IISc researchers, and AI founders.
- **4 Value Pillars ("Why Join")**:
  1. Fully Open-Source Protocols
  2. Global Community & Bangalore Hub
  3. Innovation & Research Hub
  4. Startup & Agent Ecosystem
- **Bangalore Startups & Projects**: Filterable showcase of emerging agentic startups (Infrastructure, DevTools, Enterprise Agents, Multi-Agent Systems).
- **Meetups & Build Days**: Upcoming and past event timeline with Lu.ma integration and RSVP triggers.
- **Interactive Portal**: "Join Chapter", "Submit Project", and "Propose Talk" modals with instant confirmation.
- **Rich Footer & Socials**: WhatsApp group, LinkedIn community, Lu.ma calendar, GitHub repository, and Twitter/X.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite + TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism and gold gradient accents
- **Icons**: Lucide React + Custom SVG Brand Icons (`LinkedinIcon`, `GithubIcon`, `TwitterIcon`)
- **Assets**: Embedded SVG logos and background imagery

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```
Production assets will be output to the `/dist` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📝 Updating Chapter Leaders & Team Info

To update the placeholder leader names, real photos, bios, or LinkedIn URLs, edit [`src/data/chapterData.ts`](./src/data/chapterData.ts):

```typescript
export const CHAPTER_LEADERS: Person[] = [
  {
    id: "lead-1",
    name: "Real Name Here",
    role: "Chapter Lead",
    affiliation: "Affiliation / Company",
    imageUrl: "/path-to-photo.jpg", // Optional photo
    linkedIn: "https://linkedin.com/in/...",
    bio: "Bio description here...",
  },
  // ...
];
```

---

## 🌐 Official Links

- **WhatsApp Group**: [Join Bangalore WhatsApp Group](https://chat.whatsapp.com/F4FgELgoRqjFdX8XvDn9h2)
- **Events (Lu.ma)**: [lu.ma/nanda](https://lu.ma/nanda)
- **LinkedIn**: [Project NANDA on LinkedIn](https://www.linkedin.com/company/projectnanda/)
- **X (Twitter)**: [x.com/projnanda](https://x.com/projnanda)
- **Contact Email**: [ankur@agenticnet.org](mailto:ankur@agenticnet.org)
- **Main Website**: [projectnanda.org](https://projectnanda.org)
- **GitHub**: [github.com/projnanda](https://github.com/projnanda)
