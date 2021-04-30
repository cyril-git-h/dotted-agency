import React, { useEffect } from 'react'

function Modal({ active, children }: { active: boolean, children: React.ReactNode }) {

    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden"
        }
        else document.body.style.overflow = "auto"
    }, [active])

    return (
        <div className={active ? 'modal modal--active' : 'modal'}>
            <div
                className={active ?
                    'modal__content modal__content--main modal__content--active' :
                    'modal__content'}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal;
