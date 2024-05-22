[![Frontend Masters](./full.png)][fem]

This is a companion repo for the [Introduction to Next.js, v3][course] course on [Frontend Masters][fem]. This application is built from scratch throughout the course.

## Slides
Slides for the course are available [on Notion][slides]

### Install Dependencies
```bash
npx create-next-app@latest intro-v3-app
```

```bash
npm i prisma --save-dev

npm i @prisma/client@latest

npx prisma init --datasource-provider sqlite

npx prisma migrate dev --name init
```

[fem]: https://frontendmasters.com
[course]: https://frontendmasters.com/courses/next-js-v3/
[slides]: https://scottmoss.notion.site/scottmoss/Intro-to-Next-js-V3-6cefbdba58d94e3897dcb8d7e7fc0337
