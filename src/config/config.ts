export const config = {
  dev: {
    "username": "shikharsdb",
    "password": "shikharsdb",
    "database": "shikhardb1",
    "host": "shikharsdb.cozytgaly54s.us-west-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_reigion": "us-west-2",
    "aws_profile": "default",
    "aws_media_bucket": "mbck"
  },
  prod: {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  jwt: {
    secret: "helloworld"
  }
}
