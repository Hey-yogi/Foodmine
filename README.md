##ROADMAP
1. 
2. 
3. Create Angular app
    1. Create project's folder
    2. Install @angular/cli
    3. Create App as Frontend
4. Add header
    1. Generate Component
    2. Add html
    3. Add css
5. List Food
    1. Create Food model
    2. Create data.ts
        1. Add Sample Food
    3. Add images to assets
    4. Create Food Service
    5. Create Home component
        1. Add ts
        2. Add html
        3. Add css
6. Search
    1. Add method to food service
    2. Add search route 
    3. Show search result in Home Component
    4. Generate search component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css
7. Tags Bar
    1. Create Tag model
    2. Add sample tags to data.ts
    3. Food sevice
        1. Add get all tags method
        2. Add get all foods by tag method
    4. Add tags route
    5. Show result in Home component
    6. Generate Tags component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css
8. Food Page
    1. Add method to food service
    2. Generate Food page component
        1. Add Route
        2. Add ts
        3. Add html
        4. Add css
9. Cart Page
    1. Create CartItem Model
    2. Create Cart Model
    3. Generate Cart service
    4. Add to cart Button in Food Page
    5. Generate Cart page component
        1. Add Route
        2. Add ts
        3. Add html
        4. Add css
10. Not Found!
    1. Generate Component
        1. Add ts
        2. Add html
        3. Add css
    2. Add to Pages
        1. Home page
        2. Food Page
        3. Cart Page

<!-- --------------Backend---------------- -->

11. Connect To Backend
    1. Create backend folder
    2. npm init
    3. npm install typescript
    4. Create tsconfig.json
    5. Create .gitignore
    6. copy data.ts to backend/src
    7. npm install express cors
    8. Create server.ts
        1. install @types
        2. Add Apis
    9. npm install nademon ts-node --save-dev
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update food service
12. Login Page
    1. Generate Component
        1. Add to routes
        2. Add ts
        3. Add html
            1. Import Reactive Forms Module
        4. Add css
    2. Add Login Api
        1. Use json
        2. Add jsonwebtoken
        3. Test using Postman
13. Make Components For Login Page
    1. Input Container
    2. Input Validation
    3. Text Input
    4. Default Button
14. Connect Login Api to MongoDB Atlas
    1. Moving Apis into routers
    2. Create MOngoDB Atlas
    3. Create .env file
    4. Install
        1. mongoose
        2. dotenv
        3. bcryptjs
        4. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDB instead of data.ts in apis
15. Register User
    1. Add Register api
    2. Add Register Service method
    3. Add Register link
    4. Add Register Component
16. Loading!
    1. Add Image
    2. Add Component
    3. Add Service
    4. Add Interceptor
17. Checkout Page
    1. Create Order Model
    2. Create Checkout Page Component
        1. Add To Router
    3. Add User to User Service
    4. Add Cart to Cart Service
    5. Create Order Items List Component
    6. Adding Map To The Checkout Page
        1. Add Leaflet npm package
            1. Add @types/leaflet
            2. Add Css to angular.json
        2. Add AddressLatlng to Order Model
        3. Create Map Component
            1. Add to Checkout page
            2. Add TS
                1. Change app-map selector to map
            3. Add html
            4. Add CSS
        4. Add Auth Guard
    7. Save Order
        1. Add Order Model
        2. Add Order Status Enum
        3. Add Auth Middleware
        4. Add Order Router
            1. Add Create API
        5. Add Order Urls to Urls.ts
        6. Add Order Service
            1. Add Create Method
        7. Add Auth Interceptor 
18. Pyment Page
    1. Generate Component
    2. Add 'getOrderForCurrentUser' api
    3. Add Service method
    4. Connect Component to Service
    5. Make the map component readonly
19. Adding Paypal
    1. Generate Component
        1. Add to payment page
    2. Get Paypal client Id
    3. Add Paypal JS to index.html
    4. Set up Paypal button
    5. Add Pay api to order router
    6. Get Paypal sandbox account
20. Order Track Page
    1. Generate Component
        1. Add to Component
    2. Add API
        1. Add to urls.ts
    3. Add method to order.service
    4. Add HTML
    5. Add CSS
            


