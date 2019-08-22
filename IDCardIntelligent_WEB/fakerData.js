var faker = require('faker');
var lodash = require('lodash');
faker.locale = "zh_CN";

module.exports = function() {
    return {
        people: lodash.times(20, function(n) {
            return {
                id: n,
                name: faker.name.findName(),
                age: faker.random.number(),
                img: faker.image.image(),
                country: faker.address.country()
            }
        })
    }
}