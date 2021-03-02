import React, {Component} from 'react';

class LandingPage extends Component {
    render() {
        return (
            <>
            <section className = 'landingPage'>
                <section className = 'landingPage__title'>
                <h1>Welcome to Kitchen Community!</h1>
                </section>
                <section className = 'landingPage__image'>
                    <img src = 'https://i.pinimg.com/originals/8d/72/9a/8d729a14c07f3159ff82f69b659fd7ec.jpg' />
                </section>
                <h2>Share your favorite meal ideas and kitchen tips</h2>
                <section className = 'landingPage__image'>
                    <img src = 'https://i.pinimg.com/originals/ad/48/48/ad4848b113478b579ca6e098ebd614b6.jpg' />
                </section>
                <p>Join a community of home cooks sharing recipes, ideas and kitchen hacks.</p>
                <p>With more people than ever cooking at home these days, things can get a little stale. 
                    Check out recipes from people just like you. Take those shortcuts you've learned and share them with others. 
                    Find something new and interesting to try for dinner. 
                    Or just check out a new idea for that mac n' cheese recipe you've been using for ages.</p>
                <p>At Kitchen Community, we're just like you - a community of home cooks looking to spice up our culinary lives!
                </p>
            </section>
            </>
        )
    }
}

export default LandingPage;