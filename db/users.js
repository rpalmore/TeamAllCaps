//IMPORTANT TODO - instead of listing an array of objects for test users here, instead use sequelize to grab mysql user data
//REPLACE AFTER process.nexttick WITH A MYSQL QUERY (search database for user with that id)

var records = [
    { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] }
  , { id: 2, username: 'jill', password: 'birthday', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
];

exports.findById = function(id, cb) {
  process.nextTick(function() {
   // IMPOTANT TODO: REPLACE THIS WITH A MYSQL QUERY (search database for user with that id)
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    // IMPOTANT TODO: REPLACE THIS WITH A MYSQL QUERY (search database for user with that name)
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}