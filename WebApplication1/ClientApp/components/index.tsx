import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import gsap from 'gsap';
import { findDOMNode } from 'react-dom';
import SVG from './SVG';
import Typist from 'react-typist';

interface IndexState {
    aboveFoldVideo?: boolean
}

export default class Home extends React.Component<RouteComponentProps<{}>, IndexState> {
    typed: any;

    constructor(props) {
        super(props)
        this.state = {
            aboveFoldVideo: false
        }
    }

    tl = new gsap.TimelineMax();

    componentDidMount() {

        if (window.innerWidth <= 768) { // Responsive Animating 

            /*

            const logo = findDOMNode(this.refs['s1-logo'])

            this.tl.clear()
                .add("start", "+=0")
                .set(logo, { opacity: 0, y: 30 })
                .to(logo, 2.7, { opacity: 1, y: 0, ease: gsap.Power3.easeOut, delay: 2 })

            */

        } else { // Desktop Animating

            const lettermark = findDOMNode(this.refs['lettermark'])

            this.tl.clear()
                .add("start", "+=0")
                .set(lettermark, { opacity: 0, y: 18 })
                .to(lettermark, 0.8, { opacity: 1, y: 0, ease: gsap.Power3.easeOut, delay: 5.8 })
        }
    }

    public render() {
        return <div className="app-container">
            <div className="s1">
                <MediaQuery minWidth={769}>
                    <img src="./dist/img/bg_s1.png" className="s-bg" />
                </MediaQuery>
                <MediaQuery maxWidth={768}>
                    <img src="./dist/img/bg_s1_mobile.png" className="s-bg" />
                </MediaQuery>
                <div className="s-content">
                    <MediaQuery minWidth={769}>
                        <div className="s-1-1">
                            <div className="video-container">
                                <video autoPlay src="./dist/img/above_fold.mov" className="s-bg v-bg" /*onEnded={() => { this.setState({ aboveFoldVideo: true }) }}*/ />
                            </div>
                            <div className="svg-container">
                                <SVG />
                            </div>
                            <img src="./dist/img/lettermark.png" ref="lettermark" />
                        </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={768}>
                        <img src="./dist/img/logo_small.png" className="l_center" ref="s1-logo" />
                    </MediaQuery>
                    <div className="flex flex-horizontal m-center">
                        <h4 ref="l1"><a>Whitepaper</a></h4>
                        <div className="flex-seperator" />
                        <h4><a href="https://docs.google.com/forms/d/1aFGIYGEWy8qXuL0pX1rARicM4MGLHlEKfTvR4nSibcA/viewform?edit_requested=true">Pre-ICO Investment</a></h4>
                    </div>
                    <MediaQuery minWidth={769}>
                        <div className="mailing-list">
                            <Typist cursor={{ show: false }} avgTypingDelay={35} stdTypingDelay={12}>
                                <Typist.Delay ms={6800} />
                                <p>Keep up to date with our latest news and developments</p>
                            </Typist>
                            <div className="entry-field">
                                <a href="http://eepurl.com/c9UaKv"><button>Click Here</button></a>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={768}>
                        <div className="mailing-list">
                            <Typist cursor={{ show: false }} avgTypingDelay={35} stdTypingDelay={12}>
                                <Typist.Delay ms={2000} />
                                <p>Keep up to date with our latest news and developments</p>
                            </Typist>
                            <div className="entry-field mobile">
                                <a href="http://eepurl.com/c9UaKv"><button>Click Here</button></a>
                            </div>
                        </div>
                    </MediaQuery>
                </div>
            </div>
        </div>;
    }
}


