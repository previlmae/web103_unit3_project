# WEB103 Project 3 - *UnityGrid Plaza*

Submitted by: Elvanice Previlma

About this web app: A virtual community space that allows users to explore events by location. Users can click on one of four locations on an interactive map to view upcoming events at that venue.

Time spent: 9 hours

## Required Features

The following **required** functionality is completed:

- [x] The web app uses React to display data from the API
- [x] The web app is connected to a PostgreSQL database, with an appropriately structured Events table

  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**

- [x] The web app displays a title.
- [x] Website includes a visual interface that allows users to select a location they would like to view.
- [x] Each location has a detail page with its own unique URL.
- [x] Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.

The following optional features are implemented:

- [x] An additional page shows all possible events

The following additional features are implemented:


## Video Walkthrough

Here's a walkthrough of implemented required features:

<div style="position: relative; padding-bottom: 66.66666666666666%; height: 0;"><iframe src="https://www.loom.com/embed/92aeb3e19b3846a78020ac9dbd6bcffb" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>


GIF created with ScreenToGif

## Notes

Challenges encountered: Setting up the PostgreSQL connection on Render, configuring CORS and environment variables, and connecting the React frontend to the Express backend API.

## License

Copyright 2026 Elvanice Previlma

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.