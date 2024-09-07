const { JUSPAY_API_BASE_URL, JUSPAY_API_KEY, JUSPAY_MERCHANT_ID } = process.env;

if (!JUSPAY_API_BASE_URL || !JUSPAY_API_KEY || !JUSPAY_MERCHANT_ID)
  throw new Error('Please create a config/juspay.ts file with the required Juspay keys');

export default {
  JUSPAY_API_BASE_URL: process.env.JUSPAY_API_BASE_URL,
  AUTHORIZATION: 'Basic ' + Buffer.from(process.env.JUSPAY_API_KEY + ':').toString('base64'),
  MERCHANT_ID: process.env.JUSPAY_MERCHANT_ID as string,
};
