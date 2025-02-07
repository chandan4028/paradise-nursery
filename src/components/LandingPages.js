import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPages.css";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <div className="overlay">
                <h1>Paradise Nursery</h1>
                <p>Discover the beauty of houseplants and bring nature into your home.</p>
                <button onClick={() => navigate("/products")}>Get Started</button>
            </div>
        </div>
    );
};

export default LandingPage;