

# micrurus :snake:

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

The source code for serpentesdodf website built with NextJS

## Prerequisites 📋

- Node.js 20.x or higher
- npm 10.x or higher
- Git

## Running the Project ▶️

1. Install dependencies:
```bash
npm install
```

2. Development Server: 
```bash
npm run dev
```
Starts the development server with hot-reloading. Open http://localhost:3000 to view in browser.

3. Production Build
```bash
npm run build
```
Creates an optimized production build of your application.

4. Production Server
```bash
npm start
```
Starts the production server (must run npm run build first).

## Executing Linter:
```bash
npm run lint
```

### Contributing 🤝

1. Fork the project
2. Create your branch (git checkout -b feature/new-feature)
3. Commit changes (git commit -m 'Add new feature')
4. Push to the branch (git push origin feature/new-feature)
5. Open a Pull Request

### Project Structure

```
├── public/
├── src/
│   ├── app/
│   │   ├── team/
│   │   |   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── features/
│   │   ├── layout/
│   │   │   ├── Footer/
│   │   │   │   ├── footer.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Header/
|   |   |   |   ├── Header.tsx
|   |   |   |   └── index.ts
│   │   │   └── Sidebar/
|   |   |   |   ├── Header.tsx
|   |   |   |   └── index.ts
│   │   └── ui/
│   │       ├── Button/
│   │       └── Card/
│   │           ├── Button.tsx
│   │           └── index.ts
│   ├── lib/
│   ├──styles/
│   │  ├── themes/
│   │  ├── globals.css
│   │  ├── page.module.css
│   │  └── variables.css
│   └── utils/
```

## Directory Structure Overview

### Main Directories
- `public/` - Static assets
- `src/` - Source code

### Source Structure
- `app/` - Next.js App Router pages
  - `team/` - Team page components
- `components/` - Reusable components
  - `features/` - Feature-specific components
  - `layout/` - Layout components (Footer, Header, Sidebar)
  - `ui/` - UI components (Button, Card)
- `lib/` - Library code
- `styles/` - Styling files
- `utils/` - Utility functions
