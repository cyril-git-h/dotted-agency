import React from 'react';

function Subscription(
    { active, setActive, children }: 
    { active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>>, children: React.ReactNode }
    ) {
    return (
        <div
            className={active ? 'modal modal--cover modal--active' : 'modal'}
            onClick={() => setActive(!active)}
        >
            <div
                className={active ? 'modal__content modal__content--active' : 'modal__content'}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Subscription;
