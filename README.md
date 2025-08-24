
# MSL Philippines Website

This is a scalable, multi-page website for the Moonton Student Leaders (MSL) Philippines program. It is built with vanilla JavaScript, modular components, and a simple client-side router for seamless navigation between pages.

## Project Structure

```
my-website/
├── public/
│   ├── index.html              # Main HTML document (homepage)
│   ├── buffs-support.html      # Buffs & Support program page
│   ├── assets/
│   │   └── styles.css          # Global CSS styles
│   ├── favicons/               # Favicon and manifest files
│   └── images/                 # All static images and pegs
├── src/
│   ├── main.js                 # Main JS entry, handles routing and page rendering
│   ├── tailwind.css            # Tailwind CSS source (if used)
│   ├── assets/
│   │   └── styles.css          # (Optional) Additional CSS
│   ├── components/             # Reusable UI components (Navbar, Footer, Hero, etc.)
│   ├── pages/                  # Individual page modules (BuffsSupport.js, etc.)
│   ├── hooks/                  # Custom hooks (e.g., useFaqAccordion.js)
│   └── utils/                  # Utility functions (empty by default)
├── package.json                # npm configuration file
├── postcss.config.js           # PostCSS config (if using Tailwind)
├── tailwind.config.js          # Tailwind config (if using Tailwind)
└── README.md                   # Project documentation
```

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd my-website
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the Application**
   If you use a dev server (like `live-server` or `vite`), start it. Or, simply open `public/index.html` or any HTML page directly in your browser.

## Usage & Adding Pages

- The homepage is rendered in `public/index.html` via `src/main.js`.
- Additional pages (like Buffs & Support) are in `public/` as separate HTML files, and their content is rendered by corresponding modules in `src/pages/`.
- To add a new page:
  1. Create a new HTML file in `public/` (e.g., `new-page.html`).
  2. Add a corresponding JS module in `src/pages/` (e.g., `NewPage.js`) that exports a function returning the page's HTML.
  3. Update the router logic in `src/main.js` to render the new page when its route is visited.
  4. Add navigation links in `src/components/Navbar.js` as needed.

## Development Tips

- Use the `components/` folder for all reusable UI parts.
- Use the `pages/` folder for full-page layouts and logic.
- Use absolute paths for all static assets (e.g., `/public/images/...`).
- Update navigation and router logic as you add more pages.
- Use Tailwind CSS for rapid styling (optional, but recommended).

## Deployment

You can deploy this site to any static hosting (GitHub Pages, Netlify, Vercel, etc.).

### GitHub Pages
1. Push your code to GitHub.
2. In repository settings, enable GitHub Pages and select the branch to publish from (usually `main`).
3. Your site will be available at `https://<username>.github.io/<repository-name>/`.

## Contributing

Pull requests and suggestions are welcome! Please open an issue or PR for improvements.

## License

MIT