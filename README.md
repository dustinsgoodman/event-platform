# Event Platform

This project is a fully open sourced event platform system. It's currently a discussion whether to ship a fully baked event platform system including website hosting or whether to just implement this as a Headless Event Platform CMS. Currently focusing on the Headless aspects of the project.

Built with [RedwoodJS](https://redwoodjs.com)

## Getting Started

### Prerequisites

- Node.js 18.x (managed via nvm)
- Yarn
- Docker
- Are you on Windows? For best results, follow the [Windows development setup](https://redwoodjs.com/docs/how-to/windows-development-setup) guide

### Setup

1. `git clone git@github.com:dustinsgoodman/event-platform.git`
2. `cd event-platform`
3. `yarn install`
4. `yarn infrastructure:up`
    - Setups your local databases via docker-compose
5. `yarn rw dev`
    - Starts the local dev environment
    - Your browser should automatically open to [http://localhost:8910](http://localhost:8910)
