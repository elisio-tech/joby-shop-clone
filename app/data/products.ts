export type Product = {
  id: number;
  name: string;
  price: string;
  sizes: string[];
  color: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Aero Crewneck Sweatshirt',
    price: '€61,95',
    sizes: ['S', 'M', 'L', 'XL'],
    color: 'White',
    image: '/1.webp',
  },
  {
    id: 2,
    name: 'Crewneck "Heart" Sweatshirt (Blue)',
    price: '€72,50',
    sizes: ['S', 'M', 'L', 'XL'],
    color: 'Black',
    image: '/2.webp',
  },
  {
    id: 3,
    name: 'Joby "101 First Flight" T-Shirt (White) - LIMITED PREORDER',
    price: '€120,00',
    sizes: ['M', 'L', 'XL'],
    color: 'Navy',
    image: '/3.webp',
  },
  {
    id: 4,
    name: 'Joby "Aircraft" T-Shirt (Blue)',
    price: '€35,00',
    sizes: ['S', 'M', 'L'],
    color: 'Gray',
    image: '/4.webp',
  },
  {
    id: 5,
    name: 'Joby "Aircraft" T-Shirt (White)',
    price: '€65,00',
    sizes: ['S', 'M', 'L', 'XL'],
    color: 'Red',
    image: '/5.webp',
  },
  {
    id: 6,
    name: 'Joby "Coordinates" Hat',
    price: '€70,50',
    sizes: ['S', 'M', 'L', 'XL'],
    color: 'Blue',
    image: '/6.webp',
  },
  {
    id: 7,
    name: 'Joby "Coordinates" Hat (Beige)',
    price: '€38,95',
    sizes: ['S', 'M', 'L'],
    color: 'White',
    image: '/7.webp',
  },
  {
    id: 8,
    name: 'Joby "Heart" T-Shirt (Blue)',
    price: '€63,00',
    sizes: ['M', 'L', 'XL'],
    color: 'Black',
    image: '/8.webp',
  },
  {
    id: 9,
    name: 'Joby "Up" T-Shirt (Black)',
    price: '€75,00',
    sizes: ['S', 'M', 'L', 'XL'],
    color: 'Green',
    image: '/9.webp',
  },
  {
    id: 10,
    name: 'Joby Aviation Merch Gift Card',
    price: '€40,00',
    sizes: ['S', 'M', 'L'],
    color: 'Yellow',
    image: '/10.webp',
  }
];