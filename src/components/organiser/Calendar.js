import React, { Component } from 'react';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import 'rc-calendar/assets/index.css';
import moment from 'moment';

export default class CalendarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment()
        }
    }

    render() {
        const calendar = (<Calendar />);
        return (
            <div>
                {/* Нужно ли пока вопрос? */}
                {/* <DatePicker
                    animation="slide-up"
                    value={this.state.time}
                    disabled={false}
                    calendar={calendar}
                    onChange={newTime => this.setState({ time: newTime })}
                >{
                        ({ value }) => {
                            return (
                                <input value={value ? value.format('YYYY-MM-DD HH:mm:ss') : ''} />
                            )
                        }
                    }</DatePicker> */}
                <Calendar />
            </div>
        )
    }
}

