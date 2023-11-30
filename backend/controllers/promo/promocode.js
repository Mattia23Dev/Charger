const User = require("../../models/user");
const nodemailer = require('nodemailer');

exports.sendPromoCode = async (req, res) => {
    try {
      const promoCode = req.body.promoCode;
      const id = req.body.id;
  
      const user = await User.findById(id);
  
      if (!user) {
        res.json({
          message: 'Utente non trovato',
          status: 404,
          success: false,
          updatedUser: user,
        });
      }
  
      const existingShareCode = await User.findOne({ shareCode: promoCode });
  
      if (!existingShareCode) {
        res.json({
          message: 'Promo code non esistente',
          status: 404,
          success: false,
          updatedUser: user,
        });
      }
  
      // Verifica se il promoCode è già nell'array friendCode
      if (user.friendCode.includes(promoCode)) {
        res.json({
          message: 'Il promo code è già presente nell\'array friendCode',
          status: 400,
          success: false,
          updatedUser: user,
        });
      }

      user.minuti += 15;
      existingShareCode.minuti += 15;
  
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