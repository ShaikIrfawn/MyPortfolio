# Portfolio Project

This is a portfolio website.

## Project Structure

- `backend/`: Node.js backend server with Express, serving images and API endpoints.
- `frontend/`: Frontend static website with HTML, CSS, and JavaScript.
- `public/`: Public assets such as images and favicon.
- `.gitignore`: Git ignore file.
- `render.yaml`: Deployment configuration for Render.com.

## Backend

- Uses Express.js and PostgreSQL.
- Provides image upload and serving endpoints.
- Environment variables are stored in `.env`.

## Frontend

- Static website with sections for About Me, Projects, Experience, Skills, Certifications, and Education.
- Smooth scrolling navigation.
- Styled with custom CSS.

## Setup

### Backend

1. Navigate to the `backend` directory.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with your database connection string.
4. Run `npm start` to start the backend server.

### Frontend

Open `frontend/index.html` in a browser to view the portfolio website.

## Deployment

Configured for deployment on Render.com using `render.yaml`.

## License

MIT License
