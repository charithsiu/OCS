// Load the module dependencies
const mongoose = require('mongoose');
const Course = mongoose.model('Course');

// Create a new error handling controller method
const getErrorMessage = function(err) {
    if (err.errors) {
        for (const errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

// Create a new controller method that creates new Courses
exports.create = function(req, res) {
    // Create a new article object
    const course = new Course(req.body);

    // Set the article's 'creator' property
    course.creator = req.user;

    // Try saving the course
    course.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article 
            res.json(course);
        }
    });
};

// Create a new controller method that retrieves a list of articles
exports.list = function(req, res) {
    //console.log("In course controller\n\n\n");
    
    // Use the model 'find' method to get a list of articles
   // Course.find().sort('-created').populate('creator', 'firstName lastName fullName').exec((err, course) => {
Course.find({courseno:/.*CS.*/}).exec((err, courses) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article 
            res.json(courses);
        }
    });
};

// Create a new controller method that returns an existing article
exports.read = function(req, res) {
  //  console.log("Reading...\n\n\n");
    res.json(req.course);

};

// Create a new controller method that updates an existing article
exports.update = function(req, res) {
    // Get the article from the 'request' object
    const course = req.course;

    // Update the article fields
   // article.title = req.body.title;
    //article.content = req.body.content;

    // Try saving the updated article
    course.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article 
            res.json(course);
        }
    });
};

// Create a new controller method that delete an existing article
exports.delete = function(req, res) {
    // Get the article from the 'request' object
    const course = req.article;

    // Use the model 'remove' method to delete the article
    course.remove((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article 
            res.json(course);
        }
    });
};

// Create a new controller middleware that retrieves a single existing article
exports.articleByID = function(req, res, next, id) {
    var exp = '\.*'+req.params.courseno+'\.';
   // console.log("ID:"+exp+"\n"); ///$id.*/  {courseno:"CS538"}
    
Course.find({courseno:new RegExp(exp, 'i')},
function(err, course) {
   // console.log("Error in query:");
  }).exec((err, courses) => {    
    if (err) {
        // If an error occurs send the error message
        return res.status(400).send({
            message: getErrorMessage(err)
        });
        } else {
        // Send a JSON representation of the article 
        res.json(courses);
        }
        //next();
    }); 
    // Use the model 'findById' method to find a single article 
    /*Course.findById(id).populate('creator', 'firstName lastName fullName').exec((err, course) => {
        if (err) return next(err);
        if (!course) return next(new Error('Failed to load article ' + id));

        // If an article is found use the 'request' object to pass it to the next middleware
        req.course = course;

        // Call the next middleware
        
    });*/
    
};

// Create a new controller middleware that is used to authorize an article operation 
exports.hasAuthorization = function(req, res, next) {
    // If the current user is not the creator of the article send the appropriate error message
    if (req.course.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }

    // Call the next middleware
    next();
};