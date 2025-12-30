# 🍔 QuickEats

A comprehensive food delivery and restaurant management platform built with the MERN stack. QuickEats enables vendors to manage their restaurants and products while providing customers with an intuitive interface to browse and order food.

## ✨ Features

### Vendor Management
- **🔐 Authentication**: Secure vendor registration and login with JWT tokens
- **🏪 Firm Management**: Create and manage multiple restaurant/firm profiles
- **📦 Product Management**: Add, update, and manage menu items/products
- **📸 Image Uploads**: Upload firm logos and product images
- **📊 Dashboard**: Comprehensive vendor dashboard for managing business

### Customer Features
- **🔍 Browse Restaurants**: Explore available food firms/restaurants
- **🍕 View Menus**: Browse products and menu items by firm
- **🏷️ Categories**: Filter by food categories (veg/non-veg)
- **🌍 Regional Cuisines**: Filter by cuisine types (South Indian, North Indian, Chinese, Bakery)
- **⭐ Best Sellers**: View featured and best-selling items
- **📱 Responsive Design**: Mobile-friendly interface

### Restaurant/Firm Features
- **📍 Location-based**: Area-based firm organization
- **🍽️ Multiple Categories**: Support for veg and non-veg categories
- **🌶️ Regional Types**: South Indian, North Indian, Chinese, Bakery
- **🎁 Offers**: Special offers and promotions
- **🖼️ Branding**: Custom firm images and logos

### Product Features
- **💰 Pricing**: Product pricing information
- **📝 Descriptions**: Detailed product descriptions
- **🏷️ Categories**: Veg/Non-veg classification
- **⭐ Best Seller Tags**: Mark popular items
- **🖼️ Product Images**: High-quality product photos

## 🛠️ Technologies Used

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **Multer**: File upload handling
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

### Frontend (Customer)
- **React 18**: UI library
- **Vite**: Build tool and dev server
- **React Router**: Client-side routing
- **React Icons**: Icon library
- **React Loader Spinner**: Loading indicators

### Dashboard (Vendor)
- **React 18**: UI library
- **Vite**: Build tool and dev server
- **React Router**: Client-side routing
- **React Loader Spinner**: Loading indicators

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v16.x or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify: `node --version`

2. **npm** (comes with Node.js) or **yarn**
   - Verify: `npm --version`

