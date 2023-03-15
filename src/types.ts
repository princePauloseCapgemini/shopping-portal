export interface ProductProps {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export interface ProductListProps {
  isLoading: boolean;
  isError: boolean;
  data: ProductProps[] | undefined;
}

export interface ProductSingleProps {
  isLoading: boolean;
  isError: boolean;
  data: ProductProps | undefined;
}
