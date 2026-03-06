Frontend React start:
npm run dev

Backend Node Start:
node server.js


Traget:
Backend

Node.js
Express
MongoDB
Redis
JWT Auth


Frontend

React
Redux / Zustand
Tailwind




DevOps

Docker
CI/CD
AWS / GCP


quickdeal-backend
│
├── src
│   │
│   ├── config
│   │      db.js
│   │      env.js
│   │
│   ├── controllers
│   │      productController.js
│   │      userController.js
│   │      orderController.js
│   │
│   ├── services
│   │      productService.js
│   │      userService.js
│   │
│   ├── models
│   │      productModel.js
│   │      userModel.js
│   │
│   ├── routes
│   │      productRoutes.js
│   │      userRoutes.js
│   │
│   ├── middlewares
│   │      authMiddleware.js
│   │      errorMiddleware.js
│   │
│   ├── utils
│   │      logger.js
│   │      responseHandler.js
│   │
│   ├── constants
│   │      statusCodes.js
│   │
│   └── app.js
│
├── server.js
├── package.json
└── .env