/**
 * Writing to a Songs DB
 */

 import knexPlantit from '../../lib/knexPlantit.js';
 import Logger from '../../lib/Logger.js';
 
 export default class CustomerDb {
  async findOne(login_name) {
    try {
      return await knexPlantit('customers').where({ login_name: login_name }).select('*').first();
    } catch (e) {
      Logger.error(e.message);
    }
  }

   /**
    * Adds a todo to our database
    *
    * @param {string} description
    */
   async add( login_name, login_password, email, shopping_cart, whish_list ) {
     try {
       return await knexPlantit('customers').insert({ login_name, login_password, email, shopping_cart, whish_list });
     } catch(e) {
       Logger.error(e.message);
     }
   }
 
   /**
    * Updates an existing todo item
    *
    * @param {string} id
    * @param {string} description
    */
   async update(id, { login_name, login_password, email, shopping_cart, whish_list } ) {
     try {
       return await knexPlantit('customers').where("id", id).update({ login_name, login_password, email, shopping_cart, whish_list });
     } catch(e) {
       Logger.error(e.message);
     }
   }
 
   /**
    * Deletes a specific todo
    *
    * @param {string} id
    */
   async delete(id) {
     try {
       return await knexPlantit('customers').where("id", id).del();
     } catch(e) {
       Logger.error(e.message);
     }
   }
 
   /**
    * Get all the todo items
    */
   async get() {
     try {
       return await knexPlantit('customers').select("*");
     } catch(e) {
       Logger.error(e.message);
     }
   }
 }