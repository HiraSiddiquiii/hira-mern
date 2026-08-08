# HisabDo Web Application

## Day 8 – Capstone Project

**Track:** MERN / Next.js
**Project:** HisabDo Web Application
**Phase:** Product Analysis, Planning & Architecture

---

## 1. Project Overview

HisabDo is a digital Khata and financial management application designed for shopkeepers, freelancers, small businesses, and individuals.

The application helps users manage customers, record transactions, track receivables and payables, manage expenses, view financial analytics, generate reports and invoices, and maintain their business records digitally.

The objective of this capstone project is to analyze the HisabDo ecosystem and design a modern, responsive web application using the MERN / Next.js technology stack.

The Day 8 phase focuses on product analysis, user flow, page planning, application modules, technology selection, and project architecture rather than implementing all features.

---

# 2. Product Analysis

The major functionality identified during the analysis includes:

* Customer management
* Digital Khata / ledger
* Credit and debit transactions
* Receivables management
* Payables management
* Expense tracking
* Dashboard analytics
* Financial reports
* PDF generation
* Invoice management
* Payment reminders
* Backup and restore
* Multiple languages
* Multiple currencies
* Security and authentication
* Calculator functionality
* Business financial overview

The proposed web application will organize these features into a clean and responsive dashboard-based interface.

---

# 3. Website Page List

## Public Pages

* Home
* Features
* About
* Pricing
* Contact
* FAQ
* Privacy Policy
* Terms & Conditions

## Authentication Pages

* Login
* Register
* Forgot Password
* Reset Password

## Application Pages

* Dashboard
* Customers
* Customer Details
* Transactions
* Expenses
* Receivables
* Payables
* Analytics
* Reports
* Invoices
* Notifications
* Backup & Restore
* Calculator
* Profile
* Settings

---

# 4. Web Application Module List

## 4.1 Authentication Module

Responsibilities:

* User registration
* User login
* User logout
* Password hashing
* JWT authentication
* Protected routes
* Authentication state management

## 4.2 Dashboard Module

The dashboard will provide a quick overview of the user's financial activity.

It will display:

* Total receivables
* Total payables
* Total expenses
* Available balance
* Recent transactions
* Customer summary
* Financial charts

## 4.3 Customer Management Module

Features:

* Add customer
* Edit customer
* Delete customer
* Search customer
* View customer details
* View customer balance
* View customer transaction history

## 4.4 Khata / Ledger Module

Features:

* Record credit
* Record debit
* Record payment
* Add transaction notes
* View transaction history
* Automatically calculate customer balance

## 4.5 Transaction Module

Transaction categories include:

* Income
* Payment received
* Payment given
* Credit
* Debit

## 4.6 Expense Module

Features:

* Add expense
* Edit expense
* Delete expense
* Expense categories
* Expense amount
* Expense date
* Expense notes

## 4.7 Receivables and Payables Module

The module separates financial obligations into:

**Receivables:** Money that customers owe the business.

**Payables:** Money that the business owes to other people or businesses.

## 4.8 Analytics Module

The analytics module will provide visual information about:

* Income
* Expenses
* Receivables
* Payables
* Monthly performance
* Transaction trends

## 4.9 Reports Module

Possible reports include:

* Customer statement
* Ledger report
* Transaction report
* Expense report
* Financial summary

## 4.10 Invoice Module

Features:

* Create invoice
* Select customer
* Add products or services
* Calculate totals
* Generate invoice PDF
* Generate QR code
* Share invoice

## 4.11 Notification Module

Possible functionality:

* Payment reminders
* Due-date reminders
* WhatsApp sharing
* SMS reminders

## 4.12 Backup and Restore Module

Features:

* Backup data
* Restore data
* Export records
* Import records

## 4.13 Settings Module

Settings will include:

* Profile
* Language
* Currency
* Security
* Notifications
* Backup
* Theme

---

# 5. Complete User Journey

The proposed user journey is:

```text
User
  |
  v
Home Page
  |
  v
Register / Login
  |
  v
Authentication
  |
  v
Dashboard
  |
  +-------------------+
  |                   |
  v                   v
Customers         Transactions
  |                   |
  v                   v
Add Customer      Add Transaction
  |                   |
  +---------+---------+
            |
            v
       Updated Balance
            |
            v
        Dashboard
            |
     +------+------+--------+
     |      |      |        |
     v      v      v        v
 Expenses Analytics Reports Invoices
     |      |      |        |
     +------+------+--------+
            |
            v
       Financial Overview
```

### Basic Customer Flow

```text
Login
  ↓
Dashboard
  ↓
Customers
  ↓
Add Customer
  ↓
Customer Details
  ↓
Create Transaction
  ↓
Balance Updated
  ↓
View Transaction History
```

### Basic Payment Flow

```text
Customer
  ↓
Customer Details
  ↓
Outstanding Balance
  ↓
Record Payment
  ↓
Balance Updated
  ↓
Payment Reminder / Statement
```

---

