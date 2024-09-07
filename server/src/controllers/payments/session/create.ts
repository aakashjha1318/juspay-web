import { OrderType } from '../../../types/Payments';
import juspay from '../../../../config/juspay';
import HttpError from '../../../utils/HttpError';

export default async function createSession(payload: OrderType['request']): Promise<OrderType['response'] | HttpError> {
  try {
    const sessionRes = await fetch(`${juspay.JUSPAY_API_BASE_URL}/session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: juspay.AUTHORIZATION,
        'x-merchantid': juspay.MERCHANT_ID,
      },
      body: JSON.stringify(payload),
    });
    if (!sessionRes.ok) return new HttpError(sessionRes.statusText, sessionRes.status);
    return await sessionRes.json();
  } catch (error) {
    console.error(error);
    return new HttpError('Internal Server Error', 500);
  }
}
