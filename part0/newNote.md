# What happend when we submit a data through form?

```mermaid
graph TD
    A[Save Button Clicked] --> B[New Note - POST Request]
    B --> C[GET Request - /exampleapp/new_notes]
    C --> D[Reload - HTML, CSS, JS - 3 HTTP Requests]
    D --> E[JSON - GET]
    E --> F[Callback Function]
    F --> G[Render Notes on HTML]
    