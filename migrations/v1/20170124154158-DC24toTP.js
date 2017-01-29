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
  db.createTable('DC24toTP', {
    STD_CODE: {
      type: 'char',
      primaryKey: true,
      length: 24,
      notNull: true
    },
    TPID: {
      type: 'char',
      length: 6,
      notNull: true,
      primaryKey: true
    },
    blnConfirmed: {
      type: 'boolean',
      notNull: true
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('DC24toTP', callback);
};

exports._meta = {
  "version": 1
};
