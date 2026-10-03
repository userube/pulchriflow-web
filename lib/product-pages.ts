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
    description: "Run menu sales, dine-in orders, QR table flows, staff handoff, kitchen preparation, and pay-after-eating from one PulchriFlow workspace.",
    eyebrow: "DINE-IN AND MENU COMMERCE",
    situation: "Restaurant work moves quickly. PulchriFlow keeps menu items, tables, staff, customer orders, kitchen flow, and payment records connected without creating a separate product for restaurants.",
    workflow: ["Build a menu-style catalog", "Take dine-in, pickup, or online orders", "Move orders through kitchen, waiter, payment, and receipt"],
    benefits: ["One platform for table, menu, order, customer, and payment records", "QR and waiter-ready flows designed to plug into the same dashboard", "Pay-after-eating support without duplicating storefront logic"],
    faq: [["Is this a separate restaurant app?", "No. Restaurants use PulchriFlow capabilities configured for dine-in and food workflows."], ["Can a restaurant still sell online?", "Yes. Storefront, orders, payments, customers, and receipts remain part of the same platform."]]
  },
  supermarkets: {
    title: "Supermarkets",
    description: "Support grocery catalog sales, repeat baskets, picking, packing, inventory, delivery, and customer records in PulchriFlow.",
    eyebrow: "GROCERY FULFILMENT",
    situation: "Grocery orders need more than a cart. Teams need to know what to pick, what is packed, what is unavailable, and what should be saved for the next shop.",
    workflow: ["List grocery items and categories", "Receive baskets and repeat orders", "Coordinate picking, packing, inventory, delivery, and receipts"],
    benefits: ["Saved baskets for repeat grocery journeys", "Inventory-aware fulfilment that fits supermarket operations", "Customer and order records kept with every basket"],
    faq: [["Does PulchriFlow support saved baskets?", "Yes. Saved Items are built to support repeat baskets and other reusable customer journeys."], ["Is supermarket fulfilment separate from orders?", "No. Picking, packing, inventory, delivery, payments, and receipts plug into the same commerce record."]]
  },
  "service-businesses": {
    title: "Service Businesses",
    description: "Sell services with prices, images, descriptions, customer instructions, checkout, quotes, invoices, saved favourites, and repeat journeys.",
    eyebrow: "SERVICE COMMERCE",
    situation: "Tailors, salons, laundries, travel agencies, and other service businesses need a storefront that does not pretend every offer is stock on a shelf.",
    workflow: ["Create services instead of stocked products", "Share service pages, checkout links, quotes, or invoices", "Save customer preferences for faster repeat work"],
    benefits: ["No-stock service catalog items with service-ready wording", "Favourite services and saved journeys for returning customers", "Orders, payments, invoices, customers, and receipts in one workspace"],
    faq: [["Can I sell a service without stock?", "Yes. Services are catalog items with no inventory decrement."], ["Can customers save favourite services?", "Yes. Saved Items supports favourite services and other repeat journeys."]]
  },
  retail: {
    title: "Retail",
    description: "Create a polished online store for products, checkout links, invoices, payments, customers, receipts, and repeat sales.",
    eyebrow: "PRODUCT COMMERCE",
    situation: "Retail merchants need a credible storefront, simple catalog management, flexible payment paths, and a record of what each customer bought.",
    workflow: ["Add products, images, prices, stock, and categories", "Share storefront pages or checkout links", "Track orders, payments, receipts, and customer history"],
    benefits: ["Product catalog and storefront built for everyday selling", "Quick Sale, checkout links, invoices, receipts, and customer records together", "A path to service, restaurant, or supermarket capabilities later"],
    faq: [["Can I switch from retail later?", "Yes. PulchriFlow business templates can change while preserving existing records."], ["Does retail support manual and online payments?", "Yes. Merchants can use manual records and Paystack-ready checkout where configured."]]
  },
  "saved-items": {
    title: "Saved Items",
    description: "Save repeat customer journeys like favourite services, saved baskets, saved meals, trips, laundry schedules, and reusable orders.",
    eyebrow: "REPEAT JOURNEYS",
    situation: "Many customers buy or request the same thing again. PulchriFlow turns those patterns into saved journeys instead of scattered notes.",
    workflow: ["Save a customer journey from a service, basket, meal, trip, or schedule", "Retrieve it when the customer returns", "Reuse the details for faster checkout, quote, invoice, or follow-up"],
    benefits: ["Favourite services for salons, tailors, and service businesses", "Saved baskets for supermarkets and grocery runs", "A reusable foundation for reminders, bookings, appointments, and customer hub experiences"],
    faq: [["Is this only saved orders?", "No. Saved Items is a reusable engine for multiple business journeys, not just previous orders."], ["Can it support future reminders?", "Yes. It is structured so reminders and repeat workflows can build on top later."]]
  },
  "customer-hub": {
    title: "Customer Hub",
    description: "Give customers one clear place to return for orders, saved items, favourite businesses, appointments, bookings, addresses, and reminders.",
    eyebrow: "CUSTOMER EXPERIENCE",
    situation: "Customers should not have to search through old chats to find an order, saved service, basket, address, booking, or reminder. Customer Hub gives repeat buyers a cleaner way back into the business.",
    workflow: ["Give customers one place to return", "Organize orders, saved items, favourites, addresses, appointments, bookings, and reminders", "Build repeat journeys without mixing customer tools into the merchant dashboard"],
    benefits: ["A customer-facing foundation for repeat purchases and service journeys", "Saved items, favourite businesses, addresses, and reminders in one customer experience", "Future-ready structure for appointments, bookings, and customer follow-up"],
    faq: [["Is Customer Hub a wallet?", "No. Customer Hub is the customer platform for orders, saved items, favourite businesses, addresses, appointments, bookings, and reminders."], ["Does it replace the merchant dashboard?", "No. Customer Hub is customer-facing. Merchants keep using the PulchriFlow dashboard to run the business."]]
  }
} satisfies Record<string, ProductPageContent>;
