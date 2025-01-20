# E-Cart - Simple E-Commerce Cart Application

## Overview
E-Cart is a simple e-commerce cart application built with React. It allows users to browse a list of products, add them to a cart, modify cart contents, and view a total price. The app uses React’s state, props, and events to manage the cart and product interactions.

## Features
- Display a list of products with their names, prices, and an "Add to Cart" button.
- Add products to the cart, and update their quantities if they already exist in the cart.
- View a summary of the cart with all items, including their names, prices, quantities, and total price.
- Remove products from the cart or adjust their quantity.
- Responsive UI with product images and a cart icon.

## Demo
You can check out the live version of the application on my GitHub.

## Technologies Used
- React
- JavaScript (ES6+)
- HTML & CSS

## Setup

### Requirements
- Node.js (>= 14.0.0)
- npm (>= 6.0.0)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Kohmmz/E-Cart.git
   ```

2. Navigate to the project directory:
   ```bash
   cd E-Cart
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

   This will open the app in your browser at [http://localhost:3000](http://localhost:3000).

## File Structure

- **src/**
  - **components/**
    - `Cart.js` – Handles cart operations and displays cart items.
    - `Navbar.js` – Displays the navigation bar with the cart size.
    - `ProductsList.js` – Displays the list of products and handles adding products to the cart.
  - `App.js` – The main component that manages state and integrates other components.
  - `index.js` – Entry point for the application.

## Contributing
1. Fork this repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is open source and available under the [MIT License](LICENSE).

---

