const user = {id:1, name: 'Gorib Aamir', job: 'actor'}
// JavaScript Object Notation (JSON)

const stringified = JSON.stringify(user);


// console.log(user);
// console.log(stringified);
// { id: 1, name: 'Gorib Aamir', job: 'actor' }
// {"id":1,"name":"Gorib Aamir","job":"actor"}

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochu khet bhuter goli',
        city: 'ranbir',
        country: "BD"
    },
    products: ['laptop', 'phone', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
// {
//     owner: 'Alia',
//     address: { street: 'kochu khet bhuter goli', city: 'ranbir', country: 'BD' },
//     products: [ 'laptop', 'phone', 'monitor', 'keyboard' ],
//     revenue: 45000,
//     isOpen: true,
//     isNew: false
//   }

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
// {"owner":"Alia","address":{"street":"kochu khet bhuter goli","city":"ranbir","country":"BD"},"products":["laptop","phone","monitor","keyboard"],"revenue":45000,"isOpen":true,"isNew":false}


// to reverse string to object need to use parse 
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);