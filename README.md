# Eternal Love - Aravindh X Sreesha

A beautiful, animated romantic tribute website.

## How to Deploy to GitHub

To make this website live on GitHub, follow these steps:

### Option 1: GitHub Pages (Automated)
1. Create a new repository on GitHub.
2. Push this entire folder to your repository.
3. Go to **Settings** > **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Use the provided workflow file (in `.github/workflows/deploy.yml`) to automatically build and host your site.

### Option 2: Manual Upload (The "Single Folder" way)
If you just want to upload the finished files:
1. Run `npm run build` in your local terminal.
2. This will create a `dist` folder.
3. Upload **only the contents** of the `dist` folder to a new GitHub repository.
4. Go to **Settings** > **Pages** and set the branch to `main` (or `master`) and the folder to `/ (root)`.
5. Your site will be live at `https://yourusername.github.io/your-repo-name/`.

## Local Development
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`
