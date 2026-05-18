export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-much-can-i-borrow-on-a-30k-salary',
    title: 'How Much Can I Borrow on a £30k Salary?',
    description:
      'Find out how much mortgage you could get on a £30,000 salary in the UK, what affects your borrowing power, and how to maximise your budget.',
    date: '2026-05-18',
    readingTime: '5 min read',
  },
  {
    slug: 'is-it-worth-overpaying-your-mortgage',
    title: 'Is It Worth Overpaying Your Mortgage in 2026?',
    description:
      'Should you overpay your mortgage or save the money? We break down when overpaying makes sense, when it does not, and how much you could save.',
    date: '2026-05-16',
    readingTime: '6 min read',
  },
  {
    slug: 'how-much-deposit-do-i-need-to-buy-a-house',
    title: 'How Much Deposit Do I Need to Buy a House in the UK?',
    description:
      'A clear guide to UK mortgage deposits — minimum amounts, how deposit size affects your rate, and practical tips to save faster.',
    date: '2026-05-14',
    readingTime: '5 min read',
  },
  {
    slug: 'fixed-vs-variable-rate-mortgage',
    title: 'Fixed vs Variable Rate Mortgage — Which Should You Choose?',
    description:
      'Understand the key differences between fixed, tracker, and variable rate mortgages in the UK, and which type suits your situation.',
    date: '2026-05-12',
    readingTime: '6 min read',
  },
  {
    slug: 'stamp-duty-for-first-time-buyers-explained',
    title: 'Stamp Duty for First-Time Buyers Explained (2025-26)',
    description:
      'Everything first-time buyers need to know about stamp duty relief in England and Northern Ireland — thresholds, savings, and worked examples.',
    date: '2026-05-10',
    readingTime: '5 min read',
  },
]
