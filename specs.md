- [X] A user can create a new to do list item
  - [X] A GET `/todo/createnew` route exists that renders our form
  - [X] A POST `/todo/createnew` route exists
  - [X] An async database function that creates a new record exists
  - [X] A form in `createnew.pug` exists and connects to our POST route

- [X] A user can see all of their to do items
  - [X] A GET `/` route exists that renders data for all todos
  - [X] An async database function that retrieves all records exists
  - [X] A view that displays all of the data passed to it from the route

- [ ] A user can see just one of their to do items
  - [ ] A GET `/todo/:id` route exists that renders data for all todos
  - [ ] An async database function that retrieves one record exists
  - [ ] A view that displays all of the data passed to it from the route

- [ ] A user can delete one of their to do items
  - [ ] A DELETE `/todo/:id` route exists that accesses our query to delete an item
  - [ ] An async database function that deletes one record exists
  - [ ] A view that displays the form to delete a particular item

- [ ] A user can update one of their to do items
  - [ ] A GET `/todo/update/:id` route exists that renders our form
  - [ ] A PUT `/todo/update/:id` route exists
  - [ ] An async database function that updates a new record exists
  - [ ] A form in `update.pug` exists and connects to our PUT route
