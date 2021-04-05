set -e
#use $MONGO_INITDB_DATABASE

echo $MONGO_INITDB_ROOT_USERNAME

mongo <<EOF
use test

db.createUser({
  user: '$MONGO_INITDB_ROOT_USERNAME',
  pwd: '$MONGO_INITDB_ROOT_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: 'db'
  }]
})
EOF