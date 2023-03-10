const { default: competition } = require("./ethereum/competition");

const routes = require("next-routes")();

routes
    .add("/competitions/create", "/competitions/create")
    .add("/competitions/:address", "/competitions/show")
    .add("/competitions/:address/enter", "/competitions/enter")
    .add("/competitions/:address/competitors", "/competitions/competitors")
    .add("/competitions/:address/competitors/:personAddress", "/competitions/competitor");
    
module.exports = routes;