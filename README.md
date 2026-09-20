# MyChart

MyChart is a full-stack clinic management and electronic medical record platform.

This repository currently contains:

- Spring Boot backend at the repository root
- React/Vite frontend in `frontend/`
- MySQL local development database through Docker Compose
- Liquibase database migrations
- Swagger/OpenAPI API documentation

## Tech stack

### Backend

- Java 23
- Spring Boot 3.5
- Maven
- Spring Web
- Spring Data JPA
- Bean Validation
- Liquibase
- MySQL
- OpenAPI/Swagger

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Axios

## Local setup

### 1. Start MySQL

```bash
docker compose up -d
```

This starts a local MySQL database:

- Database: `mychart`
- User: `mychart_user`
- Password: `mychart_password`
- Port: `3306`

### 2. Start the backend

```bash
./mvnw spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

Useful backend URLs:

```text
http://localhost:8080/api/v1/health
http://localhost:8080/swagger-ui.html
http://localhost:8080/actuator/health
```

### 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

The Vite dev server proxies `/api` requests to the backend on port `8080`.

## Phase 1 scope

This branch sets up the full-stack foundation:

- Backend dependency cleanup
- MySQL configuration
- Liquibase foundation changelog
- Standard API response wrapper
- Global exception handling
- Local CORS config
- API health endpoint
- Docker Compose for MySQL
- React/Vite/Tailwind frontend scaffold
- Dashboard shell connected to backend health endpoint

## Next phase

Phase 2 should add:

- Organizations
- Facilities
- Departments
- Users
- Roles
- Permissions
- Authentication
- JWT access and refresh tokens
- Audit logging service
