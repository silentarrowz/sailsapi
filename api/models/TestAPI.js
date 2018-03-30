/**
* TestAPI.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema:true,
  connection:'mysql',
  tableName:'testapi',
  attributes: {
  username : {
    type : 'string'		
  },
  password : {
    type : 'string'
  }
  }
};
