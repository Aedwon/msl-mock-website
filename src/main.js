// This file initializes the application and renders the Header component to the DOM.

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to My Website</h1>
                <p>This is a simple web application.</p>
            </main>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));