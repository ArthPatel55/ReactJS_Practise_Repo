import logo from './logo512.png';
const reactDescription = ['Fundamental','Crucial' ,'Core'];
function genRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}
function App() {
  return (
    <>
    <img src={logo} alt="react_logo" />
     <h1>hello {reactDescription[genRandomInt(2)]}, cerate react app </h1>
    </>
  );
}
export default App;
