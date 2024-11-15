import CardList from "./components/CardList";
import pic1 from "./assets/Amharic.png";
import pic2 from "./assets/English.png";
import pic3 from "./assets/EnvironmentalScience.png";
import pic4 from "./assets/Mathematics.png";
import "./App.css"
const cardData = [
  {
    image: pic1,
    title: "Amahric",
    description: "This book builds fifth graders' Amharic language skills through reading, writing, and grammar exercises, with stories and proverbs that reflect Ethiopian culture.",
  },
  {
    image: pic2,
    title: "English",
    description: "Designed to improve reading, writing, and speaking skills, this English book includes stories, grammar lessons, and vocabulary exercises to enhance comprehension and communication.",
  },
  {
    image: pic3,
    title: "Environmental Science",
    description: "Students learn about ecosystems, natural resources, and environmental protection, with hands-on activities to inspire responsibility towards nature.",
  },
  {
    image: pic4,
    title: "Mathematics",
    description: "This math book covers basic arithmetic, fractions, geometry, and problem-solving skills, providing students with a strong foundation in key math concepts.",
  },
];

function App() {
  
  return (
    <div className="App">
    <h1>Ethiopian Books For Fifth Grade</h1>
    <CardList cards={cardData} />;
    </div>
  );
}

export default App;
