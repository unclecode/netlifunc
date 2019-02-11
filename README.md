# netlifunc

A sample that shows using netlify fo both hosting the static as well as aws lambda functions. Steps are very straightforward as bellow:
1. first create an empty vue project with vue-cli `vue create -d netlifunc`
2. second add the plugin `vue add netlify-lambda`
3. third open the project, check the `src` folder you will find the `lambda` folder, whatever javascript file inside this folder will be considered as lambda function
4. push code into a repository
5. create a netlify project and add the repo
6. from now on, whenever you make any change and push it automatically is available. CD


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
