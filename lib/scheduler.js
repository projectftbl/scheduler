var _ = require('lodash')
  , cron = require('cron')
  , chalk = require('chalk')
  , log = require('@ftbl/log');

var Scheduler = function() {
  if (this instanceof Scheduler === false) return new Scheduler;
};

Scheduler.prototype.schedule = function(job, on, context, opts, data) {
  var options = _.assign({}, opts, { app: '', name: '' });

  log.info('Scheduling ' + chalk.green(options.app + ' ' + options.name) + ' (' + chalk.green(on) + ')');

  new cron.CronJob(on, job(data, options), null, true, null, context);
};

module.exports = new Scheduler;