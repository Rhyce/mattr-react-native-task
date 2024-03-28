# Mattr Coding Task: Junior Developer - React Native

<hr />

<p align="center">
  <img src="./screens/Home - Screen.png" width="200"/>
  <img src="./screens/User Profile View - Screen.png" width="200"/>
  <img src="./screens/Other Profiles View - Screen.png" width="200"/>
  <img src="./screens/Filter - Screen.png" width="200"/>
</p>

<hr />

## Task Requirements

---

**Please upload this project to your preferred source control platform and share with Mattr. Place your work inside the `/task` folder**

We’d like to see how you approach this challenge, and what process you take, so please aim to push regular commits to the repository as you work through the task.

For this coding task, we’d like you to build out the above interface as a React Native application.

This app that you are going to build will be a simple represantation of a dating app with some basic functionality.

The app will have a total of 4 screens.

The app should have a navigation bar and contain a button for each main section with an icon and a label:

- Activity (First example image)
- Profile (Second example image)

You should:

- Use React Native.
- Demonstrate handling data through API calls.
- Allow the user to click from feed to details
- Alter the design as needed to leave your mark

### Resources

**API Endpoint - URL**

`GET`
https://run.mocky.io/v3/e27b6e75-6ac5-4b8a-9b16-6c4397cb325a

**Figma Mock Designs**

https://www.figma.com/file/LmI6At0j0sysya3kWtbyzl/Mattr---Test?type=design&node-id=0%3A1&mode=design&t=p7DaQxFV78G7PRbR-1

---

## Activity Screen

---

The app should allow a user to view a list of 5 daily connections by including their image, name, age, location and a button which will allow them to navigate to the user profile view and view more information about them (Third example image).

They can also refresh the list of 5 daily connections by pressing on the refresh button which should bring a different set of 5 random connections to their screen.

## Filter Screen

---

The user has the ability to filter the connections.
They can navigate to the filter screen (Fourth example image) by tapping on the filter button at the top of the Activity Screen.

They can filter the daily connections by their gender and age range and also sort the list they see by their matching score (**user.score**) or date joined (**user.created_at**).

## Other Profiles Screen

---

When the user taps on the View Profile button on the Profile card inside the Activity Screen, they will be transfered to a "Other Profile" screen where they can see more information about that user.

This screen should contain:

- A carousel with the photos of a user (**user.photos**)
- First and Last name
- Age
- Location with City and Country separated by a comma (example: "London, United Kingdom")
- User Bio
- A list of all the interests for that particular user
- A heart button which will mark the user as a match

**Matching with a user**

By tapping on the heart button in this screen the button should fill up showcasing that you have liked this user and it should be saved for the next time the user comes back to their profile to know that they liked them.

## User Profile Screen

---

This screen is accessed by navigating from navigation bar at the bottom of the app by tapping the Profile button.

This screen should contain the following information:

- A carousel with the photos of a user (**user.photos**)
- First and Last name
- Age
- Location with City and Country separated by a comma (example: "London, United Kingdom")
- User Bio
- A list of all the interests for that particular user

The only things that are different from the "Other Profiles Screen" will be the removal of the heart button as the users can't match with themselves as well as the presence of the navigation bar at the bottom as it is a main section of the app.

## Mocking data

---

We provide you with a mock data API which you can use to lay down the functionality of the app.

The endpoint will provide you with a list of 50 generated users that follow the User Object Example structure below.

**API Endpoint - URL**

`GET`
https://run.mocky.io/v3/e27b6e75-6ac5-4b8a-9b16-6c4397cb325a

**User Object Example from the API**

`Note: "dob" stands of Date of Birth. Use this date value to calculate the age of a user`

```
 {
    "id": 1,
    "first_name": "Magdalen",
    "last_name": "Stracke",
    "gender": "male",
    "bio": "public speaker, business owner",
    "score": 79,
    "location": {
      "city": "Samaraburgh",
      "country": "Mexico"
    },
    "dob": "23/11/2003",
    "photos": [
      {
        "id": 1,
        "path": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/80.jpg"
      },
      {
        "id": 2,
        "path": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/738.jpg"
      },
      {
        "id": 3,
        "path": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/96.jpg"
      },
      {
        "id": 4,
        "path": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/55.jpg"
      },
      {
        "id": 5,
        "path": "https://avatars.githubusercontent.com/u/51905077"
      }
    ],
    "interests": [
      {
        "id": 1,
        "name": "plum"
      },
      {
        "id": 2,
        "name": "ivory"
      },
      {
        "id": 3,
        "name": "turquoise"
      }
    ],
    "created_at": "2024-03-08T06:15:26.698Z"
  },
```
