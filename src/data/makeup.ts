export interface MakeupService {
  id: number
  name: string
  description: string
  price: number
  duration?: string
  note?: string
  image: string
}

const makeupImages = import.meta.glob(
  '../assets/images/makeup/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    import: 'default'
  }
) as Record<string, string>

const img = (file: string) =>
  makeupImages[`../assets/images/makeup/${file}`]

export const makeupServices: MakeupService[] = [
  {
    id: 1,
    name: 'Everyday Glam',
    description: 'A soft, natural look that enhances your features for daily wear or casual outings.',
    price: 1500,
    duration: '~45 mins',
    image: img('makeup-everyday.jpg'),
  },
  {
    id: 2,
    name: 'Full Glam',
    description: 'Bold, dramatic, and camera-ready — perfect for parties and big nights out.',
    price: 2500,
    duration: '~1 hr',
    image: img('makeup-full-glam.jpg'),
  },
  {
    id: 3,
    name: 'Bridal Makeup',
    description: 'A complete bridal package customized to make you look radiant on your big day.',
    price: 5000,
    duration: '~1.5-2 hrs',
    note: 'Trial session recommended before the big day',
    image: img('makeup-bridal.jpg'),
  },
  {
    id: 4,
    name: 'Bridal Party (Per Maid)',
    description: 'Cohesive, beautiful looks for your bridesmaids that complement the bride.',
    price: 2500,
    duration: '~45 mins each',
    note: 'Minimum 3 people for group booking',
    image: img('makeup-bridal-party.jpg'),
  },
  {
    id: 5,
    name: 'Editorial / Photoshoot Look',
    description: 'Bold, creative makeup designed to make a statement in front of the camera.',
    price: 3000,
    duration: '~1.5 hrs',
    image: img('makeup-editorial.jpg'),
  },
  {
    id: 6,
    name: 'Makeup + Lashes Combo',
    description: 'Full glam makeup paired with a flawless lash application — the complete look.',
    price: 3500,
    duration: '~1.5 hrs',
    image: img('makeup-lashes-combo.jpg'),
  },
]