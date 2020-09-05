import React, { Component } from 'react';
import SocialNetwork from './SocialNetwork';
import main from './Footer.module.css';
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Segment className={main.footer}>
                    <Grid className={main.footer} columns={2} relaxed='very'>
                        <Grid.Column>
                            <p className={main.parag}>I.B. 2020</p>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="">СЛІДКУЙ ЗА НАМИ:</div>
                            <SocialNetwork />
                        </Grid.Column>
                    </Grid>
                </Segment>
                {/* <Container textAlign='left'><p className={main.parag}>I.B. 2020</p></Container>
                <Container textAlign='right'>
                    <div className="">СЛІДКУЙ ЗА НАМИ:</div>
                    <SocialNetwork />
                </Container> */}

            </div>
        );
    }
}
