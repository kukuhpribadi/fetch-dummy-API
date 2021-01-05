// import Biodata from "./components/Biodata";
// import Component1 from "./components/Component1";
// import Component2 from "./components/Component2";
// import Component4 from "./components/Component4";
// import Counter from "./components/Counter";
// import NewBiodata from "./components/NewBiodata";
// import FormInput from "./components/FormInput";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container mt-3">
      {/* <Component1 />
      <Component2 /> */}
      {/* <Biodata nama={"Bambang Pamungkas"} umur={26} hobi={<Hobi />} />
      <Biodata nama={"Cunil"} umur={21} />
      <hr />
      <NewBiodata nama="Dasrso" umur="22" hobi={<Hobi />} /> */}
      {/* <Component4 /> */}
      {/* <Counter />
      <Counter /> */}

      {/* <FormInput /> */}
      <h1>fetch data from API</h1>
      <hr />
      <Posts />
    </div>
  );
}

// const Hobi = () => {
//   return (
//     <ul>
//       <ul>
//         <li>Joging</li>
//         <li>Membaca</li>
//         <li>Sepeda</li>
//       </ul>
//     </ul>
//   );
// };

export default App;
