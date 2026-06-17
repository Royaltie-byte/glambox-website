export interface GalleryItem {
  id: number
  category: 'makeup' | 'lashes' | 'wigs' | 'nails' | 'braiding'
  label: string
  size: 'tall' | 'wide' | 'square'
  image: string
}

const galleryImages = import.meta.glob(
  '../assets/images/**/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    import: 'default'
  }
) as Record<string, string>

const img = (path: string) =>
  galleryImages[`../assets/images/${path}`]

export const galleryItems: GalleryItem[] = [
  { id: 1, category: 'makeup', label: 'Full Glam', size: 'tall',
    image: img('makeup/image1.jpg') },

  { id: 2, category: 'lashes', label: 'Volume Lashes', size: 'square',
    image: img('lashes/image1.jpg') },

  { id: 3, category: 'wigs', label: 'Silk Straight', size: 'wide',
    image: img('wigs/black_c.jpg') },

  { id: 4, category: 'nails', label: 'Gel Manicure', size: 'square',
    image: img('nails/image3.jpg') },

  { id: 5, category: 'makeup', label: 'Bridal Beat', size: 'wide',
    image: img('makeup/image3.jpg') },

  { id: 6, category: 'braiding', label: 'Knotless Braids', size: 'tall',
    image: img('braiding/image1.jpg') },

  { id: 7, category: 'lashes', label: 'Wispy Hybrid', size: 'square',
    image: img('lashes/image3.jpg') },

  { id: 8, category: 'wigs', label: 'Body Wave', size: 'square',
    image: img('wigs/blonde2.jpg') },

  { id: 9, category: 'makeup', label: 'Editorial Look', size: 'tall',
    image: img('makeup/image2.jpg') },

  { id: 10, category: 'nails', label: 'Nail Art', size: 'wide',
    image: img('nails/image4.jpg') },

  { id: 11, category: 'braiding', label: 'Fulani Braids', size: 'square',
    image: img('braiding/image2.jpg') },

  { id: 12, category: 'lashes', label: 'Mega Volume', size: 'wide',
    image: img('lashes/image2.jpg') }
]