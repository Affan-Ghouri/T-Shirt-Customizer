# T-Shirt Customizer

A modern 3D T-Shirt customization tool built with React, Three.js, and Framer Motion. Design your own custom t-shirt with colors and decals in real-time 3D.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI Framework |
| Vite | 5.4.8 | Build Tool |
| Three.js | 0.169.0 | 3D Rendering |
| @react-three/fiber | 8.17.10 | React Three.js bindings |
| @react-three/drei | 9.114.6 | Three.js helpers |
| Framer Motion | 11.11.9 | Animations |
| Valtio | 2.1.0 | State Management |
| Tailwind CSS | 3.4.14 | Styling |

## Features

- **Real-time 3D Preview** - Interactive 3D t-shirt model
- **Color Picker** - Change shirt color instantly
- **Custom Decals** - Upload your own logo/design
- **Logo vs Full Design** - Choose placement options
- **Smooth Animations** - Framer Motion transitions
- **Responsive Design** - Works on desktop and mobile

## Project Structure

```
T-Shirt-Customizer/
├── .github/workflows/     # GitHub Actions
├── client/                 # Frontend
│   ├── src/
│   │   ├── canvas/        # Three.js components
│   │   ├── components/    # UI components
│   │   ├── config/        # Constants & helpers
│   │   ├── pages/        # Home & Customizer pages
│   │   ├── store/        # Valtio state
│   │   └── assets/       # Images & icons
│   └── public/           # Static assets (3D model)
└── server/               # Backend (disabled)
```

## Installation

```bash
# Clone the repository
git clone https://github.com/Affan-Ghouri/T-Shirt-Customizer.git
cd T-Shirt-Customizer/client

# Install dependencies
npm install

# Start development server
npm run dev
```

## Build

```bash
npm run build
```

The build output will be in the `dist` folder.

## Deployment

This project is configured with GitHub Actions for automatic deployment to GitHub Pages.

1. Push to `main` branch
2. Go to Repo → Settings → Pages
3. Select **GitHub Actions** as source
4. Wait for deployment to complete

Your site will be live at: `https://affan-ghouri.github.io/T-Shirt-Customizer/`

## Usage

1. Click **"Customize It"** to enter customization mode
2. Use the **Color Picker** to change shirt color
3. Use **File Picker** to upload your own logo/design
4. Toggle between **Logo** or **Full Shirt** design
5. Click **Go Back** to return to home

## Disabled Features

- **AI Generation** - Requires backend server (disabled for GitHub Pages deployment)

## Performance Notes

- 3D model is loaded from `/public/shirt_baked.glb`
- Textures are lazy-loaded for better performance
- Build is optimized with minification

## License

MIT

---

Built with React, Three.js, and Framer Motion