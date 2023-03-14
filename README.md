# Google Books

{add test badges here, all projects you build from here on out will have tests, therefore you should have github workflow badges at the top of your repositories: [Github Workflow Badges](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)}

## Demo & Snippets

Add Images

---

## Requirements

- Using Google API.
- Form containing a text input and submit/search button.
- Render books using grid based on search query.
- Each book must contain Image, Author, Title & Description.
- Must use async/await.
- Must be Responsive.

## Stack

- React
- SCSS

---

## Build Steps

- Clone this Repo
- git clone https://github.com/mitchanderson202/Google-Books
- cd into folder
- npm install
- npm run dev

---

## Design Goals

- The plan was to be pretty basic: Title, Description and the Search area with the grid.
- The grid will render 3 boxes over 1400px, 2 under 1400px and 1 for under 800px.

---

## Known issues

- I've limited the description to 1000 words so that the grid boxes didn't get too long, this cuts words out on the longer descriptions.
- In Mobile and Tablet moves, the boxes can render different lengths, I haven't decided what the best look is as boxes with small descriptions can have huge whitespace.
- Image sizes are set by Google's API, I haven't sized them myself which contributes to the issue above.

---

## Future Goals

- Better design to help decide best approach to fixing box sizes.
- Add tests.
- Add modal to open when book clicked that could also link to a real store.

---

## Change logs

- 14/03/22. Updated readme.

---
