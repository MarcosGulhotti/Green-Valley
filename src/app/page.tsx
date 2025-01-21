import Image from "next/image";
import './homePage.css';

export default function HomePage() {
    return (
        <div className="imageContainer">
            <div>
                <div className="sky">
                    <Image
                        src="/images/sky.jpg"
                        alt="sky"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="valley">
                    <Image
                        src="/images/valley.png"
                        alt="valley"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                {/* <div className="hero-text">
                    <h1>Reserve Your Spot in Nature</h1>
                    <p>
                        Green Valley makes it easy to find and reserve tables, spots, and more in your favorite park. Whether you&apos;re planning a picnic, a gathering, or just some quiet time in nature, we&apos;ve got you covered. Explore, book, and enjoy seamlessly.
                    </p>
                </div> */}
            </div>
        </div>
    );
}
