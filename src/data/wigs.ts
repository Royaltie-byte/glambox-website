export interface Wig {
  id: number
  name: string
  type: string
  length: string
  color: string
  colorHex: string
  colorHex2?: string
  tag?: string
  image: string
}

{/*const img = (path: string) =>
  new URL(path, import.meta.url).href*/}

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
    name: 'Midnight Silk',
    type: 'Straight',
    length: '26"',
    color: 'Jet Black',
    colorHex: '#0a0a0a',
    colorHex2: '#2a2a2a',
    tag: 'Bestseller',
    image: img('black_c.jpg'),
  },

  {
    id: 2,
    name: 'Golden Hour',
    type: 'Body Wave',
    length: '22"',
    color: 'Honey Blonde',
    colorHex: '#c8860a',
    colorHex2: '#e8a020',
    tag: 'New',
    image: img('blonde2.jpg'),
  },

  {
    id: 3,
    name: 'Bordeaux',
    type: 'Deep Wave',
    length: '24"',
    color: 'Burgundy',
    colorHex: '#4a0a0a',
    colorHex2: '#800020',
    image: img('red.jpg'),
  },

  {
    id: 4,
    name: 'Ivory Dream',
    type: 'Straight',
    length: '28"',
    color: 'Platinum',
    colorHex: '#e8e8e0',
    colorHex2: '#f5f5f0',
    tag: 'Premium',
    image: img('ivory.jpg'),
  },

  {
    id: 5,
    name: 'Mocha Curl',
    type: 'Curly',
    length: '20"',
    color: 'Dark Brown',
    colorHex: '#2c1a0e',
    colorHex2: '#4a2f1a',
    image: img('blonde.jpg'),
  },

  {
    id: 6,
    name: 'Ember',
    type: 'Loose Wave',
    length: '24"',
    color: 'Auburn',
    colorHex: '#6b2000',
    colorHex2: '#E8650A',
    tag: 'Limited',
    image: img('maroonish.jpg'),
  },
]