export default function Button({ children, variant = 'primary', ...props }) {
    const variants = {
        primary: 'bg-blue-500',
        warning: 'bg-yellow-500',
        danger: 'bg-red-500'
    };

    return (
        <button
            className={`px-4 py-2 rounded ${variants[variant]}`}
            {...props}
        >
            {children}
        </button>
    );
}