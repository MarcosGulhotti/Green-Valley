type ButtonProps = {
    children: React.ReactNode;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
} & React.HTMLAttributes<HTMLButtonElement>;

export type { ButtonProps };
