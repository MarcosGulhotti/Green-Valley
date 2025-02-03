import Image from 'next/image';
import './Steps.css';

type Step = {
    title: string;
    description: string;
    image: string;
}
type StepsProps = {
    steps: Step[];
}
/**
 * Renders a list of steps with their respective titles, descriptions, and images.
 *
 * @param {StepsProps} props - The properties for the Steps component.
 * @param {Array} props.steps - An array of step objects to be rendered.
 * @param {string} props.steps[].title - The title of the step.
 * @param {string} props.steps[].description - The description of the step.
 * @param {string} props.steps[].image - The URL of the image associated with the step.
 *
 * @returns {JSX.Element[]} An array of JSX elements representing each step.
 */
export function Steps({ steps }: StepsProps) {
    return (
        steps.map((step, index) => (
            <div key={`step-${index}`} className="step-container">
                <div className='step-infos-container'>
                    <span>Step {index + 1}</span>
                    <h2>{step.title}</h2>
                    <p>{step.description}</p>
                </div>
                <div className='step-image-container'>
                    <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        style={{ objectFit: 'contain', padding: '2rem' }}
                    />
                </div>
            </div>
        ))
    )
}