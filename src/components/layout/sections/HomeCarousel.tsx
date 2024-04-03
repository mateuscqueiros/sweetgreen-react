export function HomeCarouselSection() {
  return (
    <section id="food-presentation">
      <div className="carousel-header">
        <ul className="food-classes">
          <li className="active" id="salads-button">
            Salads
          </li>
          <li id="bowls-button">Warm Bowls</li>
          <li id="sides-button">Sides</li>
        </ul>
      </div>
      <div className="carousel-content">
        <div className="tab-content active" id="salads-content">
          <div className="food-card">
            <div className="card-image">
              <button type="button" className="button">
                Popular
              </button>
              <img src="assets/images/kale-caesar.jpg" alt="Kale Caesar" />
            </div>
            <div className="card-content">
              <h3>Kale Caesar</h3>
              <p>
                Roasted chicken, tomatoes, parmesan crispes, shaved parmesan,
                shredded kale, chopped romaine, lime squeeze, caesar dressing
              </p>
              <a href="#" className="order-button">
                <span className="text">Order now</span>
                <img src="assets/icons/arrow-right.svg" alt="Order now" />
              </a>
            </div>
          </div>
          <div className="food-card">
            <div className="card-image">
              <button type="button" className="button">
                Popular
              </button>
              <img src="assets/images/guacamole.webp" alt="Guacamole" />
            </div>
            <div className="card-content">
              <h3>Guacamole Greens</h3>
              <p>
                Roasted chicken, tomatoes, parmesan crispes, shaved parmesan,
                shredded kale, chopped romaine, lime squeeze, caesar dressing
              </p>
              <a href="#" className="order-button">
                <span className="text">Order now</span>
                <img src="assets/icons/arrow-right.svg" alt="Order now" />
              </a>
            </div>
          </div>
          <div className="food-card">
            <div className="card-image">
              <button type="button" className="button">
                Popular
              </button>
              <img
                src="assets/images/buffalo-chicken.jpg"
                alt="Buffalo Chicken"
              />
            </div>
            <div className="card-content">
              <h3>Buffalo Chicken</h3>
              <p>
                Roasted chicken, tomatoes, parmesan crispes, shaved parmesan,
                shredded kale, chopped romaine, lime squeeze, caesar dressing
              </p>
              <a href="#" className="order-button">
                <span className="text">Order now</span>
                <img src="assets/icons/arrow-right.svg" alt="Order now" />
              </a>
            </div>
          </div>
        </div>
        <div className="tab-content" id="bowls-content">
          <span>Bowls content</span>
        </div>
        <div className="tab-content" id="sides-content">
          <span>Sides content</span>
        </div>
      </div>
    </section>
  );
}
