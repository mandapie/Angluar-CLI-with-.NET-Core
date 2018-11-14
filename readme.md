Pre-reqs:
- Node.js (can be downloaded via Chocolatey)
- Visual Studio 2017
- Latest version of TypeScript for Visual Studio 2017 (can be downloaded via VS 2017. It is not auto installed)

Project Environment:
- Create a .NET Core project and use the Angular template.
- Delete default pages that are not needed. (I kept everything)

Notes:
- Tutorial is for Angular 2. Be vary of deprecated features/old libraries.
- Differences discovered:

| What I did                                                    | Tutorial                                                          |
|---------------------------------------------------------------|-------------------------------------------------------------------|
| include subcomponents and imports in the app.module.ts file   | include pipes, custom directives, into component that is used.    |
| ClientHTTP                                                    | HTTP                                                              |
| Pipe features (eg: currency, search funciton)                 | deprecated Pipe feature                                           |

Versions:
- V1: Hard coded data into component
- V2: Hard coded data into service
- V3: Get data via HTTP (ClientHTTP) request