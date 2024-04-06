# Web Development Project 6 - ExQuote

Submitted by: Mubarak Odufade

This web app: Enables users to lookup the exchange rate of the United States Dollar (USD) to approx. 150 currencies. It provides users with the current rate, as well as historical rates based on a users preference. A user can get the historical rate between 1,2,3,5, or 7 days. The app provides users with useful statistics such as the maximum, minimum, and average rate between these time frames, and each statistic is responsive to the changes in time frames. Users can also get more detailed information about each pair by clicking on the price key, and users can see a line graph that shows users the price changes over the specified time frame as well as the historical rate of each day in the selected timeframe.  

Time spent: 6 hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The app includes at least one unique chart developed using the fetched data that tell an interesting story**
- [X] **Clicking on an item in the list view displays more details about it**
- [X] **Clicking on an item has a direct, unique link to that item's detail view page**


The following **optional** features are implemented:

- [X] The site's customized dashboard contains more content that explains what is interesting about the data
- [ ] The site allows users to toggle between different data visualizations

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://imgur.com/VBTLMWv.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif (https://www.screentogif.com/) for Windows

## Notes

Implementing the routes were tricky, but I was able to figure it out. I created the routes inside the layout component. For the full table, I routed to the home '/' path. And for the detailed pages, I used dynamic routing to append the currency pair key to the home path. (e.g localhost:5173/USDAED)

## License

    Copyright 2024 Mubarak Odufade

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
