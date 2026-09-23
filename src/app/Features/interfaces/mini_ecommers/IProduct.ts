interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  cartNumber:number
}

interface Rating {
  rate: number;
  count: number;
}
