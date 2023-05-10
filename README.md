RESTFUL API Service

Build an application that performs the following actions: 

    .Responds to an HTTP GET request at /products/{id} and delivers product data as JSON (where {id} will be a number. 
    
    Example product IDs: 13860428, 54456119, 13264003, 12954218) 
    . Example response: {"id":13860428,"name":"The Big Lebowski (Blu-ray) (Widescreen)","current_price":{"value": 13.49,"currency_code":"USD"}}
    . Performs an HTTP GET to retrieve the product name from an external API. (For this exercise the data will come from redsky.target.com, but let’s just pretend this is an internal resource hosted by myRetail) 
    . Example: https://redsky.target.com/v3/pdp/tcin/13860428?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics&key=candidate
    . Reads pricing information from a NoSQL data store and combinesit with the product id and name from the HTTP request into a single response. 
    . BONUS: Accepts an HTTP PUT request at the same path (/products/{id}), containing a JSON request body similar to the GET response, and updates the product’s price in the data store.


    Technologies(All Latest Versions):

    Visual Studio Code IDE
    nodeJs with Element Framework
    MongoDB
    Chrome Postman App(For Testing)

    Running the project:
    Open 2 cmd terminal on VS Code and run the following
    cmd 1: nodemon run start
    cmd 2: mongod (has to run first; runs on background)

    Testing:
    open Postman App
    load http://localhost:9000/products in url box
    start with GET method then copy item id and use to test other methods
     - ids are auto generated

    DataStorage:
    open MongoDB
    load 'mongodb://localhost/ProductDBex'
