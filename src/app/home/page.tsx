import { Button } from "@/components/Button/Button";
import "./homePage.css";

export default function HomePage() {
    return (
        <section className="hero-container">
            <div className="hero-text">
                <h1>Reserve Your Spot in Nature</h1>
                <p>
                    Green Valley makes it easy to find and reserve tables, spots, and more in your favorite park. 
                    Whether you&apos;re planning a picnic, a gathering, or just some quiet time in nature, 
                    we&apos;ve got you covered. Explore, book, and enjoy seamlessly.
                </p>
                <Button variant="secondary">Reserve Now</Button>
            </div>
        </section>
    );
}