# 6. Proposed Next.js Folder Structure

```text
hisabdo-web/
│
├── frontend/
│   │
│   ├── app/
│   │   ├── page.tsx
│   │   │
│   │   ├── login/
│   │   │   └── page.tsx
│   │   │
│   │   ├── register/
│   │   │   └── page.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   │
│   │   │   ├── customers/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── transactions/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── expenses/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── analytics/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── reports/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── invoices/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   └── settings/
│   │   │       └── page.tsx
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   ├── features/
│   │   │   └── page.tsx
│   │   │
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── DashboardCard.tsx
│   │   ├── CustomerCard.tsx
│   │   ├── TransactionTable.tsx
│   │   ├── ExpenseTable.tsx
│   │   ├── Charts.tsx
│   │   ├── Modal.tsx
│   │   └── Button.tsx
│   │
│   ├── lib/
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   └── utils.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   └── useCustomers.ts
│   │
│   ├── context/
│   │   └── AuthContext.tsx
│   │
│   ├── public/
│   │   ├── images/
│   │   └── icons/
│   │
│   └── package.json
│
├── docs/
│   └── analysis.md
│
└── README.md
```

---

# 7. Proposed Technology Stack

| Category             | Technology       |
| -------------------- | ---------------- |
| Frontend             | Next.js          |
| UI Framework         | React.js         |
| Programming Language | TypeScript       |
| Styling              | Tailwind CSS     |
| Backend              | Node.js          |
| API Framework        | Express.js       |
| Database             | MongoDB          |
| ODM                  | Mongoose         |
| Authentication       | JWT              |
| Password Security    | bcrypt           |
| Charts               | Recharts         |
| Forms                | React Hook Form  |
| Validation           | Zod              |
| API Testing          | Postman          |
| Version Control      | Git              |
| Repository           | GitHub           |
| Frontend Deployment  | Vercel           |
| Backend Deployment   | Render / Railway |

---

# 8. UI/UX Improvement Suggestions

## 1. Responsive Dashboard

The web application should work smoothly on desktop, tablet, and mobile screens.

## 2. Clear Financial Summary

The dashboard should immediately show:

* Receivables
* Payables
* Expenses
* Balance

This allows users to understand their financial position quickly.

## 3. Quick Action Buttons

Common actions should be easily accessible:

```text
+ Add Customer
+ Add Transaction
+ Add Expense
+ Create Invoice
```

## 4. Improved Data Visualization

Charts should clearly display income, expenses, receivables, payables, and monthly trends.

## 5. Global Search

Users should be able to quickly search customers, transactions, invoices, and other records.

## 6. Dark Mode

The application should provide light and dark themes for better accessibility and user preference.

## 7. Helpful Empty States

Instead of displaying empty tables, the application should provide useful guidance and a clear call-to-action.

Example:

```text
No customers found.

Add your first customer to start managing
your digital Khata.

[ + Add Customer ]
```

## 8. Better Feedback and Error Handling

The application should provide:

* Loading indicators
* Success notifications
* Error messages
* Delete confirmations
* Form validation
* Empty states

---

# 9. Security Considerations

The application should follow basic security practices:

* Password hashing using bcrypt
* JWT-based authentication
* Protected application routes
* Environment variables for secrets
* Input validation
* Secure API communication
* Authorization checks
* Proper error handling

---

# 10. Future Development Plan

### Phase 1 – Analysis

* Study HisabDo ecosystem
* Identify features
* Analyze user journey
* Define application modules

### Phase 2 – Architecture

* Create Next.js project
* Design folder structure
* Design database models
* Plan API endpoints

### Phase 3 – UI Development

* Landing page
* Authentication pages
* Dashboard
* Customer management
* Transaction management

### Phase 4 – Backend Development

* Express server
* MongoDB integration
* Authentication
* REST APIs
* Business logic

### Phase 5 – Advanced Features

* Analytics
* Reports
* Invoices
* Notifications
* Backup and restore

### Phase 6 – Testing and Deployment

* API testing
* UI testing
* Responsive testing
* Security testing
* Deployment

---

# 11. Day 8 Expected Outcome

At the end of Day 8, the project has a defined:

* Product scope
* Website page structure
* Application module structure
* User journey
* User flow
* Next.js architecture
* Technology stack
* UI/UX improvement plan
* Future development roadmap

The actual feature implementation will be completed in later phases.

---

## Project Status

**Day 8 – Analysis and Architecture**

* [x] Product analysis
* [x] Website page list
* [x] Application module list
* [x] User journey
* [x] User flow
* [x] Next.js folder structure
* [x] Technology stack
* [x] UI/UX improvement suggestions
* [ ] Full feature implementation
* [ ] Backend API implementation
* [ ] Database implementation
* [ ] Deployment

---

## References

* HisabDo Official Website: https://hisabdo.app/
* HisabDo Mobile Application: Google Play Store

---

**Prepared for: HisabDo Internship Program – MERN / Next.js Track**

**Day 8 – Capstone Project**
