const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// const { TOKEN_KEY } = process.env

const userSchema = mongoose.Schema({
    name : String,
    surname: String,
    email : {type : String, required : true, unique : true},
    phone: String,
    userType : String,
    password : String,
    token : String,
    via: String,
    comune: String,
    cap: String,
    pIva: String,
    cf: String,
    sdi: String,
    noleggi: {type: Number, default: 0},
    minuti: {type: Number, default: 0},
    inviti: {type: Number, default: 0},
    shareCode: {type: String, unique: true},
    cards: [
        {
            cardNumber: String,
            expirationDate: String,
            cvv: String,
            cardHolder: String,
        }
    ],
    friendCode : [String],
},{timestamps: true})


// userSchema.methods.generateAuthToken = function () {
//     this.token = jwt.sign({ userID: this._id, email: this.email }, TOKEN_KEY, { expiresIn: '10h' })
// }

module.exports = mongoose.model('User',userSchema)