# Estate AI 🏢🤖

Estate AI is a full-stack application that uses machine learning to predict the approximate rent a user would need to pay for their requirement across major metro cities of India. The application is built on NextJS 13 and TailwindCSS for the frontend and uses TypeScript for robust code. The backend was initially built on FastAPI but later migrated to Flask for easier deployment.

You can check the frontend of the site [Estate AI](https://estate-ai.vercel.app/)

## Features

- The application uses machine learning to predict the approximate rent a user would need to pay for their requirement.
- The model is trained using Scikit-Learn and with Random Forest Regressor Algorithm with 89% Accuracy.
- The frontend is built on NextJS 13 and TailwindCSS and uses TypeScript for robust code.
- The backend is built on Flask for easier deployment, previously it was on FastAPI

## Getting Started

To get started with the application, clone the repository to your local machine:

### Frontend Setup

- Clone the repository to your requried workspace using the command below

```
git clone https://github.com/Lordhacker756/Estate-AI
```

- Install the requirements using the command

```
npm install
```

- Run the frontend with the code

```
npm run dev
```

### Backend Setup

**Note: As the model was too heavy to be deployed on any of the free backend hosting services, you need to run both the frontend and the backend in your system to test the app!**

- Clone the backend repository using the command below

```
git clone https://github.com/Lordhacker756/Estate-AI-Backend
```

- Install the requirements using the command

```
pip install -r requirements.txt
```

- Run the backend using the following command

```
flask  run --debug -h 0.0.0.0
```

## Contributing

Contributions to the project are welcome. If you find any bugs or want to suggest improvements, please open an issue or submit a pull request.

## Future Developments

In the days to come,I'm also planning to develop a Mobile app for the same using React Native😄

## License

The project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.