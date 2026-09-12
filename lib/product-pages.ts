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
  }
} satisfies Record<string, ProductPageContent>;
