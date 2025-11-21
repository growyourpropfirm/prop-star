# Propstar.ai Landing Page

A modern, responsive landing page for Propstar.ai built with Next.js 14+, TypeScript, and Tailwind CSS. This project was converted from a Figma design into a fully functional Next.js application.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/iobaidu5/prop-star.git
cd prop-star
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
prop-star/
├── app/                    # Next.js 14 App Router directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page (landing page)
│   └── globals.css        # Global styles and Tailwind imports
├── components/            # React components
│   ├── Header.tsx         # Navigation header with mobile menu
│   ├── Hero.tsx           # Hero section with main CTA
│   ├── Features.tsx       # Features/benefits section
│   ├── Testimonials.tsx   # Customer testimonials section
│   ├── CTA.tsx            # Call-to-action section
│   └── Footer.tsx         # Footer with links and social media
├── types/                 # TypeScript type definitions
│   └── index.ts           # Shared type interfaces
├── public/                # Static assets (images, icons, etc.)
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── postcss.config.js      # PostCSS configuration for Tailwind
```

## 🛠️ Available Scripts

- `npm run dev` - Start the development server on [http://localhost:3000](http://localhost:3000)
- `npm run build` - Create an optimized production build
- `npm start` - Start the production server (run `npm run build` first)
- `npm run lint` - Run ESLint to check for code issues

## 🎨 Customization Guide

### Adding Custom Colors from Figma

1. Open your Figma design and identify all color values
2. Edit `tailwind.config.ts` and add them to the `theme.extend.colors` object:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#0066FF',      // Your primary brand color
      secondary: '#00CC88',    // Your secondary color
      accent: '#FF6B6B',       // Accent colors
      // Add more as needed
    },
  },
}
```

3. Use these colors in your components with Tailwind classes like `bg-primary`, `text-secondary`, etc.

### Updating Typography

1. If using custom fonts, add them to `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

2. Update font sizes and weights in components using Tailwind classes:
   - `text-sm`, `text-base`, `text-lg`, `text-xl`, etc.
   - `font-light`, `font-normal`, `font-semibold`, `font-bold`

### Updating Content

- **Hero Section**: Edit `components/Hero.tsx` - update heading, subheading, and CTA text
- **Features**: Edit the `features` array in `components/Features.tsx`
- **Testimonials**: Edit the `testimonials` array in `components/Testimonials.tsx`
- **Navigation**: Update links in `components/Header.tsx`
- **Footer**: Update links and content in `components/Footer.tsx`

### Adding Images and Assets

1. Export images from Figma (PNG, SVG, or WebP format)
2. Place them in the `public/` directory
3. Reference them in components:

```typescript
import Image from 'next/image'

<Image 
  src="/your-image.png" 
  alt="Description" 
  width={800} 
  height={600}
/>
```

### Matching Figma Design Exactly

1. **Spacing**: Compare padding and margins in Figma with Tailwind classes
   - Use Tailwind spacing scale: `p-4`, `m-8`, `gap-6`, etc.
   
2. **Layout**: Match flexbox/grid layouts from Figma
   - Use `flex`, `grid`, `grid-cols-3`, etc.

3. **Responsive Breakpoints**: Adjust breakpoints as needed
   - `sm:`, `md:`, `lg:`, `xl:`, `2xl:` prefixes

4. **Shadows and Effects**: Add shadows, borders, and effects
   - `shadow-sm`, `shadow-lg`, `rounded-lg`, `ring-1`, etc.

## 🎯 Features

- ✅ **Next.js 14+ App Router** - Modern React framework with server components
- ✅ **TypeScript** - Full type safety throughout the application
- ✅ **Tailwind CSS** - Utility-first CSS framework for rapid styling
- ✅ **Responsive Design** - Mobile-first approach with breakpoints
- ✅ **Accessibility** - Semantic HTML and ARIA attributes
- ✅ **Performance** - Optimized images and code splitting
- ✅ **SEO Ready** - Metadata and semantic structure

## 📦 Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [PostCSS](https://postcss.org/) - CSS processing

## 🔧 Development

### Code Style

- Components are written in TypeScript with proper typing
- Use functional components with hooks
- Follow React best practices
- Use Tailwind utility classes for styling

### Component Structure

Each component follows this structure:
1. Imports
2. Type definitions (if needed)
3. Data/constants
4. Component function
5. Export

## 📝 Notes

- The project structure follows Next.js 14+ conventions
- All components are client-side by default (use `'use client'` when needed)
- Images should be optimized using Next.js Image component
- The design is responsive and works on all screen sizes

## 🐛 Troubleshooting

### Figma Access Issues

If you need to access the original Figma design:
1. Ensure you have proper permissions to view the file
2. Check that your Figma account has access to the team/workspace
3. Verify the file URL: https://www.figma.com/design/hYJsUuTg6DEUSSK8POEoFi/Landing-Page-Propstar.ai

### Build Issues

- Ensure all dependencies are installed: `npm install`
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`
- Check Node.js version: `node --version` (should be 18+)

### Styling Issues

- Verify Tailwind is properly configured in `tailwind.config.ts`
- Check that `globals.css` imports Tailwind directives
- Ensure PostCSS is configured correctly

## 📄 License

ISC

## 🤝 Contributing

This is a private project. For issues or questions, please contact the repository owner.

---

Built with ❤️ for Propstar.ai
