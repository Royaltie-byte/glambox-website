const categoryImages = import.meta.glob(
  '../assets/images/categories/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    import: 'default'
  }
) as Record<string, string>

const img = (file: string) =>
  categoryImages[`../assets/images/categories/${file}`]

export interface ServiceCategory {
  id: number
  name: string
  tagline: string
  path: string
  image: string
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 1,
    name: 'Wigs',
    tagline: 'Human hair, blends & full frontals',
    path: '/wigs',
    image: img('black_s.jpg'),
  },
  {
    id: 2,
    name: 'Scents',
    tagline: 'Signature fragrances for every mood',
    path: '/scents',
    image: img('scent-13.jpeg'),
  },
  {
    id: 3,
    name: 'Lashes',
    tagline: 'Classic to mega volume',
    path: '/lashes',
    image: img('lash.jpg'),
  },
  {
    id: 4,
    name: 'Braiding',
    tagline: 'Protective styles, expertly done',
    path: '/braiding',
    image: img('braid.jpg'),
  },
  {
    id: 5,
    name: 'Manicure',
    tagline: 'Hands and feet, flawlessly finished',
    path: '/manicure',
    image: img('nails.jpg'),
  },
  {
    id: 6,
    name: 'Makeup',
    tagline: 'Everyday glam to full bridal looks',
    path: '/makeup',
    image: img('makeup.jpg'),
  },
]