docker run --name pgdb \
  -e POSTGRES_PASSWORD=segredo \
  -e POSTGRES_DB=gaek \
  -e POSTGRES_USER=gaek \
  -v pgdata:/var/lib/postgresql/data \
  -p 5432:5432 \
  -d postgres:17
