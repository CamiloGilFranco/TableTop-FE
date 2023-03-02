import "./AlwaysFirstComponent.css";

const AlwaysFirstComponent = () => {
  return (
    <div className="always-first-component-container">
      <span className="always-first-component-title">Always First</span>
      <p className="always-first-component-paragraph">
        Be the first to find out latest deals and exclusive offers and get 15%
        off your first order
      </p>
      <input
        type="text"
        placeholder="Enter your email"
        className="always-first-component-input"
      />
      <button className="always-first-component-button">Be The First</button>
    </div>
  );
};

export default AlwaysFirstComponent;
