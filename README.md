This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run to install dependencies :
```bash
npm install
```
Second, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## About the PRojects

Device Reading Card Info

[Device Reading Card Info] <---> [User Interface] <---> [Web Application Backend] <---> [Database]

                                                                    |
                                                                    v

                                                        [Administrator Interface]
                                                            [Parents Interface]


## more info
    Device Reading Card Info:
        Represents a physical device capable of reading student ID card information.

    User Interface:
        Provides an interface for users (students) to input information, possibly through a form where they swipe or input their ID card details.

    Web Application Backend:
        Manages communication between the user interface, device reading card info, and the database.
        Handles authentication, attendance recording, and data storage.

    Database:
        Stores student information, attendance records, and related data.

    Administrator Interface:
        Provides an interface for administrators to manage student files.
        Allows administrators to view, edit, and update student attendance records and other related information.

    Parents Interface:
        Provides an interface for parents to access their child's attendance records.
        Allows parents to view their child's attendance days, ensuring transparency and communication.

