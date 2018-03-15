var db = require('../dbconnection'); //reference of dbconnection.js

var task = {

    getAll: function (callback) {
        return db.query("select * from farmacias_salto order by id", callback);
    },
    getById: function (id, callback) {
        return db.query("select * from task where Id=?", [id], callback);
    },
    add: function (task, callback) {
        return db.query("Insert into task values(?,?,?)", [task.Id, task.Title, task.Status], callback);
    },
    delete: function (id, callback) {
        return db.query("delete from task where Id=?", [id], callback);
    },
    update: function (id, task, callback) {
        return db.query("update task set Title=?,Status=? where Id=?", [task.Title, task.Status, id], callback);
    }

};
module.exports = task;