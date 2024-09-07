export type OrderType = {
  request: OrderPayloadType;
  response: OrderResponseType;
};

export type OrderPayloadType = {
  order_id: string;
  amount: string;
  customer_id: string;
  customer_email: string;
  customer_phone: string;
  payment_page_client_id: string;
  action: string;
  return_url: string;
  description: string;
  first_name: string;
  last_name: string;
  'metadata.JUSPAY:gateway_reference_id': string;
};

export type OrderResponseType = {
  status: string;
  id: string;
  order_id: string;
  payment_links: Record<string, string>;
  sdk_payload: {
    requestId: string;
    service: string;
    payload: OrderPayloadType;
  };
};
