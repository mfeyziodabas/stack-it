# Pokemon Battle

This project is a full-stack web application where users can simulate battles between two selected Pokemon. The application consists of three main components:

- **Frontend**: A ReactJS application that allows users to select Pokemon and start battles.
- **Backend**: A Spring Boot API that handles battle logic and retrieves Pokemon data.
- **Database**: A PostgreSQL database that stores battle history.

## Features

- Users can select Pokemons for a battle between 12 Pokemon. (These 12 Pokemon are ramdomy listed between 1000 Pokemon from Pokemon API - resfresh possible)
- Users can choose an attacker and a defender Pokemon from the given selection.
- Users can refresh the selection to get a new set of 12 Pokemon. (Because there are more then 1000 pokemon in API)
- Once Pokemon are selected, users can start the battle.
- The backend fetches the weight of both Pokemon using the Pokemon API.
- The Pokemon with the higher weight is declared the winner.
- Battle results, including the winner, loser, and the date/time of the battle, are saved to a PostgreSQL database.
- Users can list all battle results in another page.

## Project Structure

- **Frontend**: Built with ReactJS, responsible for the user interface and user interactions.
- **Backend**: Built with Java Spring Boot, handles API requests and business logic.
- **Database**: PostgreSQL, used to store battle history.

## Getting Started

To get the project up and running, follow these steps:

### Prerequisites

- **Docker** and **Docker Compose** should be installed on your system.
- **Java** (JDK 21) and Gradle 8.8 for backend development.

### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mfeyziodabas/stack-it.git
    cd stack-it
    ```

2. **Build the Spring Boot Application:**

    Navigate to the backend project directory and run the following command:

    ```bash
    ./gradlew build
    ```

3. **Start the application using Docker Compose:**

    In the root directory of the project, run:

    ```bash
    docker compose up
    ```

    This command will start the frontend, backend, and PostgreSQL database as separate Docker containers.

4. **Access the Application:**

    Once the containers are up and running, the frontend should be accessible at `http://localhost:3000`.


## API Documentation

### GET Requests

- `GET /api/v1/battle/result`: Returns all battle results.
- `GET /api/v1/battle/result/{id}`: Returns the result of a specific battle by ID.

### POST Request

- `POST /api/v1/battle/start`: Starts a new battle and returns the result.
  - **Request Body** (JSON):
    ```json
    {
      "attackerId": "{id}",
      "defenderId": "{id}"
    }
    ```