3. **MongoDB** (v5.x or higher)
   - Download from [mongodb.com](https://www.mongodb.com/try/download/community)
   - Or use MongoDB Atlas (cloud database)
   - Verify: `mongod --version`

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Afreen4115/QuickEats.git
cd QuickEats
```

### Step 2: Set Up Backend

```bash
cd QuickEats_backend
npm install
```

Create a `.env` file in `QuickEats_backend/`:

```env
PORT=4000
MONGO_URL=your_mongodb_connection_string
WhatIsMyName=your_jwt_secret_key
```

### Step 3: Set Up Frontend (Customer)

```bash
cd ../QuickEats_frontend
npm install
```

### Step 4: Set Up Dashboard (Vendor)

```bash
cd ../QuickEats_dashboard
npm install
```

## 📖 Usage Guide

### Starting the Application

#### 1. Start MongoDB

**Local MongoDB:**
```bash
# On Windows
mongod

# On macOS/Linux
sudo systemctl start mongod
# or
mongod
```

**MongoDB Atlas (Cloud):**
- Use your Atlas connection string in `.env`

#### 2. Start Backend Server

```bash
cd QuickEats_backend
npm start
# or for development with auto-reload
npm run dev
```

The backend will run on `http://localhost:4000`

#### 3. Start Frontend (Customer)

Open a new terminal:

```bash
cd QuickEats_frontend
npm run dev
```

The frontend will run on `http://localhost:5173` (or the port shown)

#### 4. Start Dashboard (Vendor)

Open another terminal:

```bash
cd QuickEats_dashboard
npm run dev
```

The dashboard will run on `http://localhost:5174` (or the port shown)

### Vendor Workflow

1. **Register/Login**:
   - Navigate to the dashboard
   - Register a new vendor account or login
   - Receive JWT token for authentication

2. **Create Firm**:
   - Click "Add Firm" in dashboard
   - Fill in firm details:
     - Firm name
     - Area/location
     - Categories (veg/non-veg)
     - Regional types
     - Special offers
     - Upload firm image
   - Save firm

3. **Add Products**:
   - Navigate to products section
   - Click "Add Product"
   - Fill in product details:
     - Product name
     - Price
     - Category (veg/non-veg)
     - Description
     - Best seller status
     - Upload product image
   - Link product to firm
   - Save product

4. **Manage Products**:
   - View all products
   - Edit product details
   - Update images
   - Manage inventory

### Customer Workflow

1. **Browse Firms**:
   - View available restaurants/firms
   - Filter by area/location
   - Filter by cuisine type
   - View firm details and offers

2. **View Products**:
   - Select a firm
   - Browse menu items
   - Filter by category (veg/non-veg)
   - View product details and prices

3. **Explore Collections**:
   - View featured items
   - Check best sellers
   - Browse by categories

## 📁 Project Structure

```
QuickEats/
├── QuickEats_backend/              # Node.js Backend
│   ├── Controllers/
│   │   ├── vendorController.js    # Vendor operations
│   │   ├── firmController.js       # Firm operations
│   │   └── productController.js   # Product operations
│   ├── Models/
│   │   ├── Vendor.js              # Vendor schema
│   │   ├── Firm.js                # Firm schema
│   │   └── Product.js             # Product schema
│   ├── Routes/
│   │   ├── vendorRoutes.js        # Vendor routes
│   │   ├── firmRoutes.js          # Firm routes
│   │   └── productRoutes.js       # Product routes
│   ├── Middlewares/
│   │   └── authMiddleware.js      # Authentication middleware
│   ├── uploads/                   # Uploaded images
│   ├── server.js                  # Express server
│   └── package.json
│
├── QuickEats_frontend/            # Customer Frontend
│   ├── src/
│   │   ├── frontend/
│   │   │   ├── Components/
│   │   │   │   ├── Chains.jsx
│   │   │   │   ├── FirmCollections.jsx
│   │   │   │   ├── ItemsDisplay.jsx
│   │   │   │   ├── ProductsMenu.jsx
│   │   │   │   └── TopBar.jsx
│   │   │   ├── pages/
│   │   │   │   └── LandingPage.jsx
│   │   │   ├── api.js             # API calls
│   │   │   └── data.js            # Static data
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── QuickEats_dashboard/           # Vendor Dashboard
│   ├── src/
│   │   ├── vendorDashboard/
│   │   │   ├── components/
│   │   │   │   ├── AllProducts.jsx
│   │   │   │   ├── forms/
│   │   │   │   │   ├── AddFirm.jsx
│   │   │   │   │   ├── AddProduct.jsx
│   │   │   │   │   ├── Login.jsx
│   │   │   │   │   └── Register.jsx
│   │   │   │   ├── NavBar.jsx
│   │   │   │   ├── SideBar.jsx
│   │   │   │   └── Welcome.jsx
│   │   │   ├── pages/
│   │   │   │   └── LandingPage.jsx
│   │   │   └── data/
│   │   │       └── apiPath.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

## 🏗️ Architecture

### Database Schema

#### Vendor Model
```javascript
{
  username: String (required),
  email: String (required, unique),
  password: String (hashed, required),
  firm: [ObjectId] (references to Firm)
}
```

#### Firm Model
```javascript
{
  firmName: String (required, unique),
  area: String (required),
  category: [String] (enum: 'veg', 'non-veg'),
  region: [String] (enum: 'south-indian', 'north-indian', 'chinese', 'bakery'),
  offer: String,
  image: String,
  vendor: [ObjectId] (references to Vendor),
  products: [ObjectId] (references to Product)
}
```

#### Product Model
```javascript
{
  productName: String (required),
  price: String (required),
  category: [String] (enum: 'veg', 'non-veg'),
  image: String,
  bestSeller: Boolean,
  description: String,
  firm: [ObjectId] (references to Firm)
}
```

### API Endpoints

#### Vendor Routes (`/vendor`)
- `POST /vendor/register` - Register new vendor
- `POST /vendor/login` - Vendor login
- `GET /vendor/all-vendors` - Get all vendors
- `GET /vendor/single-vendor/:id` - Get vendor by ID

#### Firm Routes (`/firm`)
- `POST /firm/add-firm` - Create new firm
- `GET /firm/all-firms` - Get all firms
- `GET /firm/single-firm/:id` - Get firm by ID
- `PUT /firm/update-firm/:id` - Update firm
- `DELETE /firm/delete-firm/:id` - Delete firm

#### Product Routes (`/product`)
- `POST /product/add-product` - Create new product
- `GET /product/all-products` - Get all products
- `GET /product/single-product/:id` - Get product by ID
- `PUT /product/update-product/:id` - Update product
- `DELETE /product/delete-product/:id` - Delete product

### Authentication Flow

1. **Registration**:
   - Vendor provides username, email, password
   - Password is hashed with bcrypt
   - Vendor record created in database

2. **Login**:
   - Vendor provides email and password
   - Password verified against hashed password
   - JWT token generated with vendor ID
   - Token returned to client

3. **Protected Routes**:
   - JWT token sent in request headers
   - Token verified by middleware
   - Vendor ID extracted from token
   - Access granted/denied based on token validity

## 🔧 Configuration

### Environment Variables

**Backend (.env)**:
```env
PORT=4000
MONGO_URL=mongodb://localhost:27017/quickeats
# or for MongoDB Atlas:
# MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/quickeats
WhatIsMyName=your_secret_jwt_key_here
```

### API Base URLs

**Frontend API Configuration**:
Update API base URL in `QuickEats_frontend/src/frontend/api.js`:
```javascript
const API_BASE_URL = 'http://localhost:4000';
```

**Dashboard API Configuration**:
Update API base URL in `QuickEats_dashboard/src/vendorDashboard/data/apiPath.js`:
```javascript
const API_BASE_URL = 'http://localhost:4000';
```

### Image Upload Configuration

Images are stored in `QuickEats_backend/uploads/` directory. Ensure:
- Directory exists and is writable
- Multer is configured for file uploads
- Image serving is enabled: `app.use('/uploads', express.static('uploads'))`

## 🧪 Testing

### Manual Testing

1. **Vendor Registration**:
   - Test registration with valid data
   - Test duplicate email handling
   - Verify password hashing

2. **Vendor Login**:
   - Test login with correct credentials
   - Test login with incorrect credentials
   - Verify JWT token generation

3. **Firm Management**:
   - Create firm with all fields
   - Test image upload
   - Verify firm appears in listings

4. **Product Management**:
   - Add product to firm
   - Test image upload
   - Verify product appears in menu

5. **Frontend Display**:
   - Verify firms display correctly
   - Test product filtering
   - Check image loading

## 🐛 Troubleshooting

### Common Issues

#### 1. MongoDB Connection Error
**Error**: `MongoDB connection failed`

**Solutions**:
- Verify MongoDB is running: `mongod` or check service status
- Check connection string in `.env`
- Verify network access for MongoDB Atlas
- Check firewall settings

#### 2. Port Already in Use
**Error**: `Port 4000 is already in use`

**Solutions**:
- Change PORT in `.env`
- Kill process using port:
  ```bash
  # Find process
  lsof -i :4000
  # Kill process
  kill -9 <PID>
  ```

#### 3. Image Upload Not Working
**Error**: Images not uploading or not displaying

**Solutions**:
- Verify `uploads/` directory exists
- Check directory permissions
- Verify Multer configuration
- Check file size limits
- Ensure static file serving is enabled

#### 4. CORS Errors
**Error**: `Access to XMLHttpRequest blocked by CORS policy`

**Solutions**:
- Verify CORS is enabled in backend: `app.use(cors())`
- Check API URLs in frontend match backend
- Verify backend server is running

#### 5. JWT Token Errors
**Error**: `Invalid token` or `Token expired`

**Solutions**:
- Check JWT secret key matches in `.env`
- Verify token is sent in request headers
- Check token expiration time
- Re-login to get new token

#### 6. Module Not Found
**Error**: `Cannot find module`

**Solutions**:
- Run `npm install` in each directory
- Check `package.json` dependencies
- Verify Node.js version compatibility
- Clear `node_modules` and reinstall

## 🔒 Security Considerations

### Current Security Features
- Password hashing with bcrypt
- JWT token authentication
- Environment variables for sensitive data
- CORS configuration


## 🚧 Future Enhancements

Potential improvements for the project:

- [ ] Customer authentication and profiles
- [ ] Order management system
- [ ] Shopping cart functionality
- [ ] Payment integration
- [ ] Real-time order tracking
- [ ] Customer reviews and ratings
- [ ] Search functionality
- [ ] Advanced filtering (price, rating, etc.)
- [ ] Email notifications
- [ ] SMS notifications
- [ ] Admin dashboard
- [ ] Analytics and reporting
- [ ] Inventory management
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Mobile app (React Native)
- [ ] Push notifications
- [ ] Loyalty program
- [ ] Discount codes and coupons
- [ ] Delivery tracking
- [ ] -Implement rate limiting
- [ ] Add input validation and sanitization
- [ ] Implement HTTPS in production
- [ ] Add request size limits
- [ ] Implement file type validation for uploads
- [ ] Add SQL injection protection (if using SQL)
- [ ] Implement refresh tokens
- [ ] Add logging and monitoring
- [ ] Implement role-based access control
- [ ] Add API rate limiting per vendor

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Available Scripts

### Backend
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
```

### Frontend & Dashboard
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```


## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) for the backend framework
- [React](https://react.dev/) for the UI library
- [MongoDB](https://www.mongodb.com/) for the database
- [Vite](https://vitejs.dev/) for the build tool
- Contributors and users of this project

## 📞 Support

For support, create an issue in the repository or contact the maintainer.

## 🔗 Useful Links

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT Documentation](https://jwt.io/)
- [Vite Documentation](https://vitejs.dev/)

---

**Enjoy QuickEats! 🍔✨**

