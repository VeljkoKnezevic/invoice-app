export type Invoices = {
  id: string;
  createdAt: string;
  paymentDue: Date;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}[];

export type TInvoice = {
  id: string;
  createdAt: string;
  paymentDue: Date;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
};

export type Address = {
  street: string;
  city: string;
  postCode: string;
  country: Country;
};

export enum Country {
  Empty = "",
  UnitedKingdom = "United Kingdom",
  UnitedStatesOfAmerica = "United States of America",
}

export type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};
