import React, {Component} from 'react';
import './contact-item.scss';
import citizen from '../../images/citizen.svg';
import professional from '../../images/professional.svg';

export default class ContactItem extends Component {
    constructor(props) {
        super(props);
        switch (this.props.driver.driverType.trim().toLowerCase()) {
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
        const driverImageSrc = driver.profile_image ? driver.profile_image : "https://cdn.hswstatic.com/gif/teen-driver-safety-hp-orig.jpg";
        return (
            <div className="contact-item">
                <img src={driverImageSrc} alt="driver" className="image"/>
                <div className="driver-information-container">
                    <div className="driver-information">
                        {this.src ?
                            <img src={this.src} className="driver-type" alt="driver type"/>
                            : null}

                        <div className='text'>
                            <span className="text-item full-name">{driver.name || 'N/A'}</span>
                            <span className="text-item sub-info">Rank: {driver.rank || 'N/A'}</span>
                            <span className="text-item sub-info">Phone Number: {driver.phone || 'N/A'}</span>
                            <span className="text-item sub-info">Email: {driver.email || 'N/A'}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
