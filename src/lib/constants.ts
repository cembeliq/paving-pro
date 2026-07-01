export const BUSINESS = {
  name: "PavingPro",
  tagline: "Jasa Pasang Paving",
  whatsappNumber: "6281234567890",
  address: "Jl. Raya Sragen No. 45, Sragen, Jawa Tengah",
  areas: ["Sragen", "Solo", "Karanganyar", "Sukoharjo", "Boyolali", "Klaten"],
  social: {
    instagram: "https://instagram.com/pavingpro",
    facebook: "https://facebook.com/pavingpro",
  },
};

export function waLink(message: string) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
