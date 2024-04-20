import { UsersAndTasksCardsListContainer } from "./components/users-and-tasks-card/UsersAndTasksCardsListContainer";


function App() {
  return (
    <div className="App">
      <h1>FTL Assignment</h1>
      <UsersAndTasksCardsListContainer />
    </div>
  );
}

export default App;

type Groceries<GroceryType> = {
  grocery: GroceryType
  price: number
  func: () => void
}

const groceries: Groceries<string> = {
  grocery: "milk",
  price: 6.78,
  func: function () { }
}

interface User {
  name: string
  email: string
}

interface Player extends User {
  faveGame: string
}

interface Player {
  yearsOfXp: num
}

type num = number

const player: Player = {
  name: "Dekel",
  email: "dekel",
  faveGame: "GPT",
  yearsOfXp: 3
}

type Status = "Open" | "Close" | "Pending"

const status: Status = "Pending"

enum WeatherType {
  "warm",
  "cold",
  "hot"
}

interface Weather {
  day: Date
  weatherType: WeatherType
}

const weather: Weather = {
  day: new Date(),
  weatherType: WeatherType.cold
}


function sortingArray(arr: Array<number>): Array<number> {
  const sortedArr: Array<number> = []
  for (let i = 1; i < arr.length; i++) {
    if (sortedArr.length === 0) sortedArr.unshift(arr[i - 1])
    if (arr[i] > arr[-1] && arr[i] < arr[i + 1]) {
      console.log(arr[i]);

      sortedArr.splice(i, 0, arr[i])
    } else {
      sortedArr.push(arr[i])
    }
  }
  return sortedArr
}

console.log(sortingArray([1, 5, 2, 6, 3, 1]));




