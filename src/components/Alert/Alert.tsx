import React, { PropsWithChildren, useState } from 'react';

interface Props extends PropsWithChildren {
    type: string;
    onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({ type, onDismiss, children }) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const handleDismiss = () => {
        setIsVisible(false);
        onDismiss?.();
    };

    if (!isVisible) return null;

    return (
        <div className={`alert alert-${type}`} role="alert">
            <div className="row justify-content-center">
                <div>{children}</div>
                {onDismiss && (
                    <div>
                        <button className={`bg-${type}`} onClick={handleDismiss}>
                            X
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Alert;
