import arcbookLogo from '/arcbooks-logo.png';

export function App() {
  return (
    <div>
      <a href="#" target="_blank">
        <img src={arcbookLogo} className="logo" alt="Arcbooks logo" />
      </a>
      <button className="btn">Add to Cart</button>

      <Book />
    </div>
  );
}

export function Book() {
  return (
    <div>
      <h2>Book Title</h2>
    </div>
  );
}
