import Navigation from "./components/Navigation/Main";
import Hero from "./components/Hero/Main";
import Footer from "./components/Footer";

const HeroData = {
  heading: {
    normal: "My Webpage is so",
    bolded: "FLY",
    rest: "It makes the girls drip!",
  },
  description:
    "This is the description, It includes Lorem Ipsum generally for extending the text but im being funky and making a random line out of whatever comes in my mind right now. CYA!",
  button: { link: "https://www.aazizandco.co.uk", text: "Text" },
};

// /* <div>
//     <Navigation />
//     <Hero heading={HeroData.heading} description={HeroData.description} button={HeroData.button} />
//     <Footer />
//   </div> */

function App() {
  return (
    <div>
      <Navigation />
      <Hero heading={HeroData.heading} description={HeroData.description} button={HeroData.button} />
      <Footer />
    </div>
  );
}

export default App;
