export const pricingPlans = [
  {
    id: 'sadhaka',
    name: 'Sadhaka Pass',
    subtitle: 'For curious seekers beginning their yogic path',
    monthlyPrice: 29,
    annualPrice: 24, // billed annually ($288/yr)
    badge: 'Starter Journey',
    popular: false,
    description: 'Essential access to foundational live classes and core on-demand library.',
    features: [
      'Access to 8 live classes per month',
      'Full access to Pose Alignment Library',
      'Interactive Pranayama Breath Coach tool',
      'Standard community chat support',
      '7-day class recording replays'
    ],
    buttonText: 'Begin Sadhaka Trial',
    accentColor: '#5B7553'
  },
  {
    id: 'abhyasa',
    name: 'Abhyasa Immersion',
    subtitle: 'Our most cherished path for dedicated daily practice',
    monthlyPrice: 59,
    annualPrice: 48, // billed annually ($576/yr)
    badge: 'Most Popular',
    popular: true,
    description: 'Unlimited access across all four pillars with personalized practice sequencing.',
    features: [
      'Unlimited daily live classes (Asana, Breath, Meditation)',
      'Complete 200+ class on-demand video archive (4K)',
      'Bi-weekly live Philosophy Sangha with Dr. Radhakrishnan',
      'Full Yoga Nidra conscious sleep audio library',
      'Downloadable practice calendars & alignment PDFs',
      'Priority live Q&A with master teachers'
    ],
    buttonText: 'Embrace Abhyasa',
    accentColor: '#C86D51'
  },
  {
    id: 'gurukula',
    name: 'Guru Kula Mastery',
    subtitle: 'Deep spiritual lineage study & 1-on-1 mentorship',
    monthlyPrice: 119,
    annualPrice: 95, // billed annually ($1140/yr)
    badge: 'Mastery Circle',
    popular: false,
    description: 'Intimate mentorship, personalized posture diagnosis, and sacred text masterclasses.',
    features: [
      'Everything in Abhyasa Immersion',
      'Monthly 1-on-1 private posture & breath audit (60 min)',
      'Direct WhatsApp access to your assigned lead mentor',
      'Exclusive quarterly weekend virtual silent retreats',
      'Accredited Continuing Education (YACEP) credits',
      'Special 25% discount on in-person Himalayan retreats'
    ],
    buttonText: 'Join Guru Kula Circle',
    accentColor: '#394B34'
  }
]
