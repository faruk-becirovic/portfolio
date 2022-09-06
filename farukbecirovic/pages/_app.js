import React from 'react';
import Layout from '../components/layout';
import Greeting from '../components/greeting';
import HeroText from '../components/heroText'
import Contact from '../components/contactForm';
import './index.css'

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Greeting />
                {/* <div className='parallax'></div> */}
                <HeroText />
                <Contact />
            </Layout>
        );
    }
}

export default App