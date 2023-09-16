# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Project Name: [my-course-roster]

Key Features:

1. User can learn many courses from this site.
2. any user can be face a good experience for Responsive design.
3. for more learning, user have to finish previous courses because of the credit limitation.

About state management:

In React, state management is essential for handling dynamic data and user interactions within components. The useState hook is one of the fundamental hooks in React that allows you to add state to functional components.

In this project, for showing courses i need to use useState hook , it easily stored my json data in an array of object . it help me to use array.map for displaying various information.

most importantly useState helps me to send props from course.jsx to enrolled.jsx by use at App.jsx .
