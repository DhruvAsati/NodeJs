import React from 'react';
import URLForm from './components/URLFORM.JSX';
import URLAnalytics from './components/URLAnalytics';


function App() {
    return (
        <div className="App">
            <h1>URL Shortener</h1>
            <URLForm />
            <URLAnalytics />
        </div>
    );
}

export default App;
