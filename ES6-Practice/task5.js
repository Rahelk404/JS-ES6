// const { use } = require("react")

const user = {
    name: 'Rahel',
    profile: {
        address: {
            city: 'Sylhet'
        }
    }
}

const city1 = user.profile.address.city;
const city2 = user['profile']['address']['city'];
const city3 = user.profile?.address?.city;

console.log(city1, city2, city3);