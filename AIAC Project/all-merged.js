// ============================================================
// MERGED BACKEND BUNDLE — all Mongoose models + seed JSON data
// ============================================================

// ===================== models/DeliveryPerson.js =====================
const mongoose = require("mongoose");

const deliveryPersonSchema = new mongoose.Schema(
  {
    village: { type: String, required: true, trim: true, index: true },
    name: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true, collection: "deliverypersons" }
);

deliveryPersonSchema.index({ village: 1 }, { unique: true });

module.exports =
  mongoose.models.DeliveryPerson ||
  mongoose.model("DeliveryPerson", deliveryPersonSchema);

// ===================== models/MonthlyItem.js =====================
const mongoose = require("mongoose");

const monthlyItemSchema = new mongoose.Schema(
  {
    monthKey: { type: String, required: true, trim: true, index: true },
    itemKey: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    monthlyLimit: { type: Number, default: 0, min: 0 },
    isAvailable: { type: Boolean, default: true },
    image: { type: String, trim: true },
  },
  { timestamps: true, collection: "monthlyitems" }
);

monthlyItemSchema.index({ monthKey: 1, itemKey: 1 }, { unique: true });

module.exports =
  mongoose.models.MonthlyItem || mongoose.model("MonthlyItem", monthlyItemSchema);

// ===================== models/seller.js =====================
const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema(
  {
    shopId: { type: String, required: true, trim: true, unique: true },
    name: { type: String, required: true, trim: true },
    village: { type: String, trim: true },
    phone: { type: String, trim: true },
    password: { type: String, required: true, trim: true },
    openTime: { type: String, default: "09:00" },
    closeTime: { type: String, default: "16:00" },
    isClosed: { type: Boolean, default: false },
    leaveNote: { type: String, trim: true, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Seller || mongoose.model("Seller", sellerSchema);

// ===================== models/Shop.js =====================
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:String,
    village:String,
    stock:{
        Rice:Number,
        Wheat:Number,
        Sugar:Number,
        Kerosene:Number
    }
});

module.exports = mongoose.model("Shop", schema);
// ===================== models/Stock.js =====================
const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    shopId: { type: String, required: true, trim: true, unique: true },
    rice: { type: Number, default: 0, min: 0 },
    wheat: { type: Number, default: 0, min: 0 },
    sugar: { type: Number, default: 0, min: 0 },
    kerosene: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Stock || mongoose.model("Stock", stockSchema);

// ===================== models/Transaction.js =====================
const mongoose = require("mongoose");

const lineItemSchema = new mongoose.Schema(
  {
    itemKey: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    qty: { type: Number, required: true, min: 0 },
    price: { type: Number, required: true, min: 0 },
    amount: { type: Number, required: true, min: 0 },
  },
  { _id: false }
);

const transactionSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true, trim: true, unique: true },
    rationCard: { type: String, required: true, trim: true, index: true },
    userName: { type: String, trim: true },
    shopId: { type: String, required: true, trim: true, index: true },
    village: { type: String, trim: true },
    items: { type: [lineItemSchema], default: [] },
    total: { type: Number, required: true, min: 0 },
    rice: { type: Number, default: 0, min: 0 },
    wheat: { type: Number, default: 0, min: 0 },
    sugar: { type: Number, default: 0, min: 0 },
    kerosene: { type: Number, default: 0, min: 0 },
    monthKey: { type: String, trim: true, index: true },
    deliverySlot: { type: String, trim: true },
    paymentMethod: { type: String, trim: true },
    paymentStatus: { type: String, trim: true, default: "Paid Online" },
    paymentReference: { type: String, trim: true },
    deliveryPerson: {
      village: { type: String, trim: true },
      name: { type: String, trim: true },
      phone: { type: String, trim: true },
    },
    date: { type: Date, default: Date.now, index: true },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);

// ===================== models/user.js =====================
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    rationCard: { type: String, required: true, trim: true, unique: true },
    aadhaar: { type: String, trim: true },
    village: { type: String, trim: true },
    phone: { type: String, trim: true },
    password: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);

/* ===================== data/Seller_1.json ===================== */
[
{
"shopId":"S01",
"name":"Mahesh Kumar",
"village":"Kothapalli",
"phone":"9999991111",
"password":"seller123"
},
{
"shopId":"S02",
"name":"Ramesh Gupta",
"village":"Ramapuram",
"phone":"8888882222",
"password":"seller123"
},
{
"shopId":"S03",
"name":"Suresh Naidu",
"village":"Madhavaram",
"phone":"7777773333",
"password":"seller123"
}
]
/* ===================== data/stock_1.json ===================== */
[
  {
    "shopId": "S01",
    "rice": 500,
    "wheat": 300,
    "sugar": 100,
    "kerosene": 200
  },
  {
    "shopId": "S02",
    "rice": 598,
    "wheat": 249,
    "sugar": 150,
    "kerosene": 299
  },
  {
    "shopId": "S03",
    "rice": 700,
    "wheat": 400,
    "sugar": 200,
    "kerosene": 350
  }
]
/* ===================== data/user_1.json ===================== */
[
{
"name":"Ravi Kumar",
"rationCard":"RC101",
"aadhaar":"123456789012",
"village":"Kothapalli",
"phone":"9876543210",
"password":"1234"
},
{
"name":"Sita Devi",
"rationCard":"RC102",
"aadhaar":"987654321012",
"village":"Ramapuram",
"phone":"9123456780",
"password":"1234"
},
{
"name":"Arjun Reddy",
"rationCard":"RC103",
"aadhaar":"456789123012",
"village":"Madhavaram",
"phone":"9012345678",
"password":"1234"
},
{
"name":"Lakshmi Priya",
"rationCard":"RC104",
"aadhaar":"321654987012",
"village":"Kothapalli",
"phone":"9988776655",
"password":"1234"
},
{
"name":"Rahul Sharma",
"rationCard":"RC105",
"aadhaar":"789456123012",
"village":"Ramapuram",
"phone":"9871234560",
"password":"1234"
}
]
