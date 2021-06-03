const  express = require('express');
const App = express();
const  port = process.env.PORT || 3000;
const  path = require('path')
const hbs = require('hbs');


App.set("view engine", "hbs");
//adding stattic path
// console.log(__dirname);

hbs.registerPartials(path.join(__dirname,"./page/common"))
App.use(express.static(path.join(__dirname, "../public")))
App.set('views', "./src/page/views")


//routing
App.get("/", (req, res)=>{
res.send("index");
});

App.get("/about", (req, res) => {
  res.render("about");
});

App.get("/weather", (req, res) => {
  res.render("weather");
});

App.get("*", (req, res)=>{
    res.render("404",{
      errorMsg: 'Opps! page Not found'
    })
})


App.listen(port,()=>{
console.log(`it is working! and listening at port number ${port}.`);
});