import React, {Component} from 'react'

class IntroCounter extends Component {

    render() {
        return(
            <div className="introCounter">
                <div class="attend">
                    <h2>People in Attendence</h2>
                    <h2>XXX</h2>
                    <button type="button" class="smallAddButton">+</button>
                </div>
                <div class="question">
                    <h2>What type of project are they working on?</h2>
                    <div class="project">
                        <h4>Java, Python, C#</h4>
                        <h4>XX</h4>
                        <button type="button" class="smallAddButton">+</button>
                    </div>
                    <div class="project">
                        <h4>Web Development or JavaScript</h4>
                        <h4>XX</h4>
                        <button type="button" class="smallAddButton">+</button>
                    </div>
                    <div class="project">
                        <h4>Game Design</h4>
                        <h4>XX</h4>
                        <button type="button" class="smallAddButton">+</button>
                    </div>
                    <div class="project">
                        <h4>Networking</h4>
                        <h4>XX</h4>
                        <button type="button" class="smallAddButton">+</button>
                    </div>
                    <div class="project">
                        <h4>Other</h4>
                        <h4>XX</h4>
                        <button type="button" class="smallAddButton">+</button>
                    </div>
                </div>
                <div class="students">
                    <h2>Students</h2>
                    <div class="school">
                        <h4>MSOE, Marquette, UW-M</h4>
                        <h4>XX</h4>
                        <button type="button" class="smallAddButton">+</button>
                    </div>
                    <div class="school">
                        <h4>Bootcamp: Thinkful, Dev Code, UW-Online</h4>
                        <h4>XX</h4>
                        <button type="button" class="smallAddButton">+</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default IntroCounter