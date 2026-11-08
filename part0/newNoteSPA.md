# What happend when we submit a data of form on SPA?

```mermaid
graph TD
    A[Save Button Clicked] --> B[New Note - JS Function executes]
    B --> C[Data updated in local DOM storage using JS function]
    C --> D[Modify - HTML DOM Tree]
    D --> E[Send To Server - POST Request]
    E --> F[Response of 201 from server]
    D --> G[The page shows new changes without reloading the page]