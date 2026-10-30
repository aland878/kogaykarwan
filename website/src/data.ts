// Business details from research/uk-pizza-and-more.md (retrieved October 30, 2026).
// Prices are in IQD and may differ by branch or change over time.

export type MenuItem = { name: string; price: number; note?: string };
export type MenuCategory = { id: string; title: string; blurb?: string; items: MenuItem[] };

export const MENU: MenuCategory[] = [
  {
    id: 'pizza',
    title: 'Pizza',
    blurb: 'Chicken and meat, fresh mushrooms, special cheese, pepperoni, salami, olives, tuna and our mushroom sauce.',
    items: [
      { name: 'Chizza Pizza', price: 11750, note: 'With Kentucky chicken slices' },
      { name: 'Mix Pizza', price: 10750 },
      { name: 'Kurdish Meat Pizza', price: 10750 },
      { name: 'Stuffed Pizza', price: 10750 },
      { name: 'Spicy Chicken Pizza', price: 9750 },
      { name: 'Calzone Pizza', price: 9750 },
      { name: 'Pepperoni Pizza', price: 8750 },
      { name: 'Salami Pizza', price: 8500 },
      { name: 'Tuna Pizza', price: 8500 },
      { name: 'Vegetarian Pizza', price: 7750 },
      { name: 'Margherita Pizza', price: 6750 },
    ],
  },
  {
    id: 'burgers',
    title: 'Burgers',
    blurb: 'Served with cheddar sauce, lettuce, tomato, onion, pickles, cocktail sauce, fries and onion rings.',
    items: [
      { name: 'Mini Burger', price: 8500 },
      { name: 'Double Cheese Burger', price: 5500 },
      { name: 'Chili Cheese Burger', price: 4750 },
      { name: 'Burger with Mushroom Sauce', price: 4750 },
      { name: 'Cheese Burger', price: 4500 },
      { name: 'Beef Burger', price: 4000 },
      { name: 'Chicken Cheese Burger', price: 3500 },
    ],
  },
  {
    id: 'shawarma',
    title: 'Shawarma',
    items: [
      { name: 'Cheese Meat Shawarma Plate', price: 6750 },
      { name: 'Chicken Shawarma Plate', price: 6000 },
      { name: 'Meat Sandwich', price: 4500 },
      { name: 'Chicken Sandwich', price: 4000 },
    ],
  },
  {
    id: 'pasta',
    title: 'Spaghetti & Pasta',
    items: [
      { name: 'Mix Spaghetti UK', price: 6750, note: 'Shawarma, chicken, onion, fresh cream, egg and Parmesan' },
      { name: 'Special Spaghetti', price: 6750 },
      { name: 'Chicken Alfredo', price: 5750 },
      { name: 'Meat Spaghetti', price: 5750 },
      { name: 'Chicken Spaghetti', price: 4500 },
      { name: 'Veggie Spaghetti', price: 3750 },
    ],
  },
  {
    id: 'more',
    title: 'Sides & Sweets',
    items: [
      { name: 'Brizo with Meat', price: 6750 },
      { name: 'Chicky', price: 5000 },
      { name: 'Tiramisu', price: 4750 },
      { name: 'Special Sauce Fries', price: 4000 },
      { name: 'Brizo', price: 3750 },
      { name: 'French Fries', price: 1750 },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    items: [
      { name: 'Pepsi (320 ml)', price: 500 },
      { name: 'Pepsi Diet (320 ml)', price: 500 },
      { name: '7Up (320 ml)', price: 500 },
      { name: 'Mirinda (320 ml)', price: 500 },
      { name: 'Dew (320 ml)', price: 500 },
      { name: 'Water (320 ml)', price: 250 },
    ],
  },
];

export const BRANCHES = [
  { name: 'Hakmawa', area: 'Hakmawa Main Street', hours: '10 AM – 12 AM', friday: '2 PM – 12 AM', note: 'Where it all started, 2020' },
  { name: 'Hawleri Nwe', area: 'Hawleri Nwe', hours: '12 PM – 2 AM', friday: '4 PM – 2 AM' },
  { name: 'Farmanbaran', area: 'Bnaslawa Road, Farmanbaran', hours: '10 AM – 12 AM', friday: '2 PM – 12 AM', note: 'Headquarters' },
  { name: 'Jihan', area: 'Cihan University', hours: '7 AM – 5 AM', friday: '2 PM – 5 AM', note: 'Open until 5 AM' },
];

export const HISTORY = [
  { year: '2020', text: 'Two people, one tiny 6 m × 3 m kitchen on Hakmawa Main Street.' },
  { year: '2022', text: 'UK Pizza & More Kitchen opens as our second branch.' },
  { year: '2024', text: 'Third branch opens on Farmanbaran Main Street.' },
  { year: '2026', text: 'Four branches across Erbil, including Jihan at Cihan University.' },
];

export const DELIVERY_PARTNERS = ['Talabat', 'Lezzoo', 'Tiptop', 'Toters', 'Zuu'];

export const REVIEWS = [
  { source: 'Google (via Restaurant Guru)', rating: '4.7', detail: '~3,900 ratings' },
  { source: 'Tripadvisor', rating: '4.8', detail: '#42 of restaurants in Erbil' },
];

export const CONTACT = {
  phone: '+964 750 888 7007',
  phoneHref: 'tel:+9647508887007',
  email: 'info@ukpizzaandmore.com',
  address: 'Main street, Bnaslawa Road, Farmanbaran, Erbil, Iraq',
  instagram: 'https://www.instagram.com/ukpizzaandmore',
  website: 'https://ukpizzaandmore.com',
};

export const formatIQD = (n: number) => n.toLocaleString('en-US');
