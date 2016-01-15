var cron = require('cron')
  , chalk = require('chalk')
  , log = require('@ftbl/log')
  , configuration = require('@ftbl/configuration');

var Scheduler = function() {
  if (this instanceof Scheduler === false) return new Scheduler;
};

Scheduler.prototype.schedule = function(app, name, job, context, on, data) {
  var config = configuration([ 'schedules', app, name ].join(':'));

  if (on == null) on = config.on;

  log.info('Scheduling ' + chalk.green(app + ' ' + name) + ' (' + chalk.green(on) + ')');

  new cron.CronJob(on, job(config.options, data), null, true, null, context);
};

module.exports = new Scheduler;