# HisabDo Capstone Project

A modern business management web application inspired by the HisabDo mobile application, built using Next.js, React, TypeScript, and Tailwind CSS.

## Day 10 – Core Functionality Implementation

### Overview

On Day 10, the HisabDo Capstone project was extended from a UI-based prototype into a functional business management application.

### Implemented Features

* Working Dashboard with business statistics
* Functional Transactions Management module
* Add new transactions
* Delete transactions
* Dynamic transaction totals
* Sales and expense calculations
* Transaction status management
* Form validation
* Responsive transaction table
* Responsive Dashboard layout
* Navigation between application pages

### Reusable Components

The application uses reusable components to maintain a clean and scalable architecture:

* `Button.tsx` – Reusable buttons with multiple variants
* `Card.tsx` – Reusable summary/stat cards
* `FormInput.tsx` – Reusable form input component
* `TransactionTable.tsx` – Reusable transactions table
* `Navbar.tsx` – Application navigation
* `Sidebar.tsx` – Dashboard navigation
* `Footer.tsx` – Application footer
* `StatCard.tsx` – Dashboard statistics component

### Transaction Form Validation

Transaction form validation includes:

* Customer name is required
* Transaction amount is required
* Amount must be greater than zero
* Validation errors are displayed clearly to the user

### Responsive Design

The application is designed to work across:

* Desktop
* Tablet
* Mobile devices

### Day 10 Testing

The following functionality was tested successfully:

* Dashboard navigation
* Transaction form opening and closing
* Required field validation
* Adding transactions
* Dynamic transaction count
* Dynamic sales and expense totals
* Deleting transactions
* Responsive layout

### Day 10 Screenshots

Screenshots are available in the `screenshots` folder:

* Day10 Dashboard
* Day10 Transactions
* Day10 Add Transaction
* Day10 Validation
* Day10 Added Transaction
* Day10 Mobile Responsive

---

# Day 11 – Categories Module

## Overview

On Day 11, an additional core business module was implemented to expand the functionality of the HisabDo Capstone project.

The **Categories Management module** allows users to organize their income and expense categories through a complete CRUD-style interface.

## Categories Module Features

### Create Category

Users can create a new category by providing:

* Category name
* Category type

  * Income
  * Expense

### Read / List Categories

All available categories are displayed in a responsive table containing:

* Category Name
* Category Type
* Actions

### Edit Category

Users can select an existing category, update its name or type, and save the changes.

### Delete Category

Users can delete an existing category after confirmation.

### Validation

Category form validation includes:

* Category name is required
* Category name must contain at least 2 characters
* Duplicate category names are prevented
* Validation errors are displayed clearly

## Loading, Empty and Error States

The Categories module includes:

* Loading state while the page initializes
* Empty state when no categories are available
* Error state with a retry option

## Navigation

The Categories module is connected to the existing application navigation through the Dashboard sidebar.

Available dashboard navigation:

* Overview
* Transactions
* Categories
* Reports
* Settings

## Responsive Design

The Categories module has been tested for:

* Desktop
* Tablet
* Mobile devices

The category form and table adapt to different screen sizes using responsive Tailwind CSS classes.

## Day 11 Testing

The following functionality was tested successfully:

* Categories page navigation
* Category list display
* Adding a category
* Required field validation
* Minimum character validation
* Duplicate category validation
* Editing a category
* Deleting a category
* Delete confirmation
* Loading state
* Empty state
* Error state
* Responsive layout

## Day 11 Screenshots

Screenshots are available in the `screenshots` folder:

* Day11 Categories
* Day11 Add Category
* Day11 Validation
* Day11 Added Category
* Day11 Edit Category
* Day11 Delete Category
* Day11 Mobile Responsive

## Day 11 Progress Summary

Day 11 expanded the HisabDo Capstone project from a transaction-focused application into a multi-module business management interface.

The project now contains two functional core modules:

1. **Transactions Management**
2. **Categories Management**

Both modules include functional user interactions, validation, responsive layouts, and reusable UI components.

## Technology Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Git
* GitHub

## Project Structure

```text
hisabdo-capstone/
├── app/
│   ├── categories/
│   ├── dashboard/
│   ├── login/
│   ├── reports/
│   ├── settings/
│   ├── transactions/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── FormInput.tsx
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   ├── StatCard.tsx
│   └── TransactionTable.tsx
├── public/
├── screenshots/
├── package.json
├── README.md
└── tsconfig.json
```

## Build Verification

The project was successfully tested using:

```bash
npm run build
```

The production build completed successfully with all application routes generated without TypeScript or compilation errors.
