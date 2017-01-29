'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('DC24', {
    STD_CODE: {
      type: 'string',
      primaryKey: true,
      length: 24,
      notNull: true,
      primaryKey: true,
    },
    Version: {
      type: 'char',
      length: 11,
      notNull: true
    },
    RegNo: {
      type: 'string',
      length: 20,
      notNull: true
    },
    T_Code: {
      type: 'string',
      length: 20,
      notNull: true
    },
    TradeName: {
      type: 'string',
      length: 200,
      notNull: false
    },
    Item: {
      type: 'string',
      length: 200,
      notNull: true
    },
    Comp: {
      type: 'string',
      length: 200,
      notNull: true
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('DC24', callback);
};

exports._meta = {
  "version": 1
};
