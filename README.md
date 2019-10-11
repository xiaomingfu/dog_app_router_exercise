## router exercise

### main step:

- Doglist component
  - pass props from App component, use map function to generate dog info
- Dog component
  - difficult point:
    - write getDog function in App component, pass routeProps as parameter, use find() to selete the one with the same name as current one(the name pass in router pattern), then pass routeProps and current one as props to Dog component
- use map function to generate info
- Navbar component
  - pass props from App component, use map function to generate dog name
- Route component
  - refactor route
- styling with bootstrap

![dog app](https://github.com/xiaomingfu/dog_app_router_exercise/blob/master/src/dog-router-exercise.gif)
