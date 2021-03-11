import { ExpenseIncomeType } from "../provider/ExpenseIncomeProvider";

export const CATEGORY = [
  {
    id: 1,
    name: "Foods & Drinks",
    icon: "fast-food-outline",
  },
  {
    id: 2,
    name: "Transportation",
    icon: "car-outline",
  },
  {
    id: 3,
    name: "Clothing",
    icon: "shirt-outline",
  },
];

export const EXPENSES_DUMMY: ExpenseIncomeType[] = [
  {
    id: "1",
    amount: 153.0,
    comment: "Jojo's Food Garage Hamburger with Chads",
    categoryId: 1,
    date: new Date(),
  },
  {
    id: "2",
    amount: 362.5,
    comment: "Gilmore to Home Grab",
    categoryId: 2,
    date: new Date(),
  },
  {
    id: "3",
    amount: 420,
    comment: "Penshopee Shirt",
    categoryId: 2,
    date: new Date(),
  },
];

const data = { CATEGORY, EXPENSES_DUMMY };

export default data;
