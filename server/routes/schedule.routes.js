const Schedules = require('../controllers/schedule.controller');

module.exports = app => {
    app.get('/api/schedule', Schedules.getAll);
    app.post('/api/schedule', Schedules.create);
    app.get('/api/schedule/:_id', Schedules.getone);
    app.put('/api/schedule/:_id', Schedules.update);
    app.delete('/api/schedule/:_id', Schedules.remove);

}