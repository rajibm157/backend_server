import { Request, Response } from 'express';
import Stripe from 'stripe';
import config from '_config/config';

const stripe = new Stripe(config.stripe_secret, { apiVersion: '2022-11-15', typescript: true });

export const getPaymentInt = async (_: Request, res: Response) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 90,
      currency: 'inr',
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.success({ result: { intent: paymentIntent.client_secret } });
  } catch (error: any) {
    res.error({ message: error?.message });
  }
};
