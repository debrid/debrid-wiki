---
title: Development
description: Guide for setting up the development environment and contributing to Riven.
editLink: true
---

# Development

Welcome to the development section! Here, you'll find all the necessary steps to set up your development environment and start contributing to the project.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18.13+)
- **Python** (3.10+)
- **Poetry** (for Python dependency management)
- **Docker** (optional, for containerized development)

## Initial Setup

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/rivenmedia/riven.git && cd riven
   ```

2. **Install Backend Dependencies:**

   ```sh
   pip install poetry
   poetry install
   ```

3. **Install Frontend Dependencies:**
   ```sh
   cd frontend
   npm install
   cd ..
   ```

## Using `make` for Development

We provide a `Makefile` to simplify common development tasks. Here are some useful commands:

- **Initialize the Project:**

  ```sh
  make
  ```

- **Start the Development Environment:**
  This command stops any previous containers, removes old images, and rebuilds the image using cached layers. Any changes in the code will trigger a rebuild.

  ```sh
  make start
  ```

- **Restart the Container:**

  ```sh
  make restart
  ```

- **View Logs:**
  ```sh
  make logs
  ```

## Development without `make`

If you prefer not to use `make` and Docker, you can manually set up the development environment with the following steps:

1. **Start the Backend:**

   ```sh
   poetry run python backend/main.py
   ```

2. **Start the Frontend:**
   ```sh
   cd frontend
   npm run dev
   ```

## Additional Tips

- **Environment Variables:**
  Ensure you set the `ORIGIN` environment variable to the URL where the frontend will be accessible. For example:

  ```sh
  export ORIGIN=http://localhost:3000
  ```

- **Code Formatting:**
  We use `Black` for Python and `Prettier` for JavaScript. Make sure to format your code before submitting any changes.

- **Running Tests:**
  ```sh
  poetry run pytest
  ```

By following these guidelines, you'll be able to set up your development environment smoothly and start contributing to the project. Happy coding!

## Contributing

We welcome contributions from the community! To ensure a smooth collaboration, please follow these guidelines:

### Submitting Changes

1. **Open an Issue**: For major changes, start by opening an issue to discuss your proposed modifications. This helps us understand your intentions and provide feedback early in the process.
2. **Pull Requests**: Once your changes are ready, submit a pull request. Ensure your code adheres to our coding standards and passes all tests.

### Code Formatting

- **Backend**: We use [Black](https://black.readthedocs.io/en/stable/) for code formatting. Run `black` on your code before submitting.
- **Frontend**: We use [Prettier](https://prettier.io/) for code formatting. Run `prettier` on your code before submitting.
- **Line Endings**: Use CRLF line endings unless the file is a shell script or another format that requires LF line endings.

### Dependency Management

We use [Poetry](https://python-poetry.org/) for managing dependencies. Poetry simplifies dependency management by automatically handling package versions and resolving conflicts, ensuring consistency across all environments.

#### Setting Up Your Environment

1. **Install Poetry**: If you haven't already, install Poetry using `pip install poetry`.
2. **Install Dependencies**: After cloning the repository, navigate to the project's root directory and run `poetry install`. This command installs all necessary dependencies as defined in the `pyproject.toml` file and creates an isolated virtual environment.
3. **Activate Virtual Environment**: You can activate the virtual environment using `poetry shell` or run commands directly using `poetry run <command>`.

#### Adding or Updating Dependencies

- **Add a Dependency**: Use `poetry add <package-name>` to add a new dependency.
- **Update a Dependency**: Use `poetry update <package-name>` to update an existing dependency.

### Running Tests and Linters

Before submitting a pull request, ensure your changes are compatible with the project's dependencies and coding standards. Use the following commands to run tests and linters:

- **Run Tests**: `poetry run pytest`
- **Run Linters**: `poetry run ruff check backend` and `poetry run isort --check-only backend`

By following these guidelines, you help us maintain a high-quality codebase and streamline the review process. Thank you for contributing!
