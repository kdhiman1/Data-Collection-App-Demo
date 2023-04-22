Framework Used:

NodeJS/ExpressJS

Connecting App to MongoDB Database:

app.js: Line 14
routes.js: Line 39
Paste connection string, username & password into quotations

Connecting App to Auth0 API:

routes.js: Line 31 -> Change base URL
routes.js: Line 32 -> Paste in client ID (from Auth0)
routes.js: Line 33 -> Paste in base URL (from Auth0)

Rendering Input Pages for Analytical Parameters:

routes.js: Line 83 -> Line 153

Rendering Data Pages for Analytical Parameters:

routes.js: Line 158 -> Line 292

Placing Parameters into Database:

routes.js: Line 305 -> Line 882

Pass/Fail Functions:

    Crude/Raw Material Storage: 
    approvalFunctions.js: Line 4 -> Line 362

    Neutralization:
    approvalFunctions.js: Line 364 -> Line 620

    Bleaching: 
    approvalFunctions.js: Line 622 -> Line 937

    Deodorization:
    approvalFunctions.js: Line 939 -> Line 1562

    External Storage:
    approvalFunctions.js: Line 1564 -> Line 2514

    Semi-Finished Product:
    approvalFunctions.js: Line 2516 -> Line 3181

    Finished Product: 
    approvalFunctions.js: Line 3183 -> Line 4593

Add New User:

Auth0 (website) -> User Management

Next Steps:
- Have Auth0 determine who is submitting parameter sheet

