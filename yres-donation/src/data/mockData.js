export const donationData = {
  goal: 15000,
  raised: 3850,
  donors: 137,
  currency: "CAD",
  campaign: "Support Our Learning Programs",
  lastUpdated: "2025-10-18T14:30:00Z",

  // Optional fields for extension
  recentDonors: [
    { name: "Alice M.", amount: 100 },
    { name: "Brian K.", amount: 50 },
    { name: "Chloe R.", amount: 75 },
    { name: "David L.", amount: 200 },
    { name: "Emma T.", amount: 150 },
  ],

  // Auto-calculated percentage of goal achieved
  percentage: Math.min(Math.round((3850 / 15000) * 100), 100),
};
