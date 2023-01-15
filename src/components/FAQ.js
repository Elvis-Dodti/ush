import React from 'react'
import './FAQ.css'

function FAQ() {
    return (
        <section id='faq'>
            <h1>FAQs</h1>
            <br />
            <div id='section'>
                <div className='container'>
                    <div className="accordion">
                        <div className="accordion-item" id="question1">
                            <a className='accordion-link' href='#question1'>
                                What is a Hackathon ?
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                                <i class="fa fa-caret-up" aria-hidden="true"></i>
                            </a>
                            <div className='answer'>
                                <p>A hackathon is an event where in participating teams are provided different real-life problems and they have to design a technological
                                    solution to anyone of the problems given in the given time limit. The final product developed should be usable in real life.</p>
                            </div>
                        </div>

                        <div className="accordion-item" id="question2">
                            <a className='accordion-link' href='#question2'>
                                Can I code before coming to the hackathon ?
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                                <i class="fa fa-caret-up" aria-hidden="true"></i>
                            </a>
                            <div className='answer'>
                                <p>You can come prepared with half baked codes, write your own APIs and modules.</p>
                            </div>
                        </div>

                        <div className="accordion-item" id="question3">
                            <a className='accordion-link' href='#question3'>
                                How do I form teams ?
                            </a>
                            <i class="fa fa-caret-down" aria-hidden="true"/>
                            <i class="fa fa-caret-up" aria-hidden="true"/>
                            <div className='answer'>
                                <p>Each team should comprise of a maximum of 4 members & minimum of 2 members including the team leader.
                                    Team members can be from different colleges.</p>
                            </div>
                        </div>

                        <div className="accordion-item" id="question4">
                            <a className='accordion-link' href='#question4'>
                                How do I register for Unscript 2k22 ?
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                                <i class="fa fa-caret-up" aria-hidden="true"></i>
                            </a>
                            <div className='answer'>
                                <p>All team members need to register on Devfolio (Link mentioned at the top)</p>
                            </div>
                        </div>

                        <div className="accordion-item" id="question5">
                            <a className='accordion-link' href='#question5'>
                                What if I have never been to a hackathon before ?
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                                <i class="fa fa-caret-up" aria-hidden="true"></i>
                            </a>
                            <div className='answer'>
                                <p>For beginners, it will be a great start for working on problem statements where mentors will be there to help you out with your projects.
                                    So, there is nothing to worry about any errors while you work. You will also have a good exposure to a coding atmosphere.</p>
                            </div>
                        </div>


                        <div className="accordion-item" id="question6">
                            <a className='accordion-link' href='#question6'>
                                Is the event going to be online or offline?
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                                <i class="fa fa-caret-up" aria-hidden="true"></i>
                            </a>
                            <div className='answer'>
                                <p>The hackathon will be completely online</p>
                            </div>
                        </div>

                        <div className="accordion-item" id="question7">
                            <a className='accordion-link' href='#question7'>
                                When will the problem statements be released?
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                                <i class="fa fa-caret-up" aria-hidden="true"></i>
                            </a>
                            <div className='answer'>
                                <p>Problem statements will be released 1 day prior to the main event.</p>
                            </div>
                        </div>

                        <div className="accordion-item" id="question8">
                            <a className='accordion-link' href='#question8'>
                                How will we be notified about the selection?
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                                <i class="fa fa-caret-up" aria-hidden="true"></i>
                            </a>
                            <div className='answer'>
                                <p>Selected teams will be notified on Devfolio as well as get a confirmation email. Note: Registration does not confirm selection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default FAQ;