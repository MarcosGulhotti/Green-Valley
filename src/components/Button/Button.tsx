import './Button.css';

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

/**
 * The `Button` component renders a button element with custom styling.
 *
 * @param {ButtonProps} props - The component props.
 * @returns {JSX.Element} The rendered button element.
 */
export function Button({ children, onClick, type = 'button', disabled = false, variant = 'primary' }: ButtonProps) {
    return (
        <button className={`green-valley-button ${variant}`} onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    );
}