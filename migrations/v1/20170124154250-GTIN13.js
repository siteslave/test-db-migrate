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
  db.createTable('GTIN13', {
    EANUPC: {
      type: 'char',
      primaryKey: true,
      length: 14,
      notNull: true
    },
    MaterialDesc: {
      type: 'text',
      length: 800,
      notNull: false,
    },
    BUn: {
      type: 'char',
      notNull: true,
      length: 3
    },
    BaseUnit: {
      type: 'char',
      notNull: true,
      length: 50
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('GTIN13', callback);
};

exports._meta = {
  "version": 1
};
