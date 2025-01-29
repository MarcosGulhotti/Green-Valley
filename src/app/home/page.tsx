import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import "./homePage.css";

export default function HomePage() {
    return (
        <div>

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
            <div className="info-cards-section">
                <h1 className="info-cards-title">Why Choose Green Valley?</h1>
                <div className="info-cards-container">
                    <Card
                        image={"/images/info-cards/image-1.png"}
                        title={"Effortless Booking"}
                        description="Reserve tables, picnic spots, and more in just a few clicks. Our intuitive interface makes planning your day a breeze."
                    />
                    <Card
                        image={"/images/info-cards/image-2.png"}
                        title={"Real-Time Updates"}
                        description="View live availability and choose the perfect spot for your visit. No surprises, just seamless planning."
                    />
                    <Card
                        image={"/images/info-cards/image-3.png"}
                        title={"Customizable Options"}
                        description="Personalize your park experience by selecting spots that meet your preferences. Flexibility at its best."
                    />
                </div>
                <Button variant="secondary" style={{ alignSelf: 'center' }}>Get Started</Button>
            </div>
        </div>
    );
}
