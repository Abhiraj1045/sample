
import { useEffect, useState } from 'react';
import './App.css';
const gtag  =window.gtag;

function App() {

  let [products, setProducts] = useState([]);
  
  let [searchText, setSearchText] = useState('');

  const fetchData = async ()=>{
     const response  = await fetch('https://fakestoreapi.com/products')
     setProducts(await response.json());
  }
  useEffect(()=>{
    fetchData()
  },[]);
const generate = ()=>{
  gtag('event','conversion',{'send_to':'AW-968460549/PnbOCNvrv7IZEIWS5s0D'})
}
console.log('render')
  return (
    <div className="App">
      <button onClick={generate}>Generate Conversion</button>
      <div className='searchText'>
        <input type='search' placeholder="Search the product" onChange={(e)=>{setSearchText(e.target.value)}}></input>
      </div>
      {/* {products.length>0 ?  */}
      <ul>
      {
      products.filter((product)=> product.title.includes(searchText)).map(product=>{
        return <li key={product.title}>
        <h3>{product.title}</h3>
        <h6>{product.price}</h6>
        <span>{product.description}</span>
        </li>
      })}
    </ul>
    {/* :<h4>No Data Available</h4> } */}
    
    </div>
  );
}

export default App;
