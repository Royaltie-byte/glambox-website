export interface GalleryItem {
  id: number
  category: 'makeup' | 'lashes' | 'wigs' | 'nails' | 'braiding'
  label: string
  size: 'tall' | 'wide' | 'square'
}

export const galleryItems: GalleryItem[] = [
  { id: 1,  category: 'makeup',  label: 'Full Glam',          size: 'tall'   },
  { id: 2,  category: 'lashes',  label: 'Volume Lashes',      size: 'square' },
  { id: 3,  category: 'wigs',    label: 'Silk Straight',      size: 'wide'   },
  { id: 4,  category: 'nails',   label: 'Gel Manicure',       size: 'square' },
  { id: 5,  category: 'makeup',  label: 'Bridal Beat',        size: 'wide'   },
  { id: 6,  category: 'braiding','label': 'Knotless Braids',  size: 'tall'   },
  { id: 7,  category: 'lashes',  label: 'Wispy Hybrid',       size: 'square' },
  { id: 8,  category: 'wigs',    label: 'Body Wave',          size: 'square' },
  { id: 9,  category: 'makeup',  label: 'Editorial Look',     size: 'tall'   },
  { id: 10, category: 'nails',   label: 'Nail Art',           size: 'wide'   },
  { id: 11, category: 'braiding',label: 'Fulani Braids',      size: 'square' },
  { id: 12, category: 'lashes',  label: 'Mega Volume',        size: 'wide'   },
]