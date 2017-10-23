import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import gsap from 'gsap';
import { findDOMNode } from 'react-dom';

interface IndexState {
    aboveFoldVideo?: boolean
}



export default class Home extends React.Component<RouteComponentProps<{}>, IndexState> {

    constructor(props) {
        super(props)
        this.state = {
            aboveFoldVideo: false
        }
    }

    tl = new gsap.TimelineMax();

    componentDidMount() {
        const logo = findDOMNode(this.refs['s1-logo'])

        this.tl.clear()
            .add("start", "+=0")
            .set(logo, { opacity: 0, y: 30 })
            .to(logo, 2.7, { opacity: 1, y: 0, ease: gsap.Power3.easeOut, delay: 2 })
    }

    public render() {
        return <div className="app-container">
            <div className="s1">
                <MediaQuery minWidth={1224}>
                    {!this.state.aboveFoldVideo ? < video autoPlay src="./dist/img/TestRender006b_wip.mov" className="s-bg v-bg" onEnded={() => { this.setState({ aboveFoldVideo: true }) }} /> : <img src="./dist/img/bg_s1.png" className="s-bg" />}
                </MediaQuery>
                <MediaQuery maxWidth={1223}>
                    <img src="./dist/img/bg_s1.png" className="s-bg" />
                </MediaQuery>
                <div className="s-content">
                    <img src="./dist/img/l_center.png" className="l_center" ref="s1-logo" />
                    <h3>Bringing Credibility to Cryptocurrency</h3>
                    <p>A blockchain solution for the shifting geopolitical landscape of cryptocurrency regulation</p>
                    <a href="https://goo.gl/forms/yIquXw56LwG5xnx22">
                        <div className="btn btn-info">
                            Request Information
                        </div>
                    </a>
                </div>
            </div>
            <div className="s2 b-shadow">
                <div className="s-content">
                    <h2>Verify and Receive Credits</h2>
                    <h3>Sub-header here</h3>
                    <p>Credits (CRD) is the easy way to store, send, spend, and grow your money. Designed for easy adoption by anyone, anywhere, CRD combines the best aspects of traditional banking and the cryptocurrency blockchain to better serve the global financial market. As economic institutions rapidly lose public trust, we are proud to present an asset-backed cryptocurrency ecosystem developed to balance the stability and security of a commodity-backed money supply with the agility and versatility of ecommerce.</p>
                </div>
                <img className="hover-right" src="./dist/img/a_s2.png" />
            </div>
            <div className="s3">
                <img src="./dist/img/bg_s3.png" className="s-bg" />
                <div className="s-content text-center">
                    <h2>How Does It Work?</h2>
                    <p className="margin-auto p-width">Fashion axe umami blue bottle, chambray messenger bag kitsch paleo palo santo kinfolk PBR&B hot chicken lomo.</p>
                    <img src="./dist/img/a_s3.png" className="negative-margin" />
                    <div className="row">
                        <div className="col-xs-12 col-md-4 offset-v">
                            <img src="./dist/img/a1_s3.png" className="margin-bottom" />
                            <h3 className="color-red">Header here</h3>
                            <p className="text-left">The MVP of CRD’s wallet application will enable adopters to create a regulatory KYC compliant, identity verified wallet. This will allow them to use Credits Easy Addresses to confidently and securely send transactions on the CRD blockchain.</p>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <img src="./dist/img/a2_s3.png" className="margin-bottom" />
                            <h3 className="color-blue">Header here</h3>
                            <p className="text-left"> CRD’s MVP will be accompanied by documentation and user friendly tutorials. User feedback will be incorporated as UX and features are finalized for the initial GA product by Q3 2018.</p>
                        </div>
                        <div className="col-xs-12 col-md-4 offset-v">
                            <img src="./dist/img/a3_s3.png" className="margin-bottom" />
                            <h3 className="color-yellow">Header here</h3>
                            <p className="text-left">At that time, users will be able to process bill payments and facilitate exchanges between national currencies and CRD through Credits Quick Swap, or our exchange partner, Coin.Store, or any major exchange platform.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="s4 b-shadow">
                <div className="s-content">
                    <div className="row">
                        <div className="col-xs-12 col-md-4">
                            <img src="./dist/img/a1_s4.png" />
                        </div>
                        <div className="col-xs-12 col-md-8 text-right">
                            <h2>One simple online wallet</h2>
                            <h4>Mini header here with some interesting stuff</h4>
                            <p> Fashion axe umami blue bottle, chambray messenger bag kitsch paleo palo santo kinfolk PBR&B hot chicken lomo. Fashion axe umami blue bottle, chambray messenger bag kitsch paleo palo santo kinfolk PBR&B hot chicken lomo. Fashion axe umami blue bottle, chambray messenger bag kitsch paleo palo santo kinfolk PBR&B hot chicken lomo.</p>
                            <div className="row">
                                <div className="col-xs-7">
                                    <img src="./dist/img/a2_s4.png" />
                                </div>
                                <div className="col-xs-5">
                                    <h4>Instant offline transactions!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="s5">
                <img src="./dist/img/bg_s5.png" className="s-bg" />
                <div className="s-content">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <h2>The Voting Solution</h2>
                            <p>Credits will use the Delegated Proof of Stake (DPoS) consensus system that was first introduced by BitShares. This consensus algorithm was designed to eliminate the issues associated with Proof of Work (PoW).</p>
                        </div>
                        <div className="col-xs-12 col-md-6 text-center">
                            <img className="s5-img-up" src="./dist/img/a1_s5.png" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <h2>Your Proof of Stake</h2>
                            <p>It’s at the heart of CPS to ensure that our users have a say in how their network is run. In particular, how their fees are spent.</p>
                            <h4>Government Approved</h4>
                            <p>With our humanitarian incentivization strategy, delegates with verified charitable causes will gain increased block rewards which will be passed on down to their voters. Each delegate will be able to gain up to 365 CRD/day.</p>
                        </div>
                        <div className="col-xs-12 col-md-6 text-center">
                            <img src="./dist/img/a2_s5.png" className="s5-img-down" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="s6 b-shadow">
                <div className="s-content">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <h2> Contact Us </h2>
                            <p>Help us change the world today.</p>
                            <button>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}


