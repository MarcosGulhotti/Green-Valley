import { Button } from "@/components/Button/Button";
import { Infos } from "@/components/Infos/Infos";
import { Reviews } from "@/components/Reviews/Reviews";
import { Steps } from "@/components/Steps/Steps";
import "./homePage.css";
import infos from './mocks/infos.json';
import reviews from './mocks/reviews.json';
import steps from './mocks/steps.json';

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

            <section className="info-cards-section">
                <h1 className="info-cards-title">Why Choose Green Valley?</h1>
                <div className="info-cards-container">
                    <Infos infos={infos} />
                </div>
                <Button size="large" variant="secondary" style={{ alignSelf: 'center', marginTop: 20 }}>Get Started</Button>
            </section>

            <section className="visit-section">
                <h1 className="visit-section-title">Plan Your Visit in 3 Easy Steps</h1>
                <Steps steps={steps} />
                <Button size="large" variant="secondary" style={{ alignSelf: 'center', marginTop: 20 }}>Start Planning Now</Button>
            </section>

            <section className="reviews-section">
                <h1 className="reviews-section-title">Loved by Park-Goers Everywhere</h1>
                <Reviews reviews={reviews} />
                <div className="reviews-cta">
                    <Button size="large" variant="secondary">Join Thousands of Happy Park-Goers</Button>
                </div>
            </section>
        </div>
    );
}
