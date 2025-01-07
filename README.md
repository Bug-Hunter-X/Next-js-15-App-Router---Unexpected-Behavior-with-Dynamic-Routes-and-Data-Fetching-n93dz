# Next.js 15 App Router Bug Report

This repository demonstrates an unexpected behavior encountered when using dynamic routes and data fetching within the Next.js 15 App Router.  The bug involves inconsistencies in data retrieval depending on navigation methods (e.g., direct link vs. internal navigation).  The provided code examples showcase the problem and its proposed solution.

## Bug Description
When accessing a dynamic route directly via a URL, the data fetching might fail or produce incorrect results. However, navigating to the same route internally within the application may yield the expected results. This inconsistency suggests a potential issue with how the App Router handles dynamic segments in conjunction with data fetching mechanisms.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`. 
4. Access the dynamic routes directly (e.g., `/users/123`) and via internal links within the application.
5. Observe the differences in data fetched for identical routes depending on the navigation method.

## Proposed Solution
The solution provided involves refactoring the data fetching approach to ensure consistency regardless of the navigation method.  This may involve optimizing the use of `getServerSideProps` or implementing alternative data fetching strategies appropriate for the App Router.