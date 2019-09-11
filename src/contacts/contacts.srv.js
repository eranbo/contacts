class ContactsSrv {
    getDriversAsync = async () => {
        return [
            {
                id: 0,
                type: 'citizen',
                fullName: 'Eran Bar Oz',
                rank: 'Driver rank',
                phoneNumber: '054 425 5925',
                email: 'me@eranbo.com'
            },
            {
                id: 1,
                type: 'citizen',
                fullName: 'Eran Calvo Bar Oz',
                rank: 'Driver rank',
                phoneNumber: '054 425 5925',
                email: 'eran@gmail.com'
            },
            {
                id: 2,
                type: 'professional',
                fullName: 'Jack White',
                rank: 'Driver rank',
                phoneNumber: '212 399 7809',
                email: 'jack@white.com'
            },
            {
                id: 3,
                type: 'citizen',
                fullName: 'Full Name',
                rank: 'Driver rank',
                phoneNumber: '515 555 6666',
                email: 'email@gmail.com'
            },
            {
                id: 4,
                type: 'citizen',
                fullName: 'Full Name',
                rank: 'Driver rank',
                phoneNumber: '123 323 456',
                email: 'email@gmail.com'
            },
            {
                id: 5,
                type: 'citizenn',
                fullName: 'Full Name',
                rank: 'Driver rank',
                phoneNumber: '123 323 456',
                email: 'email@gmail.com'
            },
            {
                id: 6,
                type: 'professional',
                fullName: 'Full Name',
                rank: 'Driver rank',
                phoneNumber: '123 323 456',
                email: 'email@gmail.com'
            },
        ];
    };
}

let contactsSrv = new ContactsSrv();
export default contactsSrv;


