export type ProductPageContent = {
  title: string;
  description: string;
  eyebrow: string;
  situation: string;
  workflow: [string, string, string];
  benefits: string[];
  faq: Array<[string, string]>;
};

export const productPages = {
  "quick-sale": {
    title: "Quick Sale",
    description: "Record counter and quick-amount sales, select how a customer paid, and keep a receipt with the order.",
    eyebrow: "SELL AT THE COUNTER",
    situation: "A customer is ready to pay. You need the sale recorded before the moment moves on.",
    workflow: ["Select items or enter a quick amount", "Record the payment method", "Keep the sale and receipt together"],
    benefits: ["A clear record for every counter sale", "Cash, transfer, POS, and other payment methods", "Receipts that stay with the sale"],
    faq: [["Can I record a sale without adding products first?", "Yes. Quick Sale supports a quick amount when the sale is not tied to a saved item."], ["Does the sale appear in the business view?", "Yes. Recorded sales feed into your orders, receipts, and daily business record."]]
  },
  "checkout-links": {
    title: "Checkout Links",
    description: "Create a payment link, share it from the conversation, and keep the payment connected to the order.",
    eyebrow: "SELL FROM THE CONVERSATION",
    situation: "The buyer has said yes in WhatsApp or Instagram. Give them a direct next step instead of chasing payment details.",
    workflow: ["Create a link for an item or amount", "Share it wherever the conversation started", "Follow the order once payment begins"],
    benefits: ["A clearer path from intent to payment", "Order details stay attached to the link", "A reusable way to sell outside the storefront"],
    faq: [["Can a link be shared on WhatsApp?", "Yes. Checkout links are designed to be shared from the channels where your buyers already talk to you."], ["Does it replace my storefront?", "No. It is one selling channel alongside Quick Sale and your online store."]]
  },
  "online-store": {
    title: "Online Store",
    description: "Give customers a branded storefront with products, order details, and a clear way to buy.",
    eyebrow: "SELL ONLINE",
    situation: "Some customers need more than a message before they buy. Give them a credible place to browse and place an order.",
    workflow: ["Add products and the details buyers need", "Share your storefront link", "Receive the completed order in PulchriFlow"],
    benefits: ["A shareable place for your products", "Orders arrive with the information you need", "Your store stays connected to the same business record"],
    faq: [["Do I need a separate website?", "No. PulchriFlow provides a storefront link as part of the commerce workspace."], ["Can customers still use WhatsApp?", "Yes. The storefront complements the conversations where you already sell."]]
  },
  invoices: {
    title: "Invoices",
    description: "Send a clear invoice, collect payment, and keep the resulting receipt in the same business record.",
    eyebrow: "MAKE THE REQUEST CLEAR",
    situation: "A customer needs a formal payment request. Send the amount, follow payment, and keep the record without rebuilding it later.",
    workflow: ["Create the invoice", "Share the payment request", "Record payment and issue the receipt"],
    benefits: ["Clear payment requests for customers", "Manual payment recording when needed", "Invoices and receipts connected in one place"],
    faq: [["Can I record a manual invoice payment?", "Yes. PulchriFlow supports recording a manual payment against an invoice."], ["What happens after payment?", "The payment is kept with the invoice and a receipt can be issued from that record."]]
  },
  receipts: {
    title: "Receipts",
    description: "Keep a reliable receipt record for completed sales and payments without searching through chat history.",
    eyebrow: "KEEP THE RECORD",
    situation: "The payment is complete, but the evidence should not disappear into a chat thread or notebook.",
    workflow: ["Complete or record the sale", "Generate the receipt from the transaction", "Return to the record whenever you need it"],
    benefits: ["Receipts attached to the sale", "A clearer history for you and the customer", "Less manual record keeping after the payment"],
    faq: [["Are receipts tied to completed payments?", "Receipts are created from the recorded sale or invoice payment."], ["Can I find past receipts?", "Yes. Receipts are available from the merchant commerce area."]]
  },
  restaurants: {
    title: "Restaurants",
    description: "Sell from a menu page, take counter and WhatsApp orders, and keep every payment and receipt in one PulchriFlow workspace.",
    eyebrow: "DINE-IN AND MENU COMMERCE",
    situation: "Restaurant work moves quickly. PulchriFlow keeps your menu, counter sales, WhatsApp and online orders, and payment records connected in one place.",
    workflow: ["Build a menu-style catalog", "Take counter, WhatsApp, or online orders", "Move each order from paid to completed"],
    benefits: ["One menu for your menu page, checkout links and counter sales", "Sold-out dishes shown to customers", "Counter and online orders in one record"],
    faq: [["Is this a separate restaurant app?", "No. Restaurants use PulchriFlow configured for menus, counter sales and online food orders."], ["Can a restaurant still sell online?", "Yes. Storefront, orders, payments, customers, and receipts remain part of the same platform."]]
  },
  supermarkets: {
    title: "Supermarkets",
    description: "Sell groceries online with aisles, basket orders, bulk prices, stock levels, delivery and customer records in PulchriFlow.",
    eyebrow: "GROCERY FULFILMENT",
    situation: "Grocery orders need more than a cart. Customers want to find items fast and fill a basket, and you need every order paid, packed and delivered without losing track.",
    workflow: ["List grocery items and categories", "Receive basket orders", "Move each order from paid to packed to delivered"],
    benefits: ["Aisles, search and quick add for full baskets", "Bulk prices that apply automatically", "Stock levels customers can see"],
    faq: [["Can I offer bulk prices?", "Yes. Give a product a lower price for larger quantities and it applies in the basket automatically."], ["Is supermarket fulfilment separate from orders?", "No. Basket orders use the same orders, payments, customers and receipts as the rest of PulchriFlow."]]
  },
  "service-businesses": {
    title: "Service Businesses",
    description: "Sell services with prices, images, descriptions, customer instructions, service requests, checkout links and invoices.",
    eyebrow: "SERVICE COMMERCE",
    situation: "Tailors, salons, laundries, travel agencies, and other service businesses need a storefront that does not pretend every offer is stock on a shelf.",
    workflow: ["Create services instead of stocked products", "Take service requests from your page", "Confirm, then invoice or send a checkout link"],
    benefits: ["No-stock service catalog items with service-ready wording", "Service requests with the customer\u2019s preferred time and details", "Orders, payments, invoices, customers, and receipts in one workspace"],
    faq: [["Can I sell a service without stock?", "Yes. Services are catalog items with no inventory decrement."], ["Can customers request a service?", "Yes. Customers send a request with their preferred time and details from your service page, and you confirm it on WhatsApp."]]
  },
  retail: {
    title: "Retail",
    description: "Create a polished online store for products, checkout links, invoices, payments, customers, receipts, and repeat sales.",
    eyebrow: "PRODUCT COMMERCE",
    situation: "Retail merchants need a credible storefront, simple catalog management, flexible payment paths, and a record of what each customer bought.",
    workflow: ["Add products, images, prices, stock, and categories", "Share storefront pages or checkout links", "Track orders, payments, receipts, and customer history"],
    benefits: ["Product catalog and storefront built for everyday selling", "Quick Sale, checkout links, invoices, receipts, and customer records together", "A path to service, restaurant, or supermarket capabilities later"],
    faq: [["Can I switch from retail later?", "Yes. PulchriFlow business templates can change while preserving existing records."], ["Does retail support manual and online payments?", "Yes. Merchants can use manual records and Paystack-ready checkout where configured."]]
  }
} satisfies Record<string, ProductPageContent>;
