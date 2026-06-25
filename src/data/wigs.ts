export interface Wig {
  id: number
  name: string
  type: string
  style: string
  length: string
  color: string
  price: number
  priceRange?: string
  note?: string
  images: {
    front: string
    side: string
    back: string
  }
}

const wigImages = import.meta.glob(
  '../assets/images/wigs/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    import: 'default'
  }
) as Record<string, string>

const img = (file: string) =>
  wigImages[`../assets/images/wigs/${file}`]

export const wigs: Wig[] = [
  {
    id: 1,
    name: 'Golden Brown Body Wave',
    type: 'Human Hair',
    style: 'Full Frontal, Body Wave',
    length: '20"',
    color: 'Golden Brown',
    price: 14000,
    priceRange: 'KES 12,000 – 14,000 for similar lengths',
    note: 'Also available in black, and in different lengths',
    images: {
      front: img('wig-01-front.jpeg'),
      side: img('wig-01-side.jpeg'),
      back: img('wig-01-back.jpeg'),
    },
  },

  {
    id: 2,
    name: 'Blonde Bone Straight',
    type: 'Human Blend',
    style: 'Bone Straight',
    length: '26"',
    color: 'Blonde',
    price: 7000,
    note: 'Also available in different colors',
    images: {
      front: img('wig-02-front.jpeg'),
      side: img('wig-02-side.jpeg'),
      back: img('wig-02-back.jpeg'),
    },
  },

  {
    id: 3,
    name: 'Pink Body Wave Frontal',
    type: 'Semi-Human Hair',
    style: 'Full Frontal, Body Wave',
    length: '—',
    color: 'Pink',
    price: 4000,
    note: 'Also available in different colors',
    images: {
      front: img('wig-03-front.jpeg'),
      side: img('wig-03-side.jpeg'),
      back: img('wig-03-back.jpeg'),
    },
  },

  {
    id: 4,
    name: 'Maroon Body Wave Frontal',
    type: 'Semi-Human Hair',
    style: 'Full Frontal, Body Wave',
    length: '—',
    color: 'Dark Maroon',
    price: 3000,
    note: 'Also available in different colors',
    images: {
      front: img('wig-04-front.jpeg'),
      side: img('wig-04-side.jpeg'),
      back: img('wig-04-back.jpeg'),
    },
  },

  {
    id: 5,
    name: 'Black Water Curl',
    type: 'Human Hair',
    style: 'Water Curl',
    length: '18"',
    color: 'Black',
    price: 15000,
    priceRange: 'KES 7,000 – 15,000 depending on length',
    images: {
      front: img('wig-05-front.jpeg'),
      side: img('wig-05-side.jpeg'),
      back: img('wig-05-back.jpeg'),
    },
  },

  {
    id: 6,
    name: 'Orange Pixie Cut',
    type: 'Human Hair',
    style: 'Pixie, Full Frontal',
    length: 'Short',
    color: 'Orange',
    price: 3500,
    images: {
      front: img('wig-06-front.jpeg'),
      side: img('wig-06-side.jpeg'),
      back: img('wig-06-back.jpeg'),
    },
  },

  {
    id: 7,
    name: 'Black Fringe Wig',
    type: 'Semi-Human Hair',
    style: 'Fringe',
    length: '—',
    color: 'Black',
    price: 3000,
    images: {
      front: img('wig-07-front.jpeg'),
      side: img('wig-07-side.jpeg'),
      back: img('wig-07-back.jpeg'),
    },
  },

  {
    id: 8,
    name: 'Dark Brown Headband Wig',
    type: 'Body Wave',
    style: 'Headband',
    length: '—',
    color: 'Dark Brown',
    price: 2500,
    note: 'Also available in different colors',
    images: {
      front: img('wig-08-front.jpeg'),
      side: img('wig-08-side.jpeg'),
      back: img('wig-08-back.jpeg'),
    },
  },

  {
    id: 9,
    name: 'Red Bob Frontal',
    type: 'Semi-Human Hair',
    style: 'Bob, Full Frontal',
    length: 'Short',
    color: 'Red / Maroon',
    price: 3500,
    images: {
      front: img('wig-09-front.jpeg'),
      side: img('wig-09-side.jpeg'),
      back: img('wig-09-back.jpeg'),
    },
  },

  {
    id: 10,
    name: 'Kinky Blonde Frontal',
    type: 'Semi-Human Hair',
    style: 'Kinky, Full Frontal',
    length: '—',
    color: 'Blonde',
    price: 4000,
    images: {
      front: img('wig-10-front.jpeg'),
      side: img('wig-10-side.jpeg'),
      back: img('wig-10-back.jpeg'),
    },
  },
]