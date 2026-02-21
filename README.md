# citron-server

## Development

```bash
# Run database in docker
# Run only once when database is not running
yarn db:run

# dev server
yarn dev
```

## DB

```bash
# Auto-generate migration file
yarn db:generate --name={migration_name}

# Generate custom migration file (write SQL statements as you want)
yarn db:generate --custom --name={custom_migration_name}

# Apply new migration files
yarn db:migrate
```
