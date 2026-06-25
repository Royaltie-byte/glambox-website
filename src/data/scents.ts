export interface Scent {
  id: number
  name: string
  subtitle?: string
  size: string
  price: number
  priceNote?: string
  image: string
}

const scentImages = import.meta.glob(
  '../assets/images/scents/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    import: 'default'
  }
) as Record<string, string>

const img = (file: string) =>
  scentImages[`../assets/images/scents/${file}`]

export const scents: Scent[] = [
  {
    id: 1,
    name: 'Only You',
    subtitle: 'Eau de Parfum Vaporisateur Natural Spray',
    size: '30ml',
    price: 400,
    image: img('scent-01.jpeg'),
  },
  {
    id: 2,
    name: 'Only You — Black',
    subtitle: 'Eau de Parfum Vaporisateur Natural Spray',
    size: '30ml',
    price: 400,
    image: img('scent-02.jpeg'),
  },
  {
    id: 3,
    name: 'Only You No. 8174',
    subtitle: 'Eau de Parfum Vaporisateur Natural Spray',
    size: '30ml',
    price: 400,
    image: img('scent-03.jpeg'),
  },
  {
    id: 4,
    name: 'Only You No. 8130',
    subtitle: 'Eau de Parfum Vaporisateur Natural Spray',
    size: '30ml',
    price: 400,
    image: img('scent-04.jpeg'),
  },
  {
    id: 5,
    name: 'Only You',
    subtitle: 'Eau de Parfum Vaporisateur Natural Spray',
    size: '30ml',
    price: 400,
    image: img('scent-05.jpeg'),
  },
  {
    id: 6,
    name: 'Only You No. 8196',
    subtitle: 'Eau de Parfum Vaporisateur Natural Spray',
    size: '30ml',
    price: 400,
    image: img('scent-06.jpeg'),
  },
  {
    id: 7,
    name: 'Only You No. 8173',
    subtitle: 'Eau de Parfum Vaporisateur Natural Spray',
    size: '30ml',
    price: 400,
    priceNote: '50ml available at KES 600',
    image: img('scent-07.jpeg'),
  },
  {
    id: 8,
    name: 'I Am Juicy Couture',
    subtitle: 'Eau de Parfum Spray',
    size: '100ml (decant available in 30ml)',
    price: 3500,
    image: img('scent-08.jpeg'),
  },
  {
    id: 9,
    name: 'Scandal',
    subtitle: 'Smart Collection — No. 600, Highly Concentrated',
    size: '100ml',
    price: 1000,
    image: img('scent-09.jpeg'),
  },
  {
    id: 10,
    name: 'Rose Rose',
    subtitle: 'Bvlgari',
    size: '100ml',
    price: 3500,
    image: img('scent-10.jpeg'),
  },
  {
    id: 11,
    name: 'Alien Fusion',
    subtitle: 'Mugler — Eau de Parfum',
    size: '90ml',
    price: 3500,
    image: img('scent-11.jpeg'),
  },
  {
    id: 12,
    name: 'Man in Black',
    subtitle: 'Bvlgari — Eau de Parfum',
    size: '100ml',
    price: 1000,
    image: img('scent-12.jpeg'),
  },
  {
    id: 13,
    name: 'Scandal',
    subtitle: 'Jean Paul Gaultier',
    size: '100ml',
    price: 3500,
    image: img('scent-13.jpeg'),
  },
  {
    id: 14,
    name: 'Legend',
    subtitle: 'Montblanc — Eau de Parfum',
    size: '100ml',
    price: 3500,
    image: img('scent-14.jpeg'),
  },
]