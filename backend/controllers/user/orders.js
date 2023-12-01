const ordersModel = require("../../models/order");
const User = require('../../models/user');
const stripe = require('stripe')('sk_test_51N1TzKKy8OcUrFfrU2mW5nUC3kEBLccBV2974HaHTuylMHFCl7Lw8qBHtJ1ppXlimbFIZ9gSCM8izR2sbKVAJNFG00nytofunW');

module.exports.createPayment = async (req, res) => {
    try {
        const { email } = req.body;
        const customer = await stripe.customers.create({
            email: email, 
        });

        const paymentIntent = await stripe.paymentIntents.create({
            amount: 10, 
            currency: 'eur', 
            description: 'Pagamento di prova',
            payment_method_types: ['card'],
            confirmation_method: 'manual',
            confirm: true,
            customer: customer.id, 
        });

        const clientSecret = paymentIntent.client_secret;
        console.log(clientSecret);

        res.json({ clientSecret: clientSecret });
    } catch (error) {
        console.error(error);
        res.json(error);
    }
}

module.exports.createPaymentAndSaveCard = async (req, res) => {
    try {

        const { email, model, tokenId } = req.body;
        console.log(req.body);
          
          const customer = await stripe.customers.create({
            email: email,
            payment_method: tokenId,
            invoice_settings: {
              default_payment_method: tokenId,
            },
          });
          
          const paymentIntent = await stripe.paymentIntents.create({
            amount: 10,
            currency: 'eur',
            customer: customer.id,
            payment_method: tokenId,
            confirmation_method: 'manual',
            confirm: true,
          });

        if (paymentIntent.status === 'succeeded') {
            const user = await User.findOne({ email: email });

            user.cards.push({
                cardNumber: model.cardNumber,
                expirationDate: model.expiration,
                cvv: model.cvv,
                cardHolder: model.cardHolder,
            });

            await user.save();

            res.json({ success: true, message: 'Carta salvata con successo' });
        } else {
            res.json({ success: false, message: 'Errore nel pagamento' });
        }
    } catch (error) {
        console.error('Errore:', error);
        res.status(500).json({ success: false, message: 'Errore interno del server' });
    }
};

module.exports.confirmPayment = async (req, res) => {
    const { paymentMethodId, paymentIntentId, cardDetails, id } = req.body;
    console.log(paymentMethodId);
    
        try {
            const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId, {
                payment_method: paymentMethodId,
            });

            const user = await User.findById(id);
            user.cards.push({cardDetails})

            await user.save();
    
            res.json({ success: true, paymentIntent });
        } catch (error) {
            console.error(error);
            res.json({ success: false, error: error.message });
        }
}

module.exports.orders = async (req, res) => {
    try{

        const user = req.user
        const orders = await ordersModel.find({user : user._id})
            .populate({path : "user" , select : "-password -token"})
            .populate("items.productId")
            .populate("items.categoryId")

        return res.json({
            success : true,
            message : "orders",
            data : orders
        })

    }catch(error){
        return res.send(error.message)
    }
}

exports.paymentSheet = async (req, res) => {

    const { email, name } = req.body;
    console.log(req.body);
    const customer = await stripe.customers.create({
        email: email,
        name: name,
      });
    const ephemeralKey = await stripe.ephemeralKeys.create(
      {customer: customer.id},
      {apiVersion: '2022-11-15'}
    );
    const setupIntent = await stripe.setupIntents.create({
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.json({
      setupIntent: setupIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
      clientSecret: "sk_test_51N1TzKKy8OcUrFfrU2mW5nUC3kEBLccBV2974HaHTuylMHFCl7Lw8qBHtJ1ppXlimbFIZ9gSCM8izR2sbKVAJNFG00nytofunW",
    })
  };

  exports.savePaymentDetails = async (req, res) => {
    try {
      const {
        customerId,
        setupIntentId,
        ephemeralKey,
        last4,
        id
      } = req.body;

      console.log(req.body);
  
      const user = await User.findById(id);
  
      if (!user) {
       return res.json({
            status: 404,
            success: false,
            message: 'Utente non trovato',
        })
      }
  
      user.stripeCustomerId = customerId;
      user.stripeEphemeralKey = ephemeralKey;
      user.stripeSetupIntentId = setupIntentId;
  
      user.stripePaymentMethods.push({
        last4,
      });
  
      await user.save();
  
      res.json({
        success: true,
        status: 200,
        message: 'Payment details saved successfully',
        user,
      });
    } catch (error) {
      console.error('Errore:', error.message);
      res.json({
        success: false,
        status: 500,
        message: 'Failed to save payment details. Please try again.',
      });
    }
  };