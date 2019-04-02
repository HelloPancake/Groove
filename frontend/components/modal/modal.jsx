import React from 'react';

export default function Modal({ clickListener, backgroundColor }) {
    backgroundColor = backgroundColor || 'transparent';
    return (
        <div className="modal"
            style={{ backgroundColor }}
            onClick={clickListener}>
        </div>
    );
}