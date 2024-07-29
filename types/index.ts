export type Categorie = {
  slug: string;
  name: string;
  url: string;
};

export type Products = {
  limit: number;
  products: Product[];
  skip: number;
  total: 194;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: string;
  reviews: Record<string, number>[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Record<string, string>;
  images: string[];
  thumbnail: string;
};
