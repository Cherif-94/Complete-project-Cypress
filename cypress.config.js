const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'z45voj',
  e2e: {
    baseUrl:'https://qacart-todo.herokuapp.com/' ,
    viewportWidth : 1440 , 
    viewportHeight: 990 , 
    experimentalWebKitSupport : true ,
    videoUploadOnPasses: false , 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});
