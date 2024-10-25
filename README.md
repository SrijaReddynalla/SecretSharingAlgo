Overview
This project implements a simplified version of Shamir's Secret Sharing algorithm to retrieve the constant term 
𝑐
c of a polynomial from given encoded roots. The program parses JSON input, decodes values, and uses Lagrange interpolation to find the secret constant term 
𝑐
c of the polynomial.

. Project Structure
├── javascript.js               # JavaScript code for solving the polynomial
├── testcase1.json          # First test case in JSON format
├── testcase2.json          # Second test case in JSON format
└── README.md               # Project documentation

To run Code
node -v
node script.js

Sample output
Constant term for testcase1.json: <calculated_constant_term>
Constant term for testcase2.json: <calculated_constant_term>
