# What happens when a page loads in SPA?**

```mermaid
graph TD
    A[GET Request] --> B[SPA - HTML]
    B --> C[3 More GET Requests - main.css, spa.js, data.json]
    C --> D[Callback Function]
    D --> E[Modifies HTML DOM Tree if Required through Event Handlers]