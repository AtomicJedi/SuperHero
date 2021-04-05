set -e
#use $MONGO_INITDB_DATABASE
echo 'FROG SAY QWA QWA QWAQWA BEACH!!!!!'
mongo <<EOF
use test

db.createUser({
  user: 'db',
  pwd: '123456',
  roles: [{
    role: 'readWrite',
    db: 'db'
  }]
})
EOF