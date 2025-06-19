import logo from './logo.svg';
import './App.css'; //app.css file is already imported
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import NewForm from './components/NewForm';
function funcprint(prod){
  console.log("I am inside app.js");
  console.log(prod);
}
function App() {
  return (<div>
    <div>
     <NewForm onPropfunc={funcprint}></NewForm>
    </div>
    <div>


      <Item name="Nirma"></Item>
      <ItemDate day="20" month="June" year="1998"></ItemDate>

      <Item name="Surf-excel"></Item>
      <ItemDate day="22" month="July" year="2000"></ItemDate>

      <Item name="555"></Item>
      <ItemDate day="20" month="Sept" year="2010"></ItemDate>

      
    <div className="App">Hello World</div>
      
      </div>
   </div>
    
  );
}

export default App;
