import React from 'react';
import Loader from "../Loader";

interface CustomButtonProps {
    isLoading: boolean;
    onClick?: () => void;
    children: string;
    className: string;
    disabled: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({isLoading, onClick, children, className, disabled}) => {
    const disabledClass = disabled || isLoading ? '!bg-gray-300 text-black cursor-not-allowed text-white' : '';
    return (
        <button
            onClick={onClick}
            className={`${className} flex items-center justify-center ${disabledClass}`}
            disabled={isLoading || disabled}
        >
            {isLoading ? (
                <Loader/>
            ) : (
                children
            )}
        </button>
    );
};

export default CustomButton;
