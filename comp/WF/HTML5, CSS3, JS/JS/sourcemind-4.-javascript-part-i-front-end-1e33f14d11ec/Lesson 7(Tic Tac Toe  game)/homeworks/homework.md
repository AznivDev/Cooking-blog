# JavaScript Level 1
[![N|Solid](https://sourcemind.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F41aewm3k5480%2F2JJlUWmWkrApEVDjMwnZKe%2F11af2013a90836856ea91816a12f0718%2FLogo-sourcemind_2_.svg&w=384&q=75)](https://sourcemind.com/)

## Home Work

### 1.Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.


Example 1:
```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```
Example 2

```
Input: nums = [0]
Output: [[],[0]]
```

### 2.Write a class called CoffeeShop, which has two instance variables:

**name:** - a string (basically, of the shop)

**menu:** - an array of items (of object type), with    each item containing the item (name of the item), type (whether food or a drink) and price.


```
const MENU = [
  {
    item: "iced coffee",
    type: "drink",
    price: 1400,
  },
  {
    item: "Coca Cola",
    type: "drink",
    price: 800,
  }
  ...
];

const coffeeHouse = new CoffeeShop("CoffeeHouse", MENU);
```

and seven methods:

1. **addOrder**: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise, return "This item is currently unavailable!"
2. **fulfillOrder**: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
3. **listOrders**: returns the list of orders taken, otherwise, an empty array.
4. **dueAmount**: returns the total amount due for the orders taken.
5. **cheapestItem**: returns the name of the cheapest item on the menu.
6. **drinksOnly**: returns only the item names of type drink from the menu.
7. **foodOnly**: returns only the item names of type food from the menu.


Usage

```
coffeeHouse.addOrder("hot cocoa") ➞ "This item is currently unavailable!"

coffeeHouse.addOrder("iced coffee") ➞ "Order added!"

coffeeHouse.addOrder("Coca Cola") ➞ "Order added!"

coffeeHouse.listOrders ➞ ["iced coffee", "Coca Cola"]
// the list of all the items in the current order

coffeeHouse.dueAmount() ➞ 1400 + 800 = 2200

coffeeHouse.fulfillOrder() ➞ "The iced coffee is ready!"

coffeeHouse.fulfillOrder() ➞ "All orders have been fulfilled!"
// all orders have been presumably served

coffeeHouse.listOrders() ➞ []
// an empty array is returned if all orders have been exhausted

coffeeHouse.dueAmount() ➞ 0.0
// no new orders taken, expect a zero payable

coffeeHouse.cheapestItem() ➞ "Coca Cola"

coffeeHouse.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]

coffeeHouse.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]
```

** Finish calculator

