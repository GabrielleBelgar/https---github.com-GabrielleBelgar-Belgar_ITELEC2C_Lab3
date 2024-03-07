function Header() {
  return (
    <div className="header">
      <img src="./images/bg-image.png"></img>

      <div className="card-1">
        <img src="./images/promos.png" width="10px" height="100px"></img>
        <div class="text-container">
          <p>Promos</p>
        </div>
      </div>

      <div className="card-2">
        <img src="./images/supercard.png" width="10px" height="100px"></img>
        <div class="text-container">
          <p>Supercard Exclusives</p>
        </div>
      </div>

      <div className="card-3">
        <img src="./images/pizza.png" width="10px" height="100px"></img>
        <div class="text-container">
          <p>Pizza</p>
        </div>
      </div>

      <div className="card-4">
        <img src="./images/chicken.png" width="10px" height="100px"></img>
        <div class="text-container">
          <p>Chicken 'n Mojos</p>
        </div>
      </div>

      <div className="backBtn">
        <button className="backBtn1">
          <img src="./images/icon-back1.png"></img>
        </button>

        <button className="backBtn2">
          <img src="./images/icon-back2.png"></img>
        </button>
      </div>
    </div>
  );
}
export default Header;
