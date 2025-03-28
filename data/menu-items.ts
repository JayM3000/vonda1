export interface MenuItem {
  name: string;
  price: number | string;
  description: string;
  tag?: string; // Optional tag like 'vegetarian', 'gluten-free', etc.
  image?: string; // Optional image path
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface MenuSection {
  title: string;
  description?: string;
  categories: MenuCategory[];
}

export const menuData: MenuSection[] = [
  {
    title: "BREAKFAST ALL DAY",
    description: "Start your day with our delicious breakfast options, available all day long.",
    categories: [
      {
        title: "Healthy Choices",
        items: [
          {
            name: "EGG WHITE OMELET",
            price: 14,
            description: "Baby spinach, grilled onions & peppers, sautéed Portobello mushrooms, sweet red onions & Jersey tomatoes served with toast.",
            tag: "healthy"
          },
          {
            name: "MS. VONDA'S OATMEAL BOWL",
            price: 8,
            description: "Toasted oats, sliced bananas, walnuts, dried cranberries, cinnamon & honey.",
            tag: "vegetarian"
          }
        ]
      },
      {
        title: "OMELETS",
        items: [
          {
            name: "KITCHEN OMELET",
            price: 17,
            description: "Your choice of two (2) ingredients: Cheddar, Swiss, or Parmesan cheese; Tomato, Spinach, Wild Mushrooms, Caramelized onions, Bacon, or Turkey Sausage. Additional ingredients add $1.50. Served with home fries & toast."
          },
          {
            name: "GRILLED SALMON OMELET",
            price: 23,
            description: "Blackened salmon with tomato & spinach. Served with home fries & toast."
          },
          {
            name: "SPICY CHICKEN OMELET",
            price: 17,
            description: "With home fries & toast."
          }
        ]
      },
      {
        title: "BREAKFAST PLATTER",
        items: [
          {
            name: "FISH & GRITS",
            price: 23,
            description: "Blackened or fried whiting with Parmesan grits, two eggs, home fries & wheat toast."
          },
          {
            name: "CATFISH & GRITS",
            price: 24,
            description: "Blackened or fried catfish with Parmesan grits, two eggs, home fries & wheat toast."
          },
          {
            name: "PAN SEARED SALMON CAKES",
            price: 20,
            description: "Made-to-order seared salmon cakes, cheddar cheese grits, two eggs & 2 slices of wheat toast."
          },
          {
            name: "SHRIMP & GRITS",
            price: 20,
            description: "(6) large shrimp, New Orleans shrimp gravy with beef sausage bits over creamy grits."
          },
          {
            name: "EGGS & GRITS PLATTER",
            price: 14,
            description: "Classic eggs and grits combination."
          },
          {
            name: "EGGS & GRITS & SAUSAGE PLATTER",
            price: 17,
            description: "Eggs and grits with your choice of sausage."
          }
        ]
      },
      {
        title: "BREAKFAST SANDWICHES",
        items: [
          {
            name: "BACON, EGG & CHEESE",
            price: 9,
            description: "Choice of pork bacon, beef bacon, or turkey bacon."
          },
          {
            name: "CLASSIC EGG PANINI",
            price: 9,
            description: "Eggs any style, kale, smoked beef bacon, roasted red pepper & hot mayo on a multi-grain focaccia."
          },
          {
            name: "SAUSAGE, EGG & CHEESE",
            price: 10,
            description: "Choice of beef sausage or turkey."
          },
          {
            name: "THREE LAYER GRILLED CHEESE",
            price: 12,
            description: "Roasted turkey, smoked beef bacon, thick-cut tomato, mixed greens & onions."
          },
          {
            name: "SPICY CHICKEN HASH",
            price: 18,
            description: "With two eggs (any style), red onions, avocado & sour cream."
          }
        ]
      },
      {
        title: "PANCAKES, WAFFLES & FRENCH TOAST",
        items: [
          {
            name: "SILVER DOLLAR PANCAKES",
            price: 12,
            description: "With fresh berries & maple cream (Multi-grain available)",
            tag: "vegetarian"
          },
          {
            name: "BANANA & WALNUT PANCAKES",
            price: 15,
            description: "Sliced bananas & savory walnuts. (Short Stack $15 / $16.50 with turkey sausage)"
          },
          {
            name: "BLUEBERRY PANCAKES",
            price: 15,
            description: "Short Stack $15 / $16.50 with turkey sausage"
          },
          {
            name: "SAVORY SPINACH RICOTTA PANCAKES",
            price: 16,
            description: "With fresh berries & cream.",
            tag: "vegetarian"
          },
          {
            name: "SIGNATURE FRENCH TOAST",
            price: 15,
            description: "Texas Toast, ripened bananas, chopped walnuts, served with beef or turkey bacon."
          },
          {
            name: "BRIOCHE FRENCH TOAST",
            price: 17,
            description: "Ripened bananas, chopped walnuts, served with beef or turkey bacon."
          },
          {
            name: "ALMOND CRUSTED FRENCH TOAST",
            price: 16,
            description: "Our signature french toast with a crispy almond crust."
          },
          {
            name: "STUFFED FRENCH TOAST",
            price: 16,
            description: "Peaches, cream cheese & pecans."
          },
          {
            name: "FRUIT TOPPING WAFFLES",
            price: 15,
            description: "Choice of blueberries, strawberries or warm peach cobbler."
          },
          {
            name: "CHICKEN & WAFFLES",
            price: 21.50,
            description: "Buttermilk Belgian waffles with golden fried chicken."
          },
          {
            name: "SAVORY SPINACH & RICOTTA WAFFLES",
            price: 16,
            description: "Fresh berries & cream.",
            tag: "vegetarian"
          },
          {
            name: "NUTELLA & STRAWBERRIES WAFFLES",
            price: 15,
            description: "With fresh berries & cream.",
            tag: "vegetarian"
          }
        ]
      }
    ]
  },
  {
    title: "LUNCH & DINNER",
    description: "Enjoy our delicious lunch and dinner options, featuring a variety of appetizers, salads, burgers, and signature entrees.",
    categories: [
      {
        title: "APPETIZERS & SALADS",
        items: [
          {
            name: "GRILLED BBQ WHOLE WINGS",
            price: 17,
            description: "Served with corn cakes."
          },
          {
            name: "VEGETABLE SOUL ROLL",
            price: 16,
            description: "With cabbage, collards, brown rice, and pepper-jack, topped with spicy apple-ginger sauce.",
            tag: "vegetarian"
          },
          {
            name: "BLACK-EYE PEA DIP",
            price: 12,
            description: "Served with crisp tortilla chips.",
            tag: "vegetarian"
          },
          {
            name: "KITCHEN MAC BOWL",
            price: 17,
            description: "With Smoked Gouda, Wisconsin Cheddar, Beef Bacon, or Buffalo Chicken."
          },
          {
            name: "MIXED GREEN SALAD",
            price: 12,
            description: "Chopped lettuce, field greens, tomatoes, red onions, cucumbers & croutons with your choice of dressing.",
            tag: "vegetarian"
          },
          {
            name: "GRILLED CHICKEN CAESAR SALAD",
            price: 18,
            description: "Grilled chicken breast, chopped romaine lettuce, tossed in a creamy Caesar dressing with homemade croutons & shredded parmesan cheese."
          },
          {
            name: "HONEY DIPPED FRIED CHICKEN SALAD",
            price: 18,
            description: "Grilled chicken breast, chopped romaine lettuce, tossed in a creamy Caesar dressing with homemade croutons & shredded parmesan cheese."
          },
          {
            name: "COBB SALAD",
            price: 17,
            description: "Mixed greens, tomatoes, corn, smoked bacon, egg & crumbled blue cheese. (Add Shrimp – $7, Add Salmon – $8)"
          }
        ]
      },
      {
        title: "WEST KINNEY BURGERS",
        items: [
          {
            name: "W. KINNEY BURGER",
            price: 15,
            description: "With lettuce, tomato & onions."
          },
          {
            name: "W. KINNEY MUSHROOM EXPLOSION",
            price: 17,
            description: "With Portobello mushrooms, Swiss cheese & caramelized onions."
          },
          {
            name: "W. KINNEY BBQ BURGER",
            price: 17,
            description: "Dipped in BBQ sauce, topped with cheddar cheese & crispy onions."
          },
          {
            name: "W. KINNEY GRILLED TURKEY BURGER",
            price: 17,
            description: "With red peppers, red onions & cheddar cheese."
          },
          {
            name: "W. KINNEY VEGGIE BURGER",
            price: 16,
            description: "Sautéed spinach, tomato, mushrooms & onions.",
            tag: "vegetarian"
          }
        ]
      },
      {
        title: "SANDWICHES",
        items: [
          {
            name: "FRIED CHICKEN SANDWICH",
            price: 17.50,
            description: "Golden lightly fried chicken breast, shredded cabbage slaw, shredded red onions, pickled chip, spicy aioli."
          },
          {
            name: "FRIED CATFISH BOX",
            price: 17.50,
            description: "Homemade hush puppies, topped with a spicy tartar sauce."
          },
          {
            name: "FRIED WHITING SANDWICH",
            price: 16,
            description: "With french fries or a side salad."
          },
          {
            name: "SALMON CAKE PANINI",
            price: 15,
            description: "Homemade salmon cake, mixed greens, tomato & hot mayo on toasted panini."
          },
          {
            name: "ROASTED TURKEY B.L.T.",
            price: 15,
            description: "Roasted turkey, smoked beef bacon, thick-cut tomato, mixed greens & onions."
          }
        ]
      },
      {
        title: "MARKETPLACE ENTREES",
        items: [
          {
            name: "CHICKEN QUARTERS",
            price: 22,
            description: "BBQ, Fried or Blackened. Served with two sides."
          },
          {
            name: "CHOPPED CHICKEN",
            price: 22,
            description: "Served with two sides."
          },
          {
            name: "OXTAIL OVER WHITE RICE",
            price: 35,
            description: "Served with two sides."
          },
          {
            name: "BEEF SHORT RIBS",
            price: 33,
            description: "BBQ or Smothered Gravy. Served with two sides."
          },
          {
            name: "MEATLOAF",
            price: 22,
            description: "Served with two sides."
          },
          {
            name: "SEARED SALMON CAKES",
            price: 22,
            description: "Served with two sides."
          },
          {
            name: "TILAPIA",
            price: 22,
            description: "Baked, Fried or Blackened. Served with two sides."
          },
          {
            name: "CATFISH",
            price: 24,
            description: "Baked, Whited, Sautéed, Blackened or Fried. Served with two sides."
          },
          {
            name: "WHITING, LIGHTLY FRIED",
            price: 20,
            description: "Served with two sides."
          },
          {
            name: "BAKED FLOUNDER",
            price: 20,
            description: "Served with two sides."
          },
          {
            name: "JUMBO SHRIMP",
            price: 24,
            description: "Roasted, Grilled, BBQ, or Lightly Fried. Served with two sides."
          },
          {
            name: "SMOTHERED TURKEY WINGS",
            price: 22,
            description: "Served with two sides."
          },
          {
            name: "SMOTHERED CHICKEN",
            price: 22,
            description: "Served with two sides."
          },
          {
            name: "VEGGIE PLATTER",
            price: 19,
            description: "Choice of four sides.",
            tag: "vegetarian"
          }
        ]
      },
      {
        title: "SIDE DISHES",
        items: [
          {
            name: "COLLARD GREENS",
            price: 6,
            description: "Southern-style collard greens."
          },
          {
            name: "CABBAGE",
            price: 6,
            description: "Sautéed cabbage."
          },
          {
            name: "GARLIC STRING BEANS",
            price: 6,
            description: "Fresh string beans sautéed with garlic.",
            tag: "vegetarian"
          },
          {
            name: "CANDIED YAMS",
            price: 6,
            description: "Sweet and tender candied yams.",
            tag: "vegetarian"
          },
          {
            name: "BAKED MACARONI & CHEESE",
            price: 6,
            description: "Creamy baked macaroni and cheese.",
            tag: "vegetarian"
          },
          {
            name: "SAUTÉED SPINACH WITH GARLIC",
            price: 6,
            description: "Fresh spinach sautéed with garlic.",
            tag: "vegetarian"
          },
          {
            name: "BLACK-EYE PEAS",
            price: 6,
            description: "Traditional black-eye peas."
          },
          {
            name: "POTATO SALAD",
            price: 6,
            description: "Homemade potato salad.",
            tag: "vegetarian"
          },
          {
            name: "WHITE RICE",
            price: 6,
            description: "Steamed white rice.",
            tag: "vegetarian"
          },
          {
            name: "BROWN RICE",
            price: 6,
            description: "Steamed brown rice.",
            tag: "vegetarian"
          },
          {
            name: "CORN BREAD",
            price: 2,
            description: "Freshly baked corn bread.",
            tag: "vegetarian"
          }
        ]
      },
      {
        title: "DRINKS",
        items: [
          {
            name: "SODAS",
            price: 2,
            description: "Assorted sodas."
          },
          {
            name: "SOUTHERN SWEET TEA",
            price: 3,
            description: "Traditional sweet tea."
          },
          {
            name: "BLUEBERRY ICED TEA",
            price: 4,
            description: "Refreshing blueberry iced tea."
          },
          {
            name: "UPTOWN",
            price: 4,
            description: "Signature uptown drink."
          },
          {
            name: "LEMONADE",
            price: 4,
            description: "Fresh squeezed lemonade."
          },
          {
            name: "GINGER ROOT LEMONADE",
            price: 5,
            description: "Lemonade infused with fresh ginger root."
          },
          {
            name: "CUCUMBER GINGER LEMONADE",
            price: 5,
            description: "Lemonade infused with cucumber and ginger."
          },
          {
            name: "CRANBERRY JUICE",
            price: 4,
            description: "100% cranberry juice."
          },
          {
            name: "APPLE JUICE",
            price: 4,
            description: "100% apple juice."
          }
        ]
      }
    ]
  }
];
