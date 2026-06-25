export interface BraidStyle {
  id: number
  name: string
  description: string
  price: number
  duration?: string
  image: string
}

const braidingImages = import.meta.glob(
  '../assets/images/braiding/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    import: 'default'
  }
) as Record<string, string>

const img = (file: string) =>
  braidingImages[`../assets/images/braiding/${file}`]

export const braidStyles: BraidStyle[] = [
  {
    id: 1,
    name: 'Cornrows',
    description: 'Classic, neat braids laid close to the scalp — clean and timeless for everyday wear.',
    price: 1500,
    duration: '~1.5 hrs',
    image: img('braid-cornrows.jpg'),
  },
  {
    id: 2,
    name: 'Knotless Braids',
    description: 'A gentle, lightweight technique with no bulky knots — easy on your edges and scalp.',
    price: 3500,
    duration: '~3-4 hrs',
    image: img('braid-knotless.jpg'),
  },
  {
    id: 3,
    name: 'Box Braids',
    description: 'The timeless protective style — neat square partings, your length, your color.',
    price: 3000,
    duration: '~3 hrs',
    image: img('braid-box.jpg'),
  },
  {
    id: 4,
    name: 'Feed-In Braids',
    description: 'Hair gradually fed in for a natural, seamless look that blends with your own roots.',
    price: 2500,
    duration: '~2 hrs',
    image: img('braid-feedin.jpg'),
  },
  {
    id: 5,
    name: 'Fulani Braids',
    description: 'Cornrows with accent braids and beads — bold, beautiful, full of personality.',
    price: 3500,
    duration: '~2.5 hrs',
    image: img('braid-fulani.jpg'),
  },
  {
    id: 6,
    name: 'Goddess / Boho Braids',
    description: 'Curly, textured ends woven through braids for a trendy, effortless boho finish.',
    price: 4500,
    duration: '~3.5 hrs',
    image: img('braid-boho.jpg'),
  },
]