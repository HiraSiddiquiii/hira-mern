# Day 13 Progress Report – HisabDo Capstone

## Date

13 August 2026

## Objective

Implement the Authentication and User Management foundation for
the HisabDo MERN / Next.js capstone project.

## Completed Tasks

### 1. Login Page
- Created Login page.
- Added email validation.
- Added password validation.
- Added Forgot Password navigation.
- Added Register navigation.
- Connected successful login flow to the Dashboard.

### 2. Register Page
- Created Register page.
- Added full name validation.
- Added email validation.
- Added password validation.
- Added confirm password validation.
- Connected successful registration flow to the Dashboard.

### 3. Forgot Password
- Created Forgot Password UI.
- Added email input and validation.
- Added reset-link request interface.
- Added navigation back to Login.

### 4. Authentication Flow
- Implemented frontend authentication state handling.
- Added user state storage using browser local storage.
- Connected Login/Register with the authentication state.
- Added protected Dashboard routing.

### 5. Protected Dashboard
- Dashboard checks authentication state.
- Authenticated users can access `/dashboard`.
- Unauthenticated users are redirected to `/login`.

### 6. Form Validation
Validation was implemented for:
- Required fields
- Email format
- Password length
- Confirm password matching

### 7. Evidence

Authentication testing screenshots are available in:

`screenshots/day-13-authentication/`

Evidence includes:

1. Login Page
2. Login Validation
3. Register Page
4. Register Validation
5. Protected Dashboard
6. Protected Route Redirect
7. Forgot Password

## Authentication Flow

The authentication flow is documented separately in:

`docs/authentication-flow.md`

## Current Implementation

The current implementation represents the frontend authentication
foundation. Browser local storage is being used temporarily for
authentication state.

A production authentication system can later be connected using
a backend API, database, password hashing, JWT authentication,
and secure HTTP-only cookies.

## Outcome

Day 13 authentication and user-management foundation has been
implemented and tested successfully.