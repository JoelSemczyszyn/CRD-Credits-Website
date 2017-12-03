import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import gsap from 'gsap';
import { findDOMNode } from 'react-dom';
import SVG from './SVG';

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
                    <SVG />
                    {!this.state.aboveFoldVideo ? < video autoPlay src="./dist/img/above_fold.mov" className="s-bg v-bg" /*onEnded={() => { this.setState({ aboveFoldVideo: true }) }}*/ /> : <img src="./dist/img/bg_s1.png" className="s-bg" />}
                </MediaQuery>
                <MediaQuery maxWidth={1223}>
                    <SVG />
                    <img src="./dist/img/bg_s1.png" className="s-bg" />
                </MediaQuery>
                <div className="s-content">
                    <img src="./dist/img/l_center.png" className="l_center" ref="s1-logo" />
                    <h3>The money of the future</h3>
                    <p>Tied to your identity and backed by human value, this humanitarian currency was designed with all of humanity in mind.</p>


                    <div id="mc_embed_signup">
                        <form action="https://global.us17.list-manage.com/subscribe/post?u=81ac22d89c72f42d06c946816&amp;id=07e7eed3c2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                            <div id="mc_embed_signup_scroll">
                                <h2>Subscribe to our mailing list</h2>
                                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                <div className="mc-field-group">
                                    <label>Email Address  <span className="asterisk">*</span>
                                    </label>
                                    <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
                                </div>
                                <div id="mce-responses" className="clear">
                                    <div className="response" id="mce-error-response"></div>
                                    <div className="response" id="mce-success-response" ></div>
                                </div>
                                <div className="mailchimp"><input type="text" name="b_81ac22d89c72f42d06c946816_07e7eed3c2" value="" /></div>
                                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="s2 b-shadow">
                <div className="s-content">
                    <h2>A secure network</h2>
                    <h3>Designed for the globe</h3>
                    <p>Credits are a way to securely digitally store your wealth and assets. Credits is based on a decentralized monetary network powered by a voting system that rewards it's users. You can shape the world with Credits by voting for Causes, funding global humanitarian efforts while increasing your holdings in the network.</p>
                </div>
                <img className="hover-right" src="./dist/img/a_s2.png" />
            </div>
            <div className="s3">
                <img src="./dist/img/bg_s3.png" className="s-bg" />
                <div className="s-content text-center">
                    <h2>How Does It Work?</h2>
                    <p className="margin-auto p-width">Credits is a monetary system powered by the cloud. There are no barriers for </p>
                    <img src="./dist/img/a_s3.png" className="negative-margin" />
                    <div className="row">
                        <div className="col-xs-12 col-md-4 offset-v">
                            <img src="./dist/img/a1_s3.png" className="margin-bottom" />
                            <h3 className="color-red">Cryptocurrency and Trust</h3>
                            <p className="text-left">The Credits network will exist entirely of identity verified users with a permanent transaction ledger.</p>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <img src="./dist/img/a2_s3.png" className="margin-bottom" />
                            <h3 className="color-blue">Security and Anonymity</h3>
                            <p className="text-left"> Credits will not view or store your personal information, your private information stays in your hands. </p>
                        </div>
                        <div className="col-xs-12 col-md-4 offset-v">
                            <img src="./dist/img/a3_s3.png" className="margin-bottom" />
                            <h3 className="color-yellow">Rapid Transaction Times</h3>
                            <p className="text-left">Thanks to advances in decentralized ledger technologies, Credits offers global transaction verification in under ten seconds.</p>
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


