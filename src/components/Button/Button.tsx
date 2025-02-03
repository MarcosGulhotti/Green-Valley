import './Button.css';

type ButtonProps = {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
} & React.HTMLAttributes<HTMLButtonElement>;

/**
 * The `Button` component renders a button element with custom styling.
 *
 * @param {ButtonProps} props - The component props.
 * @returns {JSX.Element} The rendered button element.
 */
export function Button({ children, type = 'button', disabled = false, variant = 'primary', size = "medium", ...rest }: ButtonProps) {
    return (
        <button className={`green-valley-button ${variant} ${size}`} type={type} disabled={disabled} {...rest}>
            {children}
        </button>
    );
}