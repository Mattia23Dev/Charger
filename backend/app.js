const express = require('express')
const app = express();
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
var path = require('path');
var cors = require('cors')

// To access public folder
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

// Set up Global configuration access
dotenv.config();

// MULTER
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    let uploadFile = file.originalname.split('.')
    //let name = `${uploadFile[0]}-${Date.now()}.${uploadFile[uploadFile.length-1]}`
    let name = `${uploadFile[0]}.${uploadFile[uploadFile.length-1]}`
    cb(null, name)
  }
})
const upload = multer({ storage: storage })

const { register, login, updateUser, deleteUser, userById, resetPassword, sendMailReset, verifyCode } = require("./controllers/auth/auth");
const { addProduct, updateProduct, deleteProduct, getAllProducts } = require("./controllers/products/products")
const { checkout } = require("./controllers/user/cart")
const { isAdmin, checkAuth } = require("./controllers/middlewares/auth");
const { dashboardData, getAllUsers } = require('./controllers/admin/dashboard');
const { getAllOrders, changeStatusOfOrder } = require('./controllers/admin/orders');
const { orders, createPayment, createPaymentAndSaveCard, confirmPayment, paymentSheet, savePaymentDetails, chargeCustomer } = require('./controllers/user/orders');
const { addCategory, getCategories, updateCategory, deleteCategory } = require('./controllers/categories/category');
const { addToWishlist, wishlist, removeFromWishlist } = require('./controllers/user/wishlist');
const {createTessera, getTessere, updateTessera, deleteTessera, createTesseraAdmuin} = require('./controllers/tessera/tessera');
const { addPartecipazione } = require('./controllers/user/partecipazioni');
const { sendPromoCode } = require('./controllers/promo/promocode');
const mongoose = require("./config/database")()

app.get('/', (req, res) => {
  res.send('Servitori server!')
});


// AUTH
app.post('/register', register);
app.post("/login", login)


// User Routes
app.post("/update-user", updateUser)
app.get("/user", userById)
app.get("/delete-user", deleteUser)
app.post("/reset-password", resetPassword)
app.post("/send-email-reset", sendMailReset);
app.post("/verify-code", verifyCode);


// Products
app.post("/product", [isAdmin], addProduct)
app.get("/products", getAllProducts)
app.post("/update-product", [isAdmin], updateProduct)
app.get("/delete-product", [isAdmin], deleteProduct)


// CATEGORIES
app.post("/category", [isAdmin], addCategory)
app.get("/categories", getCategories)
app.post("/update-category", [isAdmin], updateCategory)
app.get("/delete-category", [isAdmin], deleteCategory)

app.post("/create-tessera", createTessera);
app.post("/create-tessera-admin", createTesseraAdmuin);
app.get("/get-tessere", getTessere);
app.post("/update-tessera", [isAdmin], updateTessera)
app.get("/delete-tessera", [isAdmin], deleteTessera)

// ORDERS
app.get("/orders",[checkAuth],orders)
app.post("/create-payment", createPayment)
app.post("/confirm-payment", confirmPayment)
app.post("/create-payment-save-card", createPaymentAndSaveCard)

app.post('/payment-sheet', paymentSheet)
app.post('/save-payment-details', savePaymentDetails);
app.post('/charge-customer', chargeCustomer);

// CHECKOUT
app.post("/checkout",[checkAuth],checkout)

// WISHLIST
app.post("/add-to-wishlist",[checkAuth],addToWishlist)
app.get("/wishlist",[checkAuth],wishlist)
app.get("/remove-from-wishlist",[checkAuth],removeFromWishlist)

// ADMIN
app.get("/dashboard",[isAdmin],dashboardData)
app.get("/admin/orders",[isAdmin],getAllOrders)
app.get("/admin/order-status",[isAdmin],changeStatusOfOrder)
app.get("/admin/users",[isAdmin],getAllUsers)

//SHARE CODE
app.post("/send-promocode", sendPromoCode);

// PARTECIPAZIONE 
app.post("/add-part", addPartecipazione)

// HELPER
app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {  
  console.log(req.files);

  try{
    let files = req.files;
    if(!files.length){
      return res.status(400).json({ err:'Per favore inserisci un\'immagine', msg:'Inserisci un\'immagine' })
    }
    let file = req.files[0]
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        return res.json({"image" : file.filename}) 
    }
  }
  catch(error){
    return res.send(error.message)
  }
})

app.listen((process.env.PORT || 8080), () => {
  console.log(`Charger in ascolto su ${process.env.PORT}!`)
});