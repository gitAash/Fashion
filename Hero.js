import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Getting the best <span>and</span> latest style has never <span>been easier!</span></h1>
                <p><strong>StarFashion</strong> is a platform that helps to make fashion accessible to all! It brings fashion to your doorstep.</p>
                <button>Shop collections</button>
                <div className="features">
                    <span>Free Register</span>
                    <span>Great Service</span>
                    <span>Easy Payment</span>
                </div>
            </div>
            <div className="hero-images">
                <img src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" alt="Shopping Image 1" />
                <img src="https://thumbs.dreamstime.com/b/pregnant-french-woman-coat-taking-overalls-shopping-bag-beige-background-stock-image-pregnant-french-woman-coat-201033704.jpg" alt="Shopping Image 2" />
            </div>
        </section>
    );
}

export default Hero;
