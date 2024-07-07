# Spell List React App

## Overview
The Spell is a web application built using React.js that allows users to browse and explore a list of spells fetched from the [D&D 5e API](https://www.dnd5eapi.co/api). Users can view spells paginated and access detailed information about each spell.

## Features
- **Spell List**: Paginated display of spells fetched from the D&D 5e API.
- **Spell Details**: Detailed view of each spell, including attributes and descriptions.
- **Pagination**: Navigate through multiple pages of spell listings.
- **Responsive Design**: Ensures usability on various screen sizes.

## Installation
To run the Spell List React App locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd spell


2. Install dependencies::
   ```bash
   npm install
   or
   yarn install

3. Start the development server:::
   ```bash
   npm dev
   or
   yarn dev

4. Open your browser and navigate to http://localhost:5173 to view the app.

## Usage
Once the app is running, you can:

- Browse through the list of spells fetched from the D&D 5e API.
- Click on any spell to view its detailed information.

## Technologies Used
- React.js
- React Router (for navigation)
- Redux toolkit
- Tanstack Query
- Jest (for testing)
- Tailwindcss  (for styling)



spell/
├── public/
├── src/
│   ├── components/
│   │   ├── spell/
│   │   │   ├── SpellList.js
│   │   │   ├── SpellDetails.js
│   ├── pages/
│   │   ├── Landing.tsx
│   ├── services/
│   │   └── spells.ts (contains functions to fetch spells from the D&D 5e API)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── package.json
└── README.md






## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

