const User = require("../../models/user");
const nodemailer = require('nodemailer');

exports.sendPromoCode = async (req, res) => {
    try {
      const promoCode = req.body.promoCode;
      const id = req.body.id;
  
      const user = await User.findById(id);
  
      if (!user) {
        return res.json({
          message: 'Utente non trovato',
          status: 404,
          success: false,
        });
      }
  
      const existingShareCode = await User.findOne({ shareCode: promoCode });
  
      if (!existingShareCode) {
        return res.json({
          message: 'Promo code non esistente',
          status: 404,
          success: false,
        });
      }
  
      // Verifica se il promoCode è già nell'array friendCode
      if (user.friendCode.includes(promoCode)) {
        return res.json({
          message: 'Il promo code è già presente nell\'array friendCode',
          status: 400,
          success: false,
        });
      }
  
      // Aggiungi 15 minuti all'utente corrente
      user.minutes += 15;
  
      // Aggiungi 15 minuti all'utente con il promo code
      existingShareCode.minutes += 15;
  
      user.friendCode.push(promoCode);
  
      await user.save();
      await existingShareCode.save();
  
      res.json({
        success: true,
        status: 200,
        message: 'Minuti aggiunti correttamente',
        updatedUser: user,
      });
    } catch (error) {
      console.error(error);
      res.json({
        success: false,
        status: 500,
        message: 'Errore nell\'invio del promo code',
      });
    }
  };