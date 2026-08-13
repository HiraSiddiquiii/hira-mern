
# HisabDo Authentication Flow

## Overview

The Day 13 authentication foundation provides Login, Register,
Forgot Password UI, form validation, authentication state handling,
and protected Dashboard routing.

## Authentication Flow

```text
                    ┌───────────────┐
                    │     Home      │
                    └───────┬───────┘
                            │
                 ┌──────────┴──────────┐
                 │                     │
                 ▼                     ▼
          ┌─────────────┐       ┌─────────────┐
          │    Login    │       │   Register  │
          └──────┬──────┘       └──────┬──────┘
                 │                     │
                 ▼                     ▼
          ┌─────────────────────────────────┐
          │       Form Validation           │
          │ Email + Password + Required     │
          │ Fields + Password Confirmation  │
          └───────────────┬─────────────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │ Authentication  │
                 │     State       │
                 └────────┬────────┘
                          │
                 ┌────────┴────────┐
                 │                 │
              Valid             Invalid
                 │                 │
                 ▼                 ▼
          ┌─────────────┐    ┌─────────────┐
          │  Dashboard  │    │ Show Errors │
          └──────┬──────┘    └─────────────┘
                 │
                 ▼
        ┌────────────────────┐
        │ Protected Routes   │
        │ Transactions       │
        │ Categories         │
        │ Reports            │
        │ Settings           │
        └────────────────────┘


                 Direct Access
                      │
                      ▼
              ┌───────────────┐
              │ Authenticated?│
              └───────┬───────┘
                  No  │  Yes
                      │
              ┌───────┴───────┐
              ▼               ▼
           /login         /dashboard