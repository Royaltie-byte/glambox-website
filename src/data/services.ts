export interface Service {
  id: number
  title: string
  description: string
  icon: string
  items?: string[]
  tag?: string
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Makeup',
    icon: '✦',
    description:
      'From natural glam to full beat — our artists craft looks that turn heads and last all day.',
    items: [
      'Full glam makeup',
      'Bridal makeup',
      'Editorial looks',
      'Natural everyday beat',
    ],
    tag: 'Most Booked',
  },
  {
    id: 2,
    title: 'Lashes',
    icon: '◈',
    description:
      'Every eye shape. Every occasion. We carry and apply a curated range of premium lash styles.',
    items: [
      'Classic lash extensions',
      'Volume lashes',
      'Hybrid lashes',
      'Strip lash application',
      'Wispy lashes',
      'Mega volume',
    ],
    tag: 'Signature',
  },
  {
    id: 3,
    title: 'Braiding',
    icon: '◇',
    description:
      'Protective styles crafted with precision — from sleek knotless braids to bold statement looks.',
    items: [
      'Knotless braids',
      'Box braids',
      'Cornrows',
      'Fulani braids',
      'Feed-in braids',
    ],
  },
  {
    id: 4,
    title: 'Wig Installation',
    icon: '◉',
    description:
      'Flawless installs that look completely natural. Lace melted, edges laid, confidence delivered.',
    items: [
      'Lace front installation',
      'Full lace wigs',
      'Closure wigs',
      'Glue-less installs',
      'Wig customisation',
    ],
    tag: 'Premium',
  },
  {
    id: 5,
    title: 'Scents',
    icon: '◎',
    description:
      'A curated selection of luxury fragrances to complete your glam. Wear your signature.',
    items: [
      'Designer perfumes',
      'Fragrance consultations',
      'Body mists',
      'Oud collections',
    ],
  },
  {
    id: 6,
    title: 'Manicure',
    icon: '✧',
    description:
      'Perfectly sculpted, flawlessly finished nails that speak before you say a word.',
    items: [
      'Gel manicure',
      'Acrylic nails',
      'Nail art',
      'French tips',
      'Nail extensions',
    ],
  },
]