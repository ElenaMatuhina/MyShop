export type ItemData = {
  featured: ItemType[];
  daily: ItemType[];
  offers: ItemType[];
  daispecialFeaturedly: ItemType[];
  specialFeatured: ItemType[];
};



export type ItemType = {
  id: string;
  name: string;
  description: string;
  price: number;
  full_background: string;
  quantity: number;
  basket?: boolean;
};
