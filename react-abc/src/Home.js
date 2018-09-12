import React from 'react';
import Header from './Header';

function Home() {
    return (
        <div>
            <Header/>
            <div className="title">Welcome to Page Transition App!</div>
            <section>
                <p>Click the links on header to change routes!</p>
            </section>
        </div>
    );
}

export default Home;