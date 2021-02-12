import React, {Component} from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div className = 'aboutUs'>
                <section className = 'aboutUs__intro'>
                    <h3>Make something new!</h3>
                    <p>Share your favorite meal ideas and kitchen hacks. Try something new for dinner tonight. Help inspire someone else.</p>
                    <p>We've all been cooking at home more this past year. And while there are hundreds of websites from celebrity chefs who do this kind of thing for a living, not everyone wants the challenge of finding white truffles or baking a souffle. Sometimes we just want to try something new with the ingredients we already have on hand. Or we're looking for some tricks to make our kitchen lives easier.</p>
                    <p>Share your tips and ideas here with other home cooks who are looking for the same thing. Who knows, you may find something new for your regular meal rotation, or teach someone a new way to utilize those sardines in the pantry.</p>
                </section>
                <section className = 'aboutUs__signup'>
                    <header>
                        <h3>Start your culinary adventure now</h3>
                    </header>
                    <form class='signup-form'>
                        <div>
                        <label htmlFor="first-name">First name</label>
                        <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                        </div>
                        <div>
                        <label htmlFor="last-name">Last name</label>
                        <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                        </div>
                        <div>
                        <label htmlFor="username">Email</label>
                        <input type="text" name='username' id='username' />
                        </div>
                        <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' />
                        </div>
                        <button type='submit'>Sign Up</button>
                    </form>
                </section>
            </div>
        )
    }
}

export default AboutUs;