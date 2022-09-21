export interface company {
  id: number;
  name: string;
  logo: string;
}

export interface car {
  id: number;
  image: string;
  name: string;
  price: number;
  rating: number;
  isMyFavorite: boolean;
  company_id: number;
}

export interface series {
  id: number;
  title: string;
  starting_price: number;
}
