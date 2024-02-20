import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
    <Navbar/>
    <Header/>
    <Banner/>
    <Product/>
     <GridLayout />
     <More/>
    </div>

  );
}

function Navbar(){
  return(
    <div className="navbar">
      <a href="#">Home</a>
      <a href="#">Menu</a>
      <a href="#">Promos</a>
      <a href="#">Order Tracking</a>
      <a href="#">Supercard+</a>
      <a href="#">Book a Party</a>

      <button>Login</button>

      <div className='button'>
        <img src='./images/icon-search.png'></img>
        <img src='./images/icon-cart.png' ></img>

      <div className="logo">
        <img src="./images/shakeys-logo.png"></img>
      </div>
    </div>
    </div>
    );
}

function Header(){
  return(
    <div className='header'>
      <img src="./images/bg-image.png"></img>

    <div className='backBtn'>
    <img src='./images/icon-back1.png'></img>
    <img src='./images/icon-back2.png'></img>

    <div className='menu'>
    <img src='./images/promos.png'></img>
    <img src='./images/supercard.png'></img>
    <img src='./images/pizza.png'></img>
    <img src='./images/chicken.png'></img>
    <img src='./images/grpmeal.png'></img>
    </div>
    </div>
    </div>

  );
}

function Banner(){
  return(
    <div className='banner'>
      <img src="./images/banner.png"></img>
    </div>
  )
}

function Product(){
  return(
    <div className='title'>
      <h2>All Products</h2>
      </div>
  );
}

const GridLayout = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <h4>Classic Beef N' Onion Pizza Americana</h4>
        <p>SUPERSIZED 18-inch classic pizza oozing with Pure Mozzarella Cheese topped with premium
          ground beef and...
          <br></br><br></br>
          Starts at
          <br></br>
        </p>
        <h6>₱1,179.00</h6>
        <button>Order</button>

        <div className='productimg'>
        <img src="./images/beef-n-onion.png"></img>
        </div>

      </div>
        
      <div className="grid-item">
        <h4>Classic Cheese Pizza Americana</h4>
        <p>SUPERSIZED 18-inch classic pizza oozing with Pure Mozzarella Cheese, irresistibly cheesy!
          <br></br><br></br>
          Starts at
          <br></br>
        </p>
        <h6>₱1,179.00</h6>
        <button>Order</button>
        
        <div className='productimg'>
        <img src="./images/Cheese.png"></img>
        </div>

      </div>

      <div className="grid-item">
        <h4>Classic Spinach Pizza Americana</h4>
        <p>The perfect balance of your creamy spinach and a blend of different cheeses.
          <br></br><br></br>
          Starts at
          <br></br>
        </p>
        <h6>₱1,299.00</h6>
        <button>Order</button>
        
        <div className='productimg'>
        <img src="./images/spinach.png"></img>
        </div>

      </div>

      <div className="grid-item">
        <h4>Glazed Bacon Pizza Americana</h4>
        <p>NEW Pizza Americana Glazed Bacon, 18-inch savory pizza topped with sweet, crisp bacon and parsley
          <br></br><br></br>
          Starts at
          <br></br>
        </p>
        <h6>₱1,329.00</h6>
        <button>Order</button>
        
        <div className='productimg'>
        <img src="./images/bacon.png"></img>
        </div>

      </div>

      <div className="grid-item">
        <h4>Hawaiian Delight Pizza Americana</h4>
        <p>SUPERSIZED 18-inch pizza topped with ham and pineapples made with 100% Mozzarella Cheese!
          <br></br><br></br>
          Starts at
          <br></br>
        </p>
        <h6>₱1,179.00</h6>
        <button>Order</button>
        
        <div className='productimg'>
        <img src="./images/hawaiian.png"></img>
        </div>

      </div>

      <div className="grid-item">
        <h4>Hi Protein Pizza Americana</h4>
        <p>SUPERSIZED 18-inch ALL-MEAT pizza packed with beef, salami, pepperoni, ham and Italian sausage topped with a...
          <br></br><br></br>
          Starts at
          <br></br>
        </p>
        <h6>₱1,329.00</h6>
        <button>Order</button>
        
        <div className='productimg'>
        <img src="./images/protein.png"></img>
        </div>

      </div>
    </div>
    
  );
};

function More(){
  return(
    <div className='more'>
      <button>LOAD MORE PRODUCTS</button>
    </div>
  )
}


export default App;