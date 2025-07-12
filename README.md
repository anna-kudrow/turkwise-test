# TurkWise Test

Modern React application built with Vite, TypeScript, and the latest React 19.

## 🚀 Technologies

- **React 19** - Latest React version with new features
- **TypeScript** - Static typing for code reliability
- **Vite** - Fast bundling and development
- **React Router DOM** - Client-side routing
- **Biome** - Modern linter and formatter

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd turkwise-test
```

2. Install dependencies:
```bash
npm install
```

## 🛠️ Development Commands

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:5173`

### Build
```bash
npm run build
```
Creates an optimized production build

### Preview
```bash
npm run preview
```
Local preview of the production build

### Linting and Formatting
```bash
npm run lint      # Check code quality
npm run format    # Format code
```

## 📁 Project Structure
```

turkwise-test/
├── public/           # Static files
├── src/
│   ├── components/   # React components
│   ├── pages/        # Application pages
│   ├── hooks/        # Custom hooks
│   ├── utils/        # Utilities
│   ├── types/        # TypeScript types
│   ├── App.tsx       # Main component
│   └── main.tsx      # Entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── biome.json
```

## 🎨 Icons

This project uses Font Awesome for icons. Font Awesome provides thousands of scalable vector icons that can be easily customized with CSS.


## 🔧 Configuration
```
```
### TypeScript
The project uses strict TypeScript configuration to ensure code quality.

### Biome
Used for linting and code formatting. Configuration is in `biome.json`.

### Vite
Bundler configuration in `vite.config.ts` with React and TypeScript support.

## 🚀 Deployment

After building (`npm run build`), deployment-ready files are in the `dist/` folder.

Can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 🤝 Development

1. Follow TypeScript principles
2. Use functional components with hooks
3. Run linter before committing
4. Write typed code

## 📄 License

This project is private.

## 🔗 Useful Links

- [React 19 Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Biome Documentation](https://biomejs.dev/)