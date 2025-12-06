# E-commerce Product Listing Platform

A modern, simple e-commerce landing page built with Next.js 16, TypeScript, and Redux for state management. Features advanced product filtering, sorting, and search capabilities.

## Features

- **Responsive Layout**: Fully responsive design with header, navbar, and footer
- **Product Filtering**: Advanced filtering system with:
  - Category-based filtering
  - Tag-based filtering
  - Price range selection
- **Product Sorting**: Multiple sorting options for product display
- **Search Functionality**: Real-time product search
- **Breadcrumb Navigation**: Easy navigation tracking
- **State Management**: Redux for efficient state handling
- **Type Safety**: Full TypeScript implementation

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **State Management**: Redux
- **Styling**: [Add your styling solution here - CSS Modules/Tailwind/Styled Components]

## Project Structure

``
├── components/
│   ├── Header/
│   ├── Navbar/
│   ├── Footer/
│   ├── Breadcrumb/
│   ├── ProductList/
│   ├── FilterAside/
│   └── SearchSort/
├── redux/
│   ├── store.ts
│   ├── slices/
│   │   └── productSlice.ts
├── pages/
│   └── index.tsx
└── types/
    └── product.ts
``

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to project directory
cd ecommerce-landing-page

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Layout Overview

### Header & Navigation

- Sticky header with navbar
- Responsive menu for mobile devices

### Main Content Area

- **Breadcrumb**: Shows current navigation path
- **Filter Sidebar** (Left):
  - Category filters
  - Tag filters
  - Price range slider
- **Product Display** (Right):
  - Sort dropdown
  - Search bar
  - Product grid/list view

### Footer

- Company information and links

## Redux Store

The application uses Redux for state management with the following slices:

- `products`: Manages product data, filters, and search
- [Add other slices if applicable]

## Key Features Implementation

### Filtering System

Products can be filtered by:

- **Categories**: Select single or multiple categories
- **Tags**: Filter by product tags
- **Price Range**: Set minimum and maximum price

### Sorting Options

- Price: Low to High
- Price: High to Low
- Newest First
- Best Selling
- [Add your sorting options]

### Search

Real-time search across product names and descriptions

## Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Future Enhancements

- [ ] Shopping cart functionality
- [ ] Product detail pages
- [ ] User authentication
- [ ] Wishlist feature
- [ ] Product reviews and ratings
- [ ] Pagination or infinite scroll
- [ ] Multi-language support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Add your license here]

## Author

[Your Name]

## Acknowledgments

- Built with Next.js
- State management powered by Redux
- TypeScript for type safety
