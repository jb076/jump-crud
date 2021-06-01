# Install:
1. Clone the Repository
2. In the base directory, run ```npm install```
3. Run ```npm start```

# Tests:
``` npm test ```

# Thoughts
Some next iteration items I'd like to call out that I think would be obvious wins:
1. Using context/redux.  I think I am at the limit of the number of times I'd like to be passing items down from the top level.  I think this could be achieved with just the context api, but assuming the app would get more complex, therefore prompting the change, more complex state management might be useful
2. A search/sort would be easy wins.
3. Better feedback on form validation.
4. SASS/LESS or Styled components.  The CSS here is pretty rough and ready, and I think I just prefer LESS but have enjoyed Styled components in the past.
5. Improve test coverage.
6. Focus on render for the edit form.  Save the user a click.
7. Pagination would likely be necessary/helpful.
8. More Error Handling.  A modal to report errors, eg on api failures.
9. Hide "no users" messaging if edit window is open. 

There's a bit of bloat from using react-create-app.  Not all of it got removed.
