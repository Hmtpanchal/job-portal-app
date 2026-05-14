````md
# Full Stack Job Portal Application

A modern full-stack web application where recruiters can post job openings and candidates can search, view, and apply for jobs online. Built using Java, Spring Boot, React.js, MySQL, and Docker.

---

## Project Overview

The Full Stack Job Portal is designed to simulate a real-world recruitment platform similar to LinkedIn Jobs, Naukri, or Indeed.

The platform supports three major roles:

- **Candidate** — Search and apply for jobs.
- **Recruiter** — Post and manage job listings.
- **Admin** — Monitor users and moderate content.

The project follows a clean layered architecture and demonstrates complete frontend-backend integration.

---

## Key Features

### Candidate Features
- Register and login
- Browse available jobs
- Search jobs by title, company, or location
- View detailed job descriptions
- Apply for jobs
- Update profile and resume

### Recruiter Features
- Create job postings
- Edit or delete jobs
- View applicants
- Manage company profile

### Admin Features
- Manage users
- Moderate job posts
- View platform analytics

### Technical Features
- RESTful APIs
- Responsive UI
- Dockerized deployment
- Exception handling
- Form validation

---

## Tech Stack

### Frontend
- React.js
- Axios
- Tailwind CSS
- React Router DOM

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- Lombok

### Database
- MySQL 8

### Tools
- Docker
- Docker Compose
- Postman
- Maven
- Git & GitHub

---

## System Architecture

```text
React Frontend
      |
      v
REST API (Spring Boot)
      |
      v
Service Layer
      |
      v
Repository Layer
      |
      v
MySQL Database
````

---

## Project Structure

```text
fullstack-job-portal/
├── backend/
│   ├── src/main/java/com/hemant/jobportal/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── entity/
│   │   └── JobPortalApplication.java
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## Database Schema

### Users Table

| Column   | Type    |
| -------- | ------- |
| id       | BIGINT  |
| name     | VARCHAR |
| email    | VARCHAR |
| password | VARCHAR |
| role     | VARCHAR |

### Jobs Table

| Column      | Type     |
| ----------- | -------- |
| id          | BIGINT   |
| title       | VARCHAR  |
| company     | VARCHAR  |
| description | TEXT     |
| location    | VARCHAR  |
| salary      | VARCHAR  |
| posted_at   | DATETIME |

### Applications Table

| Column     | Type     |
| ---------- | -------- |
| id         | BIGINT   |
| user_id    | BIGINT   |
| job_id     | BIGINT   |
| resume_url | VARCHAR  |
| applied_at | DATETIME |

---

## API Endpoints

### User APIs

#### Register User

```http
POST /api/auth/register
```

#### Login

```http
POST /api/auth/login
```

---

### Job APIs

#### Create Job

```http
POST /api/jobs
```

#### Get All Jobs

```http
GET /api/jobs
```

#### Get Job by ID

```http
GET /api/jobs/{id}
```

#### Update Job

```http
PUT /api/jobs/{id}
```

#### Delete Job

```http
DELETE /api/jobs/{id}
```

---

### Application APIs

#### Apply for Job

```http
POST /api/applications
```

#### Get Applications by User

```http
GET /api/applications/user/{userId}
```

---

## Sample Job JSON

```json
{
  "title": "Java Full Stack Developer",
  "company": "Tech Solutions",
  "description": "Looking for developers with Spring Boot and React experience.",
  "location": "Remote",
  "salary": "8 LPA"
}
```

---

## Running the Backend

### 1. Navigate to Backend

```bash
cd backend
```

### 2. Configure Database

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/job_portal_db
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
server.port=8080
```

### 3. Create Database

```sql
CREATE DATABASE job_portal_db;
```

### 4. Start Backend

```bash
mvn spring-boot:run
```

---

## Running the Frontend

### 1. Navigate to Frontend

```bash
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

---

## Running with Docker

```bash
docker-compose up --build
```

This starts:

* React frontend
* Spring Boot backend
* MySQL database

---

## Docker Compose Example

```yaml
version: '3.8'

services:
  mysql:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: job_portal_db
    ports:
      - "3306:3306"

  backend:
    build: ./backend
    ports:
      - "8080:8080"
    depends_on:
      - mysql

  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
    depends_on:
      - backend
```

---

## Frontend Pages

* Home Page
* Job Listings Page
* Job Details Page
* Login/Register Page
* Recruiter Dashboard
* Candidate Dashboard
* Admin Dashboard

---

## Testing with Postman

Use Postman to test:

* User registration
* Authentication
* CRUD operations on jobs
* Job applications

---

## Future Enhancements

* JWT Authentication
* Resume Upload (AWS S3 / Cloudinary)
* Email Notifications
* Saved Jobs
* Advanced Search Filters
* Pagination
* Role-Based Authorization
* Analytics Dashboard
* Unit and Integration Tests
* CI/CD Pipeline

---

## Learning Outcomes

This project demonstrates:

* Full-stack application development
* React and Spring Boot integration
* REST API design
* CRUD operations
* Database relationships
* Docker deployment
* Real-world software architecture

---

## Screenshots

Add screenshots of:

* Home page
* Job listings page
* Recruiter dashboard
* Postman API responses
* Docker containers

---

## Author

**Hemant Kumar**

* GitHub: https://github.com/yourusername
* LinkedIn: https://www.linkedin.com/in/yourprofile/

---

## License

This project is licensed under the MIT License.

```
```
