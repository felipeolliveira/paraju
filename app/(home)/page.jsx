import { Dinosaur, Ground } from "./components/dinosaur";

function Home() {
  return (
    <main className="main">
      <Dinosaur className="dinosaur" />
      <div className="ground">
        <Ground />
        <Ground />
        <Ground />
      </div>
      <h1>Te amo, minha magnífica esposa ❤️</h1>
    </main>
  );
}

export default Home;