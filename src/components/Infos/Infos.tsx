import Image from "next/image";
import type { InfosProps } from "./@types";
import './Infos.css';

/**
 * Component to render a list of information cards.
 *
 * @param {InfosProps} props - The properties object.
 * @param {Array} props.infos - An array of information objects to be displayed.
 * @param {string} props.infos[].image - The URL of the image to be displayed on the card.
 * @param {string} props.infos[].title - The title of the information card.
 * @param {string} props.infos[].description - The description of the information card.
 *
 * @returns {JSX.Element} A JSX element containing a list of information cards.
 */
export function Infos({ infos }: InfosProps) {
    return (
        infos.map((info, index) => (
            <div key={`info-${index}`} className="card-container">
                <div className="card-image-container">
                    <Image
                        src={info.image}
                        alt={info.title}
                        className="card-image"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="card-content">
                    <h2 className="card-title">{info.title}</h2>
                    <p className="card-description">{info.description}</p>
                </div>
            </div>
        ))
    );
}