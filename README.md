# Unhandled Promise Rejection in Express.js Route

This example demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous route handlers.  Without proper error handling, these rejections can lead to application crashes without informative error messages.

The `bug.js` file shows the problematic code, where an asynchronous operation (`someAsyncOperation`) is not properly handled for potential errors.  The `bugSolution.js` file provides the corrected version with robust error handling.