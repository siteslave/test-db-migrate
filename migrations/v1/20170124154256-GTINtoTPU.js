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
  db.createTable('GTINtoTPU', {
    EANUPC: {
      type: 'char',
      primaryKey: true,
      length: 14,
      notNull: true
    },
    TPUID: {
      type: 'char',
      primaryKey: true,
      length: 6,
      notNull: true,
    },
    blnConfirmed: {
      type: 'boolean',
      notNull: true
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('GTINtoTPU', callback);
};

exports._meta = {
  "version": 1
};
