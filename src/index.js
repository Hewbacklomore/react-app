import React from 'react';
import ReactDOM from 'react-dom/client';
import MarkDownEditor from './components/MarkDownEditor';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MarkDownEditor onContentChange={console.log} />
    
);

