import Image from "next/image";
import type { CardProps } from "./@types";
import './Card.css';

export function Card({ title, description, image, ...rest }: CardProps) {
    return (
        <div className="card-container" {...rest}>
            <div className="card-image-container">
                <Image
                    src={image}
                    alt={title}
                    className="card-image"
                    width={150}
                    height={150}
                />
            </div>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}