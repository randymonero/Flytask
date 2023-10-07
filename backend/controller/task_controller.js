db = require('../db')

module.exports.getAllTasks = async () => {
    const [records] = await db.query('SELECT task_id,task_name,starting_date,status FROM to_do_app.tasks_table;')
        .catch(err => console.log(err))
        return records;
}

module.exports.getTaskById = async (id) => {
    const [[record]] = await db.query("SELECT * FROM tasks_table where task_id = ? ",[id])
        return record;
}

module.exports.deleteTask = async (id) => {
    const [{affectedRows}] = await db.query("DELETE FROM tasks_table where task_id = ? ",[id])
        return affectedRows;
}

module.exports.addOrEditTask = async (obj,id = 0) => {
    const [[[{affectedRows}]]] = await db.query("call task_table_add_or_edit(?,?,?,?,?) ",[
        id, obj.task_name, obj.starting_date, obj.ending_date, obj.status])
        return affectedRows;
}