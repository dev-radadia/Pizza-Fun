//Drinks
import Aquafina from '../assets/images/drinks-images/aquafina.jpeg'
import CocaCola from '../assets/images/drinks-images/coca-cola.jpeg'
import Pepsi from '../assets/images/drinks-images/pepsi.jpg'
import ThumsUp from '../assets/images/drinks-images/thums-up.jpg'
import Sprite from '../assets/images/drinks-images/sprite.jpg'
import _7Up from '../assets/images/drinks-images/7up.jpg'
import MountainDew from '../assets/images/drinks-images/mountain-dew.jpg'
import Fanta from '../assets/images/drinks-images/fanta.jpeg'
import Mirinda from '../assets/images/drinks-images/mirinda.jpg'
//Pasta
import ChickenAlfredo from '../assets/images/pasta-images/Chicken Alfredo.jpeg'
import AllaGricia from '../assets/images/pasta-images/Pasta Alla Gricia.jpeg'
import SheetPan from '../assets/images/pasta-images/Sheet-Pan Burrata Caprese Gnocchi.jpeg'
import AllaVodka from '../assets/images/pasta-images/Penne Alla Vodka.jpeg'
import BakedSpaghetti from '../assets/images/pasta-images/Baked Spaghetti.jpeg'
import PotatoGnocchi from '../assets/images/pasta-images/pasta-6.jpeg'
import BakedZiti from '../assets/images/pasta-images/Ultimate Baked Ziti.jpeg'
import CacioPepe from '../assets/images/pasta-images/Cacio e Pepe.jpeg'
import PastaPuttanesca from '../assets/images/pasta-images/Pasta Puttanesca.jpeg'
import ItalianPastaSalad from '../assets/images/pasta-images/Italian Pasta Salad.jpeg'
import Lasagna from '../assets/images/pasta-images/Lasagna Roll Ups.jpeg'
import ToastedRavioli from '../assets/images/pasta-images/Toasted Ravioli.jpeg'
import OrecchietteBroccoli from '../assets/images/pasta-images/Orecchiette with Broccoli Rabe.jpeg'
import LambRagu from '../assets/images/pasta-images/Lamb Ragù.jpeg'
import LasagnaBolognese from '../assets/images/pasta-images/Lasagna Bolognese.jpeg'
import LemonRicotta from '../assets/images/pasta-images/Lemon Ricotta Pasta.jpeg'
import StuffedRigatoni from '../assets/images/pasta-images/Stuffed Rigatoni.jpeg'
import FiveCheese from '../assets/images/pasta-images/Five-Cheese Ziti Al Forno.jpeg'
import ChickenFlorentine from '../assets/images/pasta-images/Chicken Florentine Pasta.jpeg'
import MacCheese from '../assets/images/pasta-images/Italian Mac and Cheese.jpeg'
//Pizza
import CheesePizza from '../assets/images/cheese-pizza-375.jpg'
import VeggiePizza from '../assets/images/veggie-pizza.jpg'
import PepperoniPizza from '../assets/images/pepperoni-pizza.jpg'
import MeatPizza from '../assets/images/meat-pizza.jpg'
import MargheritaPizza from '../assets/images/margherita-pizza.jpg'
import BBQPizza from '../assets/images/BBQ-chicken-pizza.jpg'
import AllaPalla from '../assets/images/pizza-alla-pala.jpg'
import Prosciutto from '../assets/images/Prosciutto-e-Funghi-Pizza.jpeg'
import DetroitStyle from '../assets/images/Detroit-Style-pizza.jpeg'
import GarlicFingers from '../assets/images/Garlic-Fingers-pizza.jpeg'
import StLous from '../assets/images/St-Louis-Style-Pizza.jpg'
import Rustica from '../assets/images/Pizza-Rustica.jpg'
import Genovese from '../assets/images/Genovese.jpeg'
import Efichi from '../assets/images/Pizza-e-fichi.jpeg'
import Apizza from '../assets/images/Apizza.jpg'
import StuffedPizza from '../assets/images/Stuffed-Pizza.jpg'
import Pugliese from '../assets/images/Pugliese.jpeg'
import TomatoPie from '../assets/images/Tomato-Pie.jpeg'
import Fugaza from '../assets/images/fugazza.jpeg'
import DiZucca from '../assets/images/di-zucca.jpeg'
import Fugazeta from '../assets/images/Fugazzeta.jpeg'
import Carbonara from '../assets/images/carbonara.jpeg'
import GranmaPie from '../assets/images/Grandma-Pie.jpeg'
import Padellino from '../assets/images/padellino.jpeg'
import CaliforniaStyle from '../assets/images/California-Style.jpeg'
import Fritta from '../assets/images/fritta.jpeg'
import Romana from '../assets/images/romana.jpeg'
import ThinCrust from '../assets/images/Thin-Crust.jpeg'
import GreekStyle from '../assets/images/Greek-Style.jpeg'
import PizzaRomana from '../assets/images/PizzaRomana.jpeg'

export const allProductsData = [
  {
    id: 'cheese-pizza',
    ItemImg: CheesePizza,
    ItemName: 'Cheese Pizza',
    ItemIngredients: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (100).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },

  {
    id: 'veggie-pizza',
    ItemImg: VeggiePizza,
    ItemName: 'Veggie Pizza',
    ItemIngredients:
      'Pizza sauce, Onion, Capsicum, Pineapple, Ginger, Hotshot sauce, Coriander, Garlic sauce, Butter sauce, Cheese.',
    ItemPrice: (150).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'pepperoni-pizza',
    ItemImg: PepperoniPizza,
    ItemName: 'Pepperoni Pizza',
    ItemIngredients:
      'Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.',
    ItemPrice: (180).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'meat-pizza',
    ItemImg: MeatPizza,
    ItemName: 'Meat Pizza',
    ItemIngredients:
      'Sausage, pizza dough, bacon, pizza sauce, red pepper flakes.',
    ItemPrice: (250).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'margherita-pizza',
    ItemImg: MargheritaPizza,
    ItemName: 'Margherita Pizza',
    ItemIngredients:
      'Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.',
    ItemPrice: (120).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'bbq-chicken-pizza',
    ItemImg: BBQPizza,
    ItemName: 'BBQ Chicken Pizza',
    ItemIngredients:
      'Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.',
    ItemPrice: (220).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'alla-pala-pizza',
    ItemImg: AllaPalla,
    ItemName: 'Pizza alla pala',
    ItemIngredients: 'Cheese, cherry tomatoes, arugula, olive oil, yeast.',
    ItemPrice: (135).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'prosciutto-e-funghi-pizza',
    ItemImg: Prosciutto,
    ItemName: 'Prosciutto e Funghi Pizza',
    ItemIngredients:
      'Italian sausage meat, truffle oil, pizza dough, san marzano tomatoes, bocconcini cheese.',
    ItemPrice: (240).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'detroit-style-pizza',
    ItemImg: DetroitStyle,
    ItemName: 'Detroit-Style Pizza',
    ItemIngredients:
      'Pizza dough, pizza sauce, brick cheese, rapid rise yeast, olive oil.',
    ItemPrice: (110).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'garlic-fingers',
    ItemImg: GarlicFingers,
    ItemName: 'Garlic Fingers',
    ItemIngredients:
      'Bread flour, mozzarella cheese, butter, olive oil, instant yeast.',
    ItemPrice: (130).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'st-ouis-style-pizza',
    ItemImg: StLous,
    ItemName: 'St. Louis-Style Pizza',
    ItemIngredients:
      'Liquid smoke, swiss cheese, white cheddar cheese, light corn syrup, pizza sauce.',
    ItemPrice: (115).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'rustica-pizza',
    ItemImg: Rustica,
    ItemName: 'Pizza Rustica',
    ItemIngredients: 'Prosciutto, pepperoni, mozzarella, crust, eggs.',
    ItemPrice: (190).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'pesto-genovese-pizza',
    ItemImg: Genovese,
    ItemName: 'Pizza pesto Genovese',
    ItemIngredients:
      'Pine nuts, baby potatoes, snow pea shoots, lemon, buffalo mozzarella.',
    ItemPrice: (175).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'e-fichi-pizza',
    ItemImg: Efichi,
    ItemName: 'Pizza e fichi',
    ItemIngredients: 'Coconut flour, truffle oil, fig jam, cheese, prosciutto.',
    ItemPrice: (180).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'apizza-pizza',
    ItemImg: Apizza,
    ItemName: 'Apizza',
    ItemIngredients:
      'Ricotta cheese, tomato sauce, fresh basil pesto, fresh mozzarella cheese, semolina flour.',
    ItemPrice: (110).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'stuffed-pizza',
    ItemImg: StuffedPizza,
    ItemName: 'Stuffed Pizza',
    ItemIngredients:
      'Hot italian sausage, sweet italian sausage, pizza dough, red pepper flakes, olive oil.',
    ItemPrice: (210).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'pugliese-pizza',
    ItemImg: Pugliese,
    ItemName: 'Pugliese Pizza',
    ItemIngredients:
      'Sloppy joe, banana peppers, ground beef, pizza dough, ricotta cheese.',
    ItemPrice: (260).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'tomato-pie',
    ItemImg: TomatoPie,
    ItemName: 'Tomato Pie',
    ItemIngredients:
      'Pizza dough, san marzano, red pepper flakes, pizza stone, olive oil.',
    ItemPrice: (90).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'fugazza',
    ItemImg: Fugaza,
    ItemName: 'Fugazza',
    ItemIngredients: 'Mozzarella cheese, sugar, dry yeast, all purpose flour.',
    ItemPrice: (105).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'fiori-di-zucca',
    ItemImg: DiZucca,
    ItemName: 'Pizza fiori di zucca',
    ItemIngredients:
      'Zucchini blossoms, pizza dough, buffalo mozzarella, olive oil.',
    ItemPrice: (140).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'fugazzeta',
    ItemImg: Fugazeta,
    ItemName: 'Fugazzeta',
    ItemIngredients:
      'Feta cheese, mozzarella cheese, parmesan cheese, olive oil, yeast.',
    ItemPrice: (130).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'carbonara-pizza',
    ItemImg: Carbonara,
    ItemName: 'Pizza Carbonara',
    ItemIngredients:
      'Refrigerated pizza crust, monterey jack cheese, parmesan cheese, butter, chicken bouillon.',
    ItemPrice: (230).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'grandma-pie',
    ItemImg: GranmaPie,
    ItemName: 'Grandma Pie',
    ItemIngredients:
      'Dark brown sugar, san marzano tomatoes, tomato paste, bread flour, red pepper flakes.',
    ItemPrice: (120).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'pizza-al-padellino',
    ItemImg: Padellino,
    ItemName: 'Pizza al padellino',
    ItemIngredients:
      'Mozzarella cheese, prosciutto di parma, dough, baby arugula, black pepper',
    ItemPrice: (130).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'california-style-pizza',
    ItemImg: CaliforniaStyle,
    ItemName: 'California-Style Pizza',
    ItemIngredients:
      'Feta cheese, marinated artichoke hearts, pizza crust, red bell pepper, red onion.',
    ItemPrice: (100).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'pizza-fritta',
    ItemImg: Fritta,
    ItemName: 'Pizza fritta',
    ItemIngredients:
      'Ricotta cheese, tomato sauce, tipo 00, neapolitan pizza base, mozzarella cheese.',
    ItemPrice: (180).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'pinsa-romana',
    ItemImg: Romana,
    ItemName: 'Pinsa romana',
    ItemIngredients:
      'Rice flour, olive oil, plain flour, sea salt, dried yeast.',
    ItemPrice: (170).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'chicago-thin-crust-pizza',
    ItemImg: ThinCrust,
    ItemName: 'Chicago Thin Crust Pizza',
    ItemIngredients:
      'Sweet italian sausage, semolina flour, pizza sauce, giardiniera, sugar.',
    ItemPrice: (190).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'greek-style-pizza',
    ItemImg: GreekStyle,
    ItemName: 'Greek-Style Pizza',
    ItemIngredients:
      'White cheddar, sauce, tomato paste, bread flour, red pepper flakes.',
    ItemPrice: (140).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'pizza-romana',
    ItemImg: PizzaRomana,
    ItemName: 'Pizza Romana',
    ItemIngredients: 'Fresh mozzarella, bread flour, tomato, olive oil, yeast',
    ItemPrice: (125).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        items: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'chicken-alfredo',
    ItemImg: ChickenAlfredo,
    ItemName: 'Chicken Alfredo',
    ItemIngredients:
      'Skinless chicken breast, heavy cream, olive oil, parmigiano reggiano, black pepper.',
    ItemPrice: (150).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'pasta-alla-gricia',
    ItemImg: AllaGricia,
    ItemName: 'Pasta Alla Gricia',
    ItemIngredients:
      'Rigatoni pasta, pancetta, olive oil, pecorino romano, black pepper.',
    ItemPrice: (110).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'sheet-pan-burrata-caprese-gnocchi',
    ItemImg: SheetPan,
    ItemName: 'Sheet-Pan Burrata Caprese Gnocchi',
    ItemIngredients:
      'Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.',
    ItemPrice: (175).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'penne-alla-vodka',
    ItemImg: AllaVodka,
    ItemName: 'Penne Alla Vodka',
    ItemIngredients:
      'Tomato sauce, penne, heavy cream, red pepper flakes, butter.',
    ItemPrice: (150).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'baked-spaghetti',
    ItemImg: BakedSpaghetti,
    ItemName: 'Baked Spaghetti',
    ItemIngredients:
      'Ground beef, spaghetti, olive oil, crushed tomatoes, basil.',
    ItemPrice: (190).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'cacio-e-pepe-potato-gnocchi',
    ItemImg: PotatoGnocchi,
    ItemName: 'Cacio e Pepe Potato Gnocchi',
    ItemIngredients:
      'Green beans, potato gnocchi, green peas, pecorino romano cheese, black pepper.',
    ItemPrice: (150).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'ultimate-baked-ziti',
    ItemImg: BakedZiti,
    ItemName: 'Ultimate Baked Ziti',
    ItemIngredients:
      'Bulk italian sausage, ricotta cheese, tomato sauce, red pepper flakes, mozzarella cheese.',
    ItemPrice: (180).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'cacio-e-pepe',
    ItemImg: CacioPepe,
    ItemName: 'Cacio e Pepe',
    ItemIngredients: 'Spaghetti, parmesan, butter, black pepper.',
    ItemPrice: (135).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'pasta-puttanesca',
    ItemImg: PastaPuttanesca,
    ItemName: 'Pasta Puttanesca',
    ItemIngredients:
      'Spaghetti, kalamata olives, red pepper flakes, capers, diced tomatoes.',
    ItemPrice: (120).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'italian-pasta-salad',
    ItemImg: ItalianPastaSalad,
    ItemName: 'Italian Pasta Salad',
    ItemIngredients:
      'Bell peppers, fresh mozzarella pearls, honey, dijon mustard, rotini.',
    ItemPrice: (140).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'lasagna-roll-ups',
    ItemImg: Lasagna,
    ItemName: 'Lasagna Roll Ups',
    ItemIngredients:
      'Ricotta cheese, lasagna noodles, homemade marinara sauce, frozen spinach, parmesan cheese.',
    ItemPrice: (190).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'toasted-ravioli',
    ItemImg: ToastedRavioli,
    ItemName: 'Toasted Ravioli',
    ItemIngredients:
      'Frozen cheese ravioli, jar spaghetti sauce, bread crumbs, parmesan cheese, egg.',
    ItemPrice: (200).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'orecchiette-with-broccoli-rabe',
    ItemImg: OrecchietteBroccoli,
    ItemName: 'Orecchiette with Broccoli Rabe',
    ItemIngredients:
      'Broccoli rabe, andouille sausage links, orecchiette, lemon, red pepper flakes.',
    ItemPrice: (180).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'lamb-ragu',
    ItemImg: LambRagu,
    ItemName: 'Lamb Ragù',
    ItemIngredients:
      'Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.',
    ItemPrice: (175).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'lasagna-bolognese',
    ItemImg: LasagnaBolognese,
    ItemName: 'Lasagna Bolognese',
    ItemIngredients:
      'Ground italian sausage, ground beef, ground pork, bolognese sauce, lasagna noodles.',
    ItemPrice: (190).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'lemon-ricotta-pasta',
    ItemImg: LemonRicotta,
    ItemName: 'Lemon Ricotta Pasta',
    ItemIngredients: 'Spaghetti, ricotta, lemon, red pepper flakes, parmesan.',
    ItemPrice: (130).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'stuffed-rigatoni',
    ItemImg: StuffedRigatoni,
    ItemName: 'Stuffed Rigatoni',
    ItemIngredients:
      'Ground turkey, rigatoni pasta, red pepper, mozzarella, parmesan.',
    ItemPrice: (170).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'five-cheese-ziti-al-forno',
    ItemImg: FiveCheese,
    ItemName: 'Five-Cheese Ziti Al Forno',
    ItemIngredients:
      'Alfredo sauce, ricotta cheese, ziti pasta, marinara sauce, fontina cheese.',
    ItemPrice: (200).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'chicken-florentine-pasta',
    ItemImg: ChickenFlorentine,
    ItemName: 'Chicken Florentine Pasta',
    ItemIngredients:
      'Skinless chicken breasts, linguine pasta, chicken broth, butter, baby spinach.',
    ItemPrice: (190).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'italian-mac-and-cheese',
    ItemImg: MacCheese,
    ItemName: 'Italian Mac and Cheese',
    ItemIngredients:
      'Italian sausage, pasta, cheese sauce, cream, baby spinach.',
    ItemPrice: (180).toFixed(2),
    Category: 'Pasta',
    attributes: [],
  },
  {
    id: 'mirinda',
    ItemImg: Mirinda,
    ItemName: 'Mirinda Can (300 ml)',
    ItemPrice: (40).toFixed(2),
    Category: 'Drinks',
    attributes: [],
  },
  {
    id: 'fanta',
    ItemImg: Fanta,
    ItemName: 'Fanta Can (300 ml)',
    ItemPrice: (40).toFixed(2),
    Category: 'Drinks',
    attributes: [],
  },
  {
    id: 'mountain-dew',
    ItemImg: MountainDew,
    ItemName: 'Mountain Dew Can (300 ml)',
    ItemPrice: (40).toFixed(2),
    Category: 'Drinks',
    attributes: [],
  },
  {
    id: '7up',
    ItemImg: _7Up,
    ItemName: '7Up Can (300 ml)',
    ItemPrice: (40).toFixed(2),
    Category: 'Drinks',
    attributes: [],
  },
  {
    id: 'sprite',
    ItemImg: Sprite,
    ItemName: 'Sprite Can (300 ml)',
    ItemPrice: (40).toFixed(2),
    Category: 'Drinks',
    attributes: [],
  },
  {
    id: 'thums-up',
    ItemImg: ThumsUp,
    ItemName: 'Thums Up Can (300 ml)',
    ItemPrice: (40).toFixed(2),
    Category: 'Drinks',
    attributes: [],
  },
  {
    id: 'pepsi',
    ItemImg: Pepsi,
    ItemName: 'Pepsi Can (300 ml)',
    ItemPrice: (40).toFixed(2),
    Category: 'Drinks',
    attributes: [],
  },
  {
    id: 'coca-cola',
    ItemImg: CocaCola,
    ItemName: 'Coca-Cola Can (300 ml)',
    ItemPrice: (40).toFixed(2),
    Category: 'Drinks',
    attributes: [],
  },
  {
    id: 'aquafina-mineral-water',
    ItemImg: Aquafina,
    ItemName: 'Aquafina Purified Water (1 L)',
    ItemPrice: (25).toFixed(2),
    Category: 'Drinks',
    attributes: [],
  },
  {
    id: 'penne-alla-vodka-sale',
    ItemImg: AllaVodka,
    ItemName: 'Penne Alla Vodka',
    ItemIngredients:
      'Tomato sauce, penne, heavy cream, red pepper flakes, butter.',
    ItemPriceBefore: (150).toFixed(2),
    ItemPrice: (130).toFixed(2),
    Category: 'Sale',
    sale: true,
    attributes: [],
  },
  {
    id: 'italian-mac-and-cheese-sale',
    ItemImg: MacCheese,
    ItemName: 'Italian Mac and Cheese',
    ItemIngredients:
      'Italian sausage, pasta, cheese sauce, cream, baby spinach.',
    ItemPriceBefore: (180).toFixed(2),
    ItemPrice: (150).toFixed(2),
    Category: 'Sale',
    sale: true,
    attributes: [],
  },
  {
    id: 'meat-pizza-sale',
    ItemImg: MeatPizza,
    ItemName: 'Meat Pizza',
    ItemIngredients:
      'Sausage, pizza dough, bacon, pizza sauce, red pepper flakes.',
    ItemPriceBefore: (250).toFixed(2),
    ItemPrice: (210).toFixed(2),
    Category: 'Sale',
    sale: true,
    attributes: [],
  },
  {
    id: 'pepperoni-pizza-sale',
    ItemImg: PepperoniPizza,
    ItemName: 'Pepperoni Pizza',
    ItemIngredients:
      'Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.',
    ItemPriceBefore: (180).toFixed(2),
    ItemPrice: (150).toFixed(2),
    Category: 'Sale',
    sale: true,
    attributes: [],
  },
  {
    id: 'veggie-pizza-sale',
    ItemImg: VeggiePizza,
    ItemName: 'Veggie Pizza',
    ItemIngredients:
      'Pizza sauce, Onion, Capsicum, Pineapple, Ginger, Hotshot sauce, Coriander, Garlic sauce, Butter sauce, Cheese.',
    ItemPriceBefore: (150).toFixed(2),
    ItemPrice: (125).toFixed(2),
    Category: 'Sale',
    sale: true,
    attributes: [],
  },
  {
    id: 'margherita-pizza-sale',
    ItemImg: MargheritaPizza,
    ItemName: 'Margherita Pizza',
    ItemIngredients:
      'Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.',
    ItemPriceBefore: (120).toFixed(2),
    ItemPrice: (100).toFixed(2),
    Category: 'Sale',
    sale: true,
    attributes: [],
  },
  {
    id: 'cheese-pizza-sale',
    ItemImg: CheesePizza,
    ItemName: 'Cheese Pizza',
    ItemIngredients: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPriceBefore: (100).toFixed(2),
    ItemPrice: (85).toFixed(2),
    Category: 'Sale',
    sale: true,
    attributes: [],
  },
]
