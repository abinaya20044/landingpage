import MidSection from "./components/MidSection";
import Header from "./components/Header";
import bg from "./images/landing.png";
import Articles from "./components/Articles";
import "./styles.css";
function App() {
  const styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    animation: "moveBackground 50s linear infinite",

  }
  return (
    <main className="min-h-100vh w-full overflow-hidden" style={styles} >
      <Header/>
      <div className="w-full xl:max-w-[1250px] mx-auto px-6 ">
        <MidSection/>
        <Articles />
      </div>
    </main>
  );
}
export default App;