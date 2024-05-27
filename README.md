# e-commerce-api-using-next.js

This is a Next.js project that displays a list of products, allows users to add items to a cart, and calculates the total amount of items in the cart. The product and cart data are stored in MongoDB. The prices are calculated based on the price stored in database so no user can manipulate the price from frontend.

## Features

- Display a list of products fetched from MongoDB.
- Add products to the cart.
- Display items in the cart.
- Calculate and display the total amount of items in the cart.

### Prerequisites

- Node.js
- MongoDB

 ```bash

├── middleware/
│   └── mongodb.js
├── models/
│   ├── Products.js
│   └── Cart.js
├── pages/
│   ├── api/
│   │   ├── cart.js
│   │   └── products.js
│   └── ecomm.js
├── public/
│   └── (public assets like images, etc. if any)
├── styles/
│   └── (CSS files if any)
├── .env.local
├── package.json
├── README.md
└── next.config.js

