import React from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

// Your render function
<Viewer fileUrl="./SaranBarua.pdf" />;



export default function Pdf() {
    return (

        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '750px',
            }}
        >
            <Viewer fileUrl="./SaranBarua.pdf" />;
        </div>

    )
}
