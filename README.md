# SunCart Premium Store

A modern, fully-featured eCommerce platform for summer products built with **Next.js**, **React**, and **Tailwind CSS**. Features secure authentication via Better Auth with Google OAuth support, dynamic product catalog, protected user profiles, and real-time cart management with toast notifications.

---

## 🌟 Features

### 🛍️ Shopping Experience
- **Dynamic Product Catalog** - Browse all summer products with filters and search
- **Product Details** - Comprehensive product information with images and specifications
- **Shopping Cart** - Add/remove items with persistent cart management
- **Add to Cart Functionality** - Quick purchase workflow from product pages

### 🔐 Authentication & User Management
- **Email/Password Authentication** - Secure account creation and login
- **Google OAuth Integration** - One-click social login via Google
- **Protected Routes** - Secure product details and profile pages with authentication middleware
- **User Profiles** - View and update personal information
- **Profile Update** - Edit user details with real-time validation

### 🎨 User Interface
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Hero Slider** - Animated product showcase on homepage
- **Brand Section** - Partner/brand showcase
- **Popular Products** - Curated product recommendations
- **Toast Notifications** - Real-time feedback for user actions (Animate.css)
- **DaisyUI Components** - Pre-built accessible UI components

### 📊 Data Management
- **Static JSON Products** - Efficient product data management
- **Better Auth with MongoDB** - Secure user session management with MongoDB
- **MongoDB Database** - Cloud-ready NoSQL database for user data and sessions

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js |
| **Frontend** | React , Tailwind CSS, DaisyUI |
| **Authentication** | Better Auth |
| **Database** | MongoDB, Better Auth Mongo Adapter |
| **Styling** | Tailwind CSS, PostCSS |
| **Icons** | Lucide React |
| **Notifications** | React Hot Toast, Animate.css |
| **Language** | JavaScript |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/                      # API routes & authentication endpoints
│   │   └── auth/
│   │       ├── [...all]/         # Better Auth catch-all route
│   │       └── simple/           # Simple authentication logic
│   ├── (auth)/                   # Auth-protected route group
│   │   ├── login/
│   │   ├── register/
│   │   └── my-profile/
│   │       └── page.jsx          # User profile & update page
│   ├── products/                 # Products listing
│   │   ├── page.jsx              # All products page
│   │   └── [id]/
│   │       └── page.jsx          # Individual product details
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Homepage
│   └── globals.css               # Global styles
├── components/
│   ├── NavBar.jsx                # Navigation header
│   ├── HeroSlider.jsx            # Homepage hero section
│   ├── Brands.jsx                # Brand showcase
│   ├── PopularProducts.jsx       # Featured products
│   ├── AllProducts.jsx           # Product listing component
│   ├── ProductCard.jsx           # Individual product card
│   ├── ProductDetailsClient.jsx  # Client-side product details
│   ├── ProductDetailsWrapper.jsx # Product details wrapper
│   ├── AddToCartBtn.jsx          # Add to cart button
│   ├── UserUpdate.jsx            # User profile update form
│   ├── Footer.jsx                # Footer component
│   └── Tips.jsx                  # Tips/information section
├── lib/
│   ├── auth.js                   # Better Auth configuration
│   ├── auth-client.js            # Client-side auth utilities
│   ├── simple-auth.js            # Custom auth logic
│   ├── middleware-logic.js       # Middleware & route protection
│   └── data.js                   # Product & data fetching utilities
└── proxy.js                      # Proxy configuration

public/
├── data.json                     # Product data
└── Product-images/               # Product images
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm/yarn
- MongoDB (local or MongoDB Atlas cloud)
- A Google OAuth application (for social login)


#### Option 2: MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster
4. Create a database user with credentials
5. Add your IP address to the IP Access List
6. Copy the connection string: `mongodb+srv://username:password@cluster.mongodb.net/suncart-store?retryWrites=true&w=majority`
7. Replace `username`, `password`, and `cluster` with your credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "SunCart Premium Store"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Add your MongoDB URI, Better Auth secret, and Google OAuth credentials

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:3000`


## 🔗 Key Pages

| Page | Route | Protection |
|------|-------|-----------|
| Home | `/` | Public |
| Products | `/products` | Public |
| Product Details | `/products/[id]` | Protected |
| Login | `/auth/login` | Public |
| Register | `/auth/register` | Public |
| My Profile | `/auth/my-profile` | Protected |

---

## 🎯 Core Functionalities

### Authentication Flow
- New users register with email/password or Google
- Existing users login with credentials
- Sessions managed via Better Auth
- Protected routes require valid authentication

### Product Management
- Products loaded from `public/data.json`
- Product images stored in `public/Product-images/`
- Dynamic product details on individual pages
- Add to cart functionality on product pages

### User Profiles
- View user information after login
- Update profile details
- Changes persisted to database

---

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 🌐 Deployment

### Recommended Platforms
- **Vercel** (Next.js native)
- **Netlify**
- **Railway**
- **Render**

### Pre-deployment Checklist
- [ ] Add production MongoDB connection URI in `.env`
- [ ] Configure MongoDB Atlas (if using cloud MongoDB)
- [ ] Update Google OAuth redirect URIs for production domain
- [ ] Build locally: `npm run build`
- [ ] Set all required environment variables in deployment platform:
  - `MONGODB_URI`
  - `BETTER_AUTH_SECRET`
  - `GOOGLE_CLIENT_ID`
  - `GOOGLE_CLIENT_SECRET`
  - `BETTER_AUTH_URL`

---

## 📄 License

This project is open source and available under the MIT License.


## 🔗 Links

- **GitHub Repository**: [https://github.com/afjalhossain31/Suncart-Premium-Store]
- **Live Demo**: [(https://suncart-premium-store-by-afjal.vercel.app/)]

