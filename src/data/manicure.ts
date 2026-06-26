export interface NailService {
  id: number
  name: string
  description: string
  price: number
  duration?: string
  note?: string
  image: string
}

const manicureImages = import.meta.glob(
  '../assets/images/nails/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    import: 'default'
  }
) as Record<string, string>

const img = (file: string) =>
  manicureImages[`../assets/images/nails/${file}`]

export const nailServices: NailService[] = [
  {
    id: 1,
    name: 'Classic Manicure',
    description: 'Nail shaping, cuticle care, and a fresh coat of polish in your color of choice.',
    price: 700,
    duration: '~45 mins',
    image: img('classic.jpg'),
  },
  {
    id: 2,
    name: 'Gel Manicure',
    description: 'Chip-free, long-lasting gel polish with a glossy, mirror-like finish.',
    price: 1500,
    duration: '~1 hr',
    image: img('gel.jpg'),
  },
  {
    id: 3,
    name: 'Acrylic Nails',
    description: 'Durable nail extensions sculpted to your preferred length and shape.',
    price: 2500,
    duration: '~1.5 hrs',
    image: img('acrylic.jpg'),
  },
  {
    id: 4,
    name: 'Nail Art',
    description: 'Custom hand-painted designs to make your set uniquely yours.',
    price: 300,
    duration: '~20 mins',
    note: 'Add-on to any manicure, priced per finger',
    image: img('art.jpg'),
  },
  {
    id: 5,
    name: 'French Tips',
    description: 'The timeless classic — clean white tips over a natural base.',
    price: 1200,
    duration: '~1 hr',
    image: img('french.jpg'),
  },
  {
    id: 6,
    name: 'Spa Pedicure',
    description: 'A relaxing foot soak, exfoliation, massage, and polish to finish.',
    price: 1000,
    duration: '~45 mins',
    image: img('pedicure.jpg'),
  },
]