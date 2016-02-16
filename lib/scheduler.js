var cron = require('cron')
  , chalk = require('chalk')
  , log = require('@ftbl/log');

var Scheduler = function() {
  if (this instanceof Scheduler === false) return new Scheduler;
};

Scheduler.prototype.schedule = function(job, on, context, options, data) {
  log.info('Scheduling ' + chalk.green(app + ' ' + name) + ' (' + chalk.green(on) + ')');

  new cron.CronJob(on, job(options, data), null, true, null, context);
};

module.exports = new Scheduler;