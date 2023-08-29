
# Contacts Display Page

This project features a "Contacts Display" page that fetches data from the provided API and presents it in a user-friendly format. The project is hosted on StackBlitz, and you can access it using the following link: [StackBlitz Link](https://stackblitz.com/edit/sveltekit-test-23m2oe?file=src%2FApp.svelte).

## Features

- The page fetches data from the API: [https://rishabh-test-api.vercel.app/api/contact](https://rishabh-test-api.vercel.app/api/contact).
- Data is locally stored to prevent unnecessary refetching.
- A search field allows users to search for contacts using various fields, except for ID and phone number.
- Only matching contacts are displayed on the screen after a search.
- If no search data is provided, no contacts are displayed.
- The ID is hidden, and all other contact data from the API is presented.
- Efforts have been made to make the data visually presentable.
- CRUD operations functions have been added to `storage.ts`, though they have not been fully implemented due to time constraints.

## Getting Started

1. Clone or download this repository.
2. Navigate to the project folder and install dependencies using either npm or pnpm:
   ```
   npm install
   ```
   or
   ```
   pnpm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   pnpm run dev
   ```
4. Access the app through your browser at the provided local server address.

Feel free to explore the code and the implemented features. If you have any questions or feedback, please don't hesitate to reach out.

Best regards,  
Shubham Singh
