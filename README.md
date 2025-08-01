# Lionize Digital Factory Website

A modern, responsive website for Lionize Digital Factory, a digital marketing, growth strategy, and AI solutions company. Built with React.js and Tailwind CSS.

## Features

- **Modern Design**: Bold, tech-forward design with dark theme and amber highlights
- **Responsive**: Mobile-first approach with full responsiveness across all devices
- **Animations**: Smooth scroll-based animations using Framer Motion
- **SEO Friendly**: Semantic HTML and optimized meta tags
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **Accessible**: WCAG compliant with proper contrast ratios and semantic markup

## Pages

- **Home**: Hero section, services overview, testimonials, and call-to-action
- **About Us**: Company information, founder details, timeline, and values
- **Services**: Detailed information about all services offered
- **Blog**: Blog listing and individual post pages
- **Contact**: Contact form with map and social links
- **AI Tools**: Showcase of AI tools and solutions with demo request form

## Tech Stack

- **Frontend Framework**: React.js with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: React Hook Form (integrated in ContactForm component)

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/lionize-digital-factory.git
   cd lionize-digital-factory
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Building for Production

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the `build` folder.

## Deployment

The website can be deployed to various platforms:

### Vercel (Recommended)

1. Create an account on [Vercel](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in the project directory and follow the prompts

### Netlify

1. Create an account on [Netlify](https://netlify.com)
2. Drag and drop the `build` folder to the Netlify dashboard

Alternatively, connect your GitHub repository for continuous deployment.

### GitHub Pages

1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update the `homepage` field in `package.json` to match your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/lionize-digital-factory"
   ```
   Replace `yourusername` with your actual GitHub username.

3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

5. Configure GitHub repository settings:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Ensure the source is set to the gh-pages branch

## Customization

### Changing Colors

The color scheme can be modified in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: '#FFC700',
      secondary: '#FFB800',
      dark: '#121212',
      darker: '#0A0A0A',
    },
  },
}
```

### Adding New Pages

1. Create a new component in the `src/pages` directory
2. Add a new route in `src/App.tsx`

```jsx
<Route path="/new-page" element={<NewPage />} />
```

3. Add a link to the new page in the Header component

## Contact Form Integration

The contact form is currently set up for demonstration purposes. To make it functional:

1. Set up a backend service (e.g., AWS Lambda, Express.js) to handle form submissions
2. Update the form submission logic in `src/components/ContactForm.tsx`
3. Add proper validation and error handling

Alternatively, you can use services like Formspree, Netlify Forms, or EmailJS for quick integration.

## SEO Optimization

For proper SEO:

1. Install React Helmet: `npm install react-helmet-async`
2. Create a SEO component with appropriate meta tags
3. Add the SEO component to each page with relevant title and description

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Unsplash](https://unsplash.com/) for the placeholder images