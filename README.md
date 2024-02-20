# React News App with Vite and News API

This repository contains a React app that fetches news articles from a chosen category using the News API and builds with Vite.

## Features

- Displays news articles based on a specified category.
- Responsive and user-friendly design.
- Utilizes the modern Vite build tool for efficient development and production builds.
- Flexible foundation for further customization and feature additions.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Vite: Modern build tool for React projects.
- News API: Provides access to news articles from various sources.

## Getting Started

1. Clone this repository: `git clone https://github.com/your_username/react-news-app.git`
2. Install dependencies: `npm install` or `yarn`
3. Start the development server: `npm run dev` or `yarn dev`
4. Open http://localhost:5173 in your browser.

## Customization

- Change the news category by modifying the value passed to the `Newsboard` component.
- Customize the styling and layout using CSS or preferred styling frameworks.
- Add new features and functionalities based on your needs.

## Important

- You'll need a valid API key from the News API to fetch articles. Follow their instructions to obtain one: https://newsapi.org/
- Ensure you secure your API key properly before deploying the app to production.

## Example Usage

```jsx
<Newsboard category="technology" /> // Displays technology news
```
![Technology Image](src/asset/technology.png)

