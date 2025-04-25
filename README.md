# Portfolio React TypeScript

This project is built with **Vite**, **React**, and **TypeScript**, optimized for fast development and deployment via **GitHub Pages**.

## 🔧 Tech Stack

- ⚛️ React 19
- ⚡ Vite
- 💅 SCSS, Bootstrap, Styled Components
- 🎠 React Slick, Animate.css
- 📝 React Hook Form + Yup
- 🚀 Deployed via GitHub Actions to GitHub Pages

---

## 📦 Available Scripts

In the project directory, you can run:

### `yarn install`

### `yarn dev`

Starts the development server with hot reloading.  
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `yarn build`

Builds the app for production to the `dist` folder.  
Automatically uses the correct `base` from `.env.production`.

### `yarn preview`

Serves the production build locally at [http://localhost:4173](http://localhost:4173).

### `yarn deploy`

Builds and deploys the app to the `gh-pages` branch on GitHub.

---

## 🌐 Environment Variables

Environment settings are controlled using `.env` files:

| File   | Purpose            | Key Example                                              |
| ------ | ------------------ | -------------------------------------------------------- |
| `.env` | Development        | `VITE_APP_BASE=/`                                        |
|        | Production build   | `VITE_APP_BASE=/Portfolio-ReactTypeScript`               |
|        | Repository secrets | `VITE_GOOGLE_SHEET_POST_ID=your_local_post_sheet_id`     |
|        | Repository secrets | `VITE_GOOGLE_SHEET_POST_API_KEY=your_local_post_api_key` |

You can switch to a single `.env` and use logic if preferred.

---

## 🚀 Deployment (CI/CD)

Deployment is fully automated via GitHub Actions. On every push to `master`, your app is:

1. Built using Vite
2. Deployed to GitHub Pages (`gh-pages` branch)
3. Available at:  
   [https://phamday997.github.io/Portfolio-ReactTypeScript](https://phamday997.github.io/Portfolio-ReactTypeScript)

---

## 📚 Learn More

- [Vite Docs](https://vitejs.dev/guide/)
- [React Docs](https://react.dev/)
- [GitHub Pages Deployment](https://vitejs.dev/guide/static-deploy.html#github-pages)
