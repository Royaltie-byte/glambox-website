export interface LashService {
  id: number
  name: string
  description: string
  price: number
  duration?: string
  image: string
}

const lashImages = import.meta.glob(
  '../assets/images/lashes/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    import: 'default'
  }
) as Record<string, string>

const img = (file: string) =>
  lashImages[`../assets/images/lashes/${file}`]

export const lashes: LashService[] = [
  {
    id: 1,
    name: 'Classic Lashes',
    description: 'A natural, one-to-one extension look that adds length and subtle definition.',
    price: 2000,
    duration: '~1.5 hrs',
    image: img('lash-classic.jpg'),
  },
  {
    id: 2,
    name: 'Hybrid Lashes',
    description: 'A textured blend of classic and volume techniques for a fuller, natural finish.',
    price: 3000,
    duration: '~1.5 hrs',
    image: img('lash-hybrid.jpg'),
  },
  {
    id: 3,
    name: 'Volume Lashes',
    description: 'Multiple lightweight extensions fanned per lash for a dramatic, fluffy look.',
    price: 4000,
    duration: '~2 hrs',
    image: img('lash-volume.jpg'),
  },
  {
    id: 4,
    name: 'Mega Volume Lashes',
    description: 'Maximum density and drama — the boldest, most glamorous lash look we offer.',
    price: 5000,
    duration: '~2.5 hrs',
    image: img('lash-mega-volume.jpg'),
  },
  {
    id: 5,
    name: 'Wispy Lashes',
    description: 'A fluttery, textured style mixing lengths for a soft, voluminous flutter.',
    price: 3500,
    duration: '~2 hrs',
    image: img('lash-wispy.jpg'),
  },
  {
    id: 6,
    name: 'Strip Lash Application',
    description: 'Quick, glam strip lashes — perfect for a single event, party or photoshoot.',
    price: 500,
    duration: '~15 mins',
    image: img('lash-strip.jpg'),
  },
]