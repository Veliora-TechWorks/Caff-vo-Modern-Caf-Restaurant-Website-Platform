# Caffévo – Modern Café Digital Platform

A clean, professional, and fast café & restaurant website platform built with Next.js. Designed to help cafés and restaurants increase customer visits and direct orders through a simple, reliable, and user-friendly interface.

## Features

- **Homepage** - Hero section with clear CTAs for ordering and reservations
- **Menu Page** - Category-wise menu with veg/non-veg indicators
- **Online Ordering** - Add to cart functionality with WhatsApp order integration
- **Table Reservation** - Simple booking form with WhatsApp confirmation
- **Offers Page** - Display current promotions and special deals
- **Contact Page** - Location map, contact info, and opening hours
- **Responsive Design** - Mobile-first approach for all devices

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (minimal usage)
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Playfair Display + Inter)
- **Images:** Next/Image with optimization
- **Data:** Static JSON (CMS-ready)

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage
│   ├── menu/               # Menu page
│   ├── order/              # Online ordering page
│   ├── reserve/            # Table reservation page
│   ├── offers/             # Offers page
│   └── contact/            # Contact page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Homepage hero section
│   ├── Features.tsx        # Features section
│   ├── MenuPreview.tsx     # Menu preview on homepage
│   ├── Testimonials.tsx    # Customer reviews
│   └── CTA.tsx             # Call-to-action section
├── lib/
│   └── data/
│       ├── menu.json       # Menu items data
│       ├── offers.json     # Offers data
│       └── testimonials.json # Customer testimonials
└── public/                 # Static assets

```

## Customization

### Update Contact Information

Edit the following files:
- `components/Footer.tsx` - Phone, email, address
- `app/contact/page.tsx` - Contact details and map
- `app/order/page.tsx` - WhatsApp number for orders
- `app/reserve/page.tsx` - WhatsApp number for reservations

### Update Menu

Edit `lib/data/menu.json` to add/modify menu items and categories.

### Update Offers

Edit `lib/data/offers.json` to manage promotional offers.

### Update Testimonials

Edit `lib/data/testimonials.json` to add customer reviews.

### Color Palette

Modify colors in `tailwind.config.js`:
- `primary` - Dark brown/coffee tone
- `secondary` - Medium brown
- `accent` - Warm gold/orange
- `cream` - Light background
- `dark` - Text color

## Performance

- Optimized images with Next/Image
- Minimal animations for fast load times
- Mobile-first responsive design
- SEO-friendly meta tags
- Target: Lighthouse score 90+

## WhatsApp Integration

Orders and reservations are sent via WhatsApp. Update the phone number in:
- `app/order/page.tsx` (line with `wa.me/`)
- `app/reserve/page.tsx` (line with `wa.me/`)

Format: `15551234567` (country code + number, no spaces or symbols)

## Future Enhancements

- Backend integration for order management
- Payment gateway integration
- Admin dashboard for menu management
- Customer accounts and order history
- Email notifications
- Multi-language support

## License

This project is private and proprietary.

## Support

For questions or support, contact: hello@caffevo.com
