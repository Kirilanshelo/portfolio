// Personal projects shown on the website only (NOT included in the CV/PDF).
//
// For each project:
//   - title:       project name
//   - description: short descriptive paragraph
//   - image:       screenshot path relative to /public (e.g. 'projects/my-app.png').
//                  Drop the file in public/projects/ and reference it here.
//                  While an image is missing, a placeholder box is shown.
//   - link:        (optional) repo or live demo URL; renders a "View project" button
//
// Screenshots automatically alternate left/right between consecutive items,
// so the order here controls the on-page layout.
export const projects = [
  {
    title: 'Photo Gallery',
    description:
      'A photo gallery SPA built with Vue 3 + Vite, with optimized responsive images (AVIF/WebP via imagetools/sharp) and automatic deployment to GitHub Pages through GitHub Actions.',
    image: 'projects/photo-gallery.png',
    link: 'https://kirilanshelo.github.io/photo-gallery/',
  },
  {
    title: 'MTG Tournament Manager',
    description:
      'Web app (Vue 3 + TypeScript + Vite, Supabase backend) for managing Swiss-system tournaments: automatic pairings, result tracking and standings with tiebreakers implemented through a custom algorithm.',
    image: 'projects/mtg-tournament-manager.png',
    link: 'https://draft-portal.vercel.app/',
  },
  {
    title: 'Upland Property Sniper',
    description:
      'An Electron/React desktop app that monitors the Upland blockchain in real time, spots the best-value properties for sale based on custom filters, and automates the game window (audio alert + mouse positioning) for quick purchases.',
    image: 'projects/upland-property-sniper.png',
    link: '',
  },
  {
    title: 'Godot game',
    description:
      'Development of a 2D platformer with Godot Engine 4.4 and GDScript, featuring movement and combat mechanics, a level system, touch controls support and multi-platform export (Windows/Linux/Android).',
    image: 'projects/godot-game.jpg',
    link: '',
  },
]
