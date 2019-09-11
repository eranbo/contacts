import React, {Component} from 'react';
import './contact-item.scss';
import citizen from '../../images/citizen.svg';
import professional from '../../images/professional.svg';

export default class ContactItem extends Component {
    constructor(props) {
        super(props);
        switch (this.props.driver.type) {
            case "citizen":
                this.src = citizen;
                break;
            case 'professional':
                this.src = professional;
                break;
            default:
                this.src = null;
                break;
        }
    }

    render() {
        const driver = this.props.driver;
        return (
            <div className="contact-item">
                <img src="https://cdn.hswstatic.com/gif/teen-driver-safety-hp-orig.jpg" alt="driver" className="image"/>
                <div className="driver-information-container">
                    <div className="driver-information">
                        {this.src ?
                            <img src={this.src} className="driver-type" alt="driver type"/>
                            : null}

                        <div className='text'>
                            <span className="text-item full-name">{driver.fullName}</span>
                            <span className="text-item sub-info">{driver.rank}</span>
                            <span className="text-item sub-info">Phone Number: {driver.phoneNumber}</span>
                            <span className="text-item sub-info">Email: {driver.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
