'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('GPtoTP', {
    GPID: {
      type: 'char',
      primaryKey: true,
      length: 6,
      notNull: true
    },
    TPID: {
      type: 'char',
      length: 6,
      notNull: true,
      primaryKey: true,
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('GPtoTP', callback);
};

exports._meta = {
  "version": 1
};
