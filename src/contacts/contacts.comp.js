import React, {Component} from 'react';
import * as _ from 'lodash';

import './contacts.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactItem from "./contact-item/contact-item.comp";
import contactsSrv from "./contacts.srv";

export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.drivers = [];
        this.state = {searchPhrase: '', drivers: []};
    }

    async componentDidMount() {
        this.drivers = await contactsSrv.getDriversAsync();
        this.setState({drivers: this.drivers});
    }

    filter() {
        let filteredDrivers = _.filter(this.drivers, driver => {
            return (
                _.includes(driver.type.toLowerCase(), this.state.searchPhrase.toLowerCase()) ||
                _.includes(driver.fullName.toLowerCase(), this.state.searchPhrase.toLowerCase()) ||
                _.includes(driver.email.toLowerCase(), this.state.searchPhrase.toLowerCase()) ||
                _.includes(driver.phoneNumber, this.state.searchPhrase)
            )
        });

        this.setState({drivers: filteredDrivers});
    }

    onChangeSearchPhrase(event) {
        this.setState({searchPhrase: event.target.value}, () => {
            this.filter();
        });
    }

    onClickSearchIcon() {
        if (!_.isEmpty(this.state.searchPhrase)) {
            this.setState({searchPhrase: ''}, () => {
                this.filter();
            });
        }
    }

    render() {
        let contactItems = this.state.drivers.map(driver => {
            return (
                <Col lg="3" key={driver.id}>
                    <ContactItem driver={driver}/>
                </Col>
            )
        });

        return (
            <div className="contacts">
                <div className="contacts-header">
                    <span className="title">Contact List</span>
                    <span>
                        <input type="text" placeholder={'Search'} value={this.state.searchPhrase} className="search-input" onChange={this.onChangeSearchPhrase.bind(this)}/>
                        <i className={"fas icon-search " + (_.isEmpty(this.state.searchPhrase) ? "fa-search" : "fa-times")} onClick={this.onClickSearchIcon.bind(this)}></i>
                    </span>
                </div>
                <Container className="contacts-container">
                    <Row className="justify-content-lg-left">
                        {contactItems}
                    </Row>
                </Container>
            </div>
        );
    }
}
