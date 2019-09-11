class ContactsSrv {
    getDriversAsync = async () => {
        return fetch('http://private-05627-frontendnewhire.apiary-mock.com/contact_list').then(res => res.json());
    };
}

let contactsSrv = new ContactsSrv();
export default contactsSrv;


