export default function Home() {
  async function initPayment() {
    try {
      const res = await fetch('http://localhost:4000/payments/session/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_id: 'testing-order-one',
          amount: '1.0',
          customer_id: 'testing-customer-one',
          customer_email: 'test@mail.com',
          customer_phone: '9876543210',
          payment_page_client_id: 'yourClientId',
          action: 'paymentPage',
          return_url: 'https://shop.merchant.com',
          description: 'Complete your payment',
          first_name: 'John',
          last_name: 'wick',
          'metadata.JUSPAY:gateway_reference_id': 'payu_test',
        }),
      });
      if (!res.ok) throw new Error(res.statusText);
      const resData = await res.json();
      console.log(resData);
    } catch (err) {
      if (process.env.NODE_ENV !== 'production') console.error(err);
    }
  }

  return (
    <main className="min-h-[100dvh] flex items-center justify-center">
      <button
        onClick={initPayment}
        className="py-2 px-4 rounded-md border-slate-900 text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 active:border-slate-950"
      >
        Pay with JusPay
      </button>
    </main>
  );
}
