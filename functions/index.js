// var express =require("express") ;
// var app =express();

// var mongoose = require("mongoose");
// // var methodOverride = require("method-override");
// // var expressSanitizer =require("express-sanitizer");

// var bodyParser =require("body-parser");
// app.use(bodyParser.urlencoded({extended: true}));
// //app.use(expressSanitizer());
// app.use(express.static("public"));

// mongoose.connect("mongodb://AyushGup:twentysix26@ds141611.mlab.com:41611/firebase_kishnacamp",{useNewUrlParser: true});
// // mongodb://AyushGup:twentysix26@ds141611.mlab.com:41611/firebase_kishnacamp
// // mongodb://AyushGup:twentysix26@ds239911.mlab.com:39911/comments_v1
// var commentSchema = new mongoose.Schema({
// 	text: String,
// 	author: String
// });

// //set up model

// var Comment= mongoose.model("Comment", commentSchema);

// var campgroundSchema = new mongoose.Schema({
//     address: String,
// 	comments: [
// 		{
// 			type: mongoose.Schema.Types.ObjectId,
// 			ref: "Comment" //name of the model ("Comment")
// 		}
// 	]
// });


// //set up model
// var Campground = mongoose.model("Campground", campgroundSchema);

// // Campground.create({
// //     address: "t4",
// // },function(err,Campground){
// //     if(err){
// //         console.log(err);
// //     }
// //     else{
// //         console.log(Campground);
// //     }
// // });


// // Comment.create({
// //       text: "",
// //     author: ""
// // },function(err,data){
// //   if(err){
// //       console.log(err);
// //   }  else{
// //       Campground.findOne({address: "t4"},function(err,found){
// //           if(err){
// //               console.log(err);
// //           }
// //           else{
// //               found.comments.push(data);
// //               found.save(function(err,data2){
// //                   if(err){
// //                       console.log(err);
// //                   }
// //                   else{
// //                     //   console.log(data2);
// //                   }
// //               })
// //           }
// //       })
// //   }
// // })

	
// app.get("/",function(req, res) {
//     res.render("landing.ejs");
// })

// app.get("/Camps-Activities",function(req, res) {
//     res.render("home.ejs");
// })

// app.get("/trek/treks",function(req,res){

//     res.render("show_trek.ejs");
// });
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// app.get("/treks/Mandi-to-PrasharLake-Bajaura-Trek",function(req, res) {

// 	Campground.findOne({address: "t0"}).populate("comments").exec(function(err, foundCampground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("t0.ejs", {camp: foundCampground});
// 		}
// 	});



// });

// app.get("/treks/Mandi-to-PrasharLake-Bajaura-Trek/comment/new",function(req, res) {

// 	Campground.findOne({address: "t0"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("new0.ejs", {camp: campground});
// 		}
// 	});
// });

// app.post("/treks/Mandi-to-PrasharLake-Bajaura-Trek/comment",function(req, res) {

// 	Campground.findOne({address: "t0"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 			res.redirect("/treks/Mandi-to-PrasharLake-Bajaura-Trek");
// 		} else {
// 			//render show template with that campground
// 				{
// 			//create new comment
// 			Comment.create(req.body.comment, function(err, comment){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//connect new comment to campground
// 					campground.comments.push(comment);
// 					campground.save();
// 					//redirect to Campground SHOW page
// 					res.redirect("/treks/Mandi-to-PrasharLake-Bajaura-Trek");
// 				}
// 			});
// 		}
		
// 		}
// 	});
// });
// ///////////////////////////////////////////////////////////////////////////////////////////////
// app.get("/treks/Mandi-to-PrasharLake-Trek",function(req, res) {

// 	Campground.findOne({address: "t1"}).populate("comments").exec(function(err, foundCampground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("t1.ejs", {camp: foundCampground});
// 		}
// 	});



// });

// app.get("/treks/Mandi-to-PrasharLake-Trek/comment/new",function(req, res) {

// 	Campground.findOne({address: "t1"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("new1.ejs", {camp: campground});
// 		}
// 	});
// });

// app.post("/treks/Mandi-to-PrasharLake-Trek/comment",function(req, res) {

// 	Campground.findOne({address: "t1"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 			res.redirect("/treks/Mandi-to-PrasharLake-Trek");
// 		} else {
// 			//render show template with that campground
// 				{
// 			//create new comment
// 			Comment.create(req.body.comment, function(err, comment){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//connect new comment to campground
// 					campground.comments.push(comment);
// 					campground.save();
// 					//redirect to Campground SHOW page
// 					res.redirect("/treks/Mandi-to-PrasharLake-Trek");
// 				}
// 			});
// 		}
		
// 		}
// 	});
// });
// ////////////////////////////////////////////////////////////////////////////////////////////////// 
// app.get("/treks/Bagi-PrasharLake-Trek",function(req, res) {

// 	Campground.findOne({address: "t2"}).populate("comments").exec(function(err, foundCampground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("t2.ejs", {camp: foundCampground});
// 		}
// 	});



// });

// app.get("/treks/Bagi-PrasharLake-Trek/comment/new",function(req, res) {

// 	Campground.findOne({address: "t2"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("new2.ejs", {camp: campground});
// 		}
// 	});
// });

// app.post("/treks/Bagi-PrasharLake-Trek/comment",function(req, res) {

// 	Campground.findOne({address: "t2"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 			res.redirect("/treks/Bagi-PrasharLake-Trek");
// 		} else {
// 			//render show template with that campground
// 				{
// 			//create new comment
// 			Comment.create(req.body.comment, function(err, comment){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//connect new comment to campground
// 					campground.comments.push(comment);
// 					campground.save();
// 					//redirect to Campground SHOW page
// 					res.redirect("/treks/Bagi-PrasharLake-Trek");
// 				}
// 			});
// 		}
		
// 		}
// 	});
// });



// // app.get("/treks/Bagi-PrasharLake-Trek",function(req, res) {
// //   res.render("t2.ejs"); 
// // })
// /////////////////////////////////////////////////////////////////////////////////////////////////////

// app.get("/treks/Bagi-PrasharLake-MchhodriMata-Trek",function(req, res) {

// 	Campground.findOne({address: "t4"}).populate("comments").exec(function(err, foundCampground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("t4.ejs", {camp: foundCampground});
// 		}
// 	});



// });

// app.get("/treks/Bagi-PrasharLake-MchhodriMata-Trek/comment/new",function(req, res) {

// 	Campground.findOne({address: "t4"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("new4.ejs", {camp: campground});
// 		}
// 	});
// });

// app.post("/treks/Bagi-PrasharLake-MchhodriMata-Trek/comment",function(req, res) {

// 	Campground.findOne({address: "t4"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 			res.redirect("/treks/Bagi-PrasharLake-MchhodriMata-Trek");
// 		} else {
// 			//render show template with that campground
// 				{
// 			//create new comment
// 			Comment.create(req.body.comment, function(err, comment){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//connect new comment to campground
// 					campground.comments.push(comment);
// 					campground.save();
// 					//redirect to Campground SHOW page
// 					res.redirect("/treks/Bagi-PrasharLake-MchhodriMata-Trek");
// 				}
// 			});
// 		}
		
// 		}
// 	});
// });




// // app.get("/treks/Bagi-PrasharLake-MchhodriMata-Trek",function(req, res) {
// //   res.render("t4.ejs"); 
// // })

// ///////////////////////////////////////////////////////////////////////////////////////////

// app.get("/treks/PrasharLake-MchhodriMata-Trek",function(req, res) {

// 	Campground.findOne({address: "t4A"}).populate("comments").exec(function(err, foundCampground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("t4A.ejs", {camp: foundCampground});
// 		}
// 	});



// });

// app.get("/treks/PrasharLake-MchhodriMata-Trek/comment/new",function(req, res) {

// 	Campground.findOne({address: "t4A"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("new4A.ejs", {camp: campground});
// 		}
// 	});
// });

// app.post("/treks/PrasharLake-MchhodriMata-Trek/comment",function(req, res) {

// 	Campground.findOne({address: "t4A"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 			res.redirect("/treks/PrasharLake-MchhodriMata-Trek");
// 		} else {
// 			//render show template with that campground
// 				{
// 			//create new comment
// 			Comment.create(req.body.comment, function(err, comment){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//connect new comment to campground
// 					campground.comments.push(comment);
// 					campground.save();
// 					//redirect to Campground SHOW page
// 					res.redirect("/treks/PrasharLake-MchhodriMata-Trek");
// 				}
// 			});
// 		}
		
// 		}
// 	});
// });


// // app.get("/treks/PrasharLake-MchhodriMata-Trek",function(req, res) {
// //   res.render("t4A.ejs"); 
// // })

// //////////////////////////////////////////////////////////////////////////////////

// app.get("/treks/Bagi-PrasharLake-TungaMata-Trek",function(req, res) {

// 	Campground.findOne({address: "t5"}).populate("comments").exec(function(err, foundCampground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("t5.ejs", {camp: foundCampground});
// 		}
// 	});



// });

// app.get("/treks/Bagi-PrasharLake-TungaMata-Trek/comment/new",function(req, res) {

// 	Campground.findOne({address: "t5"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("new5.ejs", {camp: campground});
// 		}
// 	});
// });

// app.post("/treks/Bagi-PrasharLake-TungaMata-Trek/comment",function(req, res) {

// 	Campground.findOne({address: "t5"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 			res.redirect("/treks/Bagi-PrasharLake-TungaMata-Trek");
// 		} else {
// 			//render show template with that campground
// 				{
// 			//create new comment
// 			Comment.create(req.body.comment, function(err, comment){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//connect new comment to campground
// 					campground.comments.push(comment);
// 					campground.save();
// 					//redirect to Campground SHOW page
// 					res.redirect("/treks/Bagi-PrasharLake-TungaMata-Trek");
// 				}
// 			});
// 		}
		
// 		}
// 	});
// });


// // app.get("/treks/Bagi-PrasharLake-TungaMata-Trek",function(req, res) {
// //   res.render("t5.ejs"); 
// // })

// ///////////////////////////////////////////////////////////////////////////////////////////////


// app.get("/treks/PrasharLake-TungaMata-Trek",function(req, res) {

// 	Campground.findOne({address: "t5A"}).populate("comments").exec(function(err, foundCampground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("t5A.ejs", {camp: foundCampground});
// 		}
// 	});



// });

// app.get("/treks/PrasharLake-TungaMata-Trek/comment/new",function(req, res) {

// 	Campground.findOne({address: "t5A"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("new5A.ejs", {camp: campground});
// 		}
// 	});
// });

// app.post("/treks/PrasharLake-TungaMata-Trek/comment",function(req, res) {

// 	Campground.findOne({address: "t5A"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 			res.redirect("/treks/PrasharLake-TungaMata-Trek");
// 		} else {
// 			//render show template with that campground
// 				{
// 			//create new comment
// 			Comment.create(req.body.comment, function(err, comment){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//connect new comment to campground
// 					campground.comments.push(comment);
// 					campground.save();
// 					//redirect to Campground SHOW page
// 					res.redirect("/treks/PrasharLake-TungaMata-Trek");
// 				}
// 			});
// 		}
		
// 		}
// 	});
// });


// // app.get("/treks/PrasharLake-TungaMata-Trek",function(req, res) {
// //   res.render("t5A.ejs"); 
// // })

// /////////////////////////////////////////////////////////////////////////////


// app.get("/treks/Bagi-PrasharLake-ShehlaMata-Trek",function(req, res) {

// 	Campground.findOne({address: "t6"}).populate("comments").exec(function(err, foundCampground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("t6.ejs", {camp: foundCampground});
// 		}
// 	});



// });

// app.get("/treks/Bagi-PrasharLake-ShehlaMata-Trek/comment/new",function(req, res) {

// 	Campground.findOne({address: "t6"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("new6.ejs", {camp: campground});
// 		}
// 	});
// });

// app.post("/treks/Bagi-PrasharLake-ShehlaMata-Trek/comment",function(req, res) {

// 	Campground.findOne({address: "t6"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 			res.redirect("/treks/Bagi-PrasharLake-ShehlaMata-Trek");
// 		} else {
// 			//render show template with that campground
// 				{
// 			//create new comment
// 			Comment.create(req.body.comment, function(err, comment){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//connect new comment to campground
// 					campground.comments.push(comment);
// 					campground.save();
// 					//redirect to Campground SHOW page
// 					res.redirect("/treks/Bagi-PrasharLake-ShehlaMata-Trek");
// 				}
// 			});
// 		}
		
// 		}
// 	});
// });

// // app.get("/treks/Bagi-PrasharLake-ShehlaMata-Trek",function(req, res) {
// //   res.render("t6.ejs"); 
// // })

// /////////////////////////////////////////////////////////////////////////////////////

// app.get("/treks/PrasharLake-ShehlaMata-Trek",function(req, res) {

// 	Campground.findOne({address: "t6A"}).populate("comments").exec(function(err, foundCampground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("t6A.ejs", {camp: foundCampground});
// 		}
// 	});



// });

// app.get("/treks/PrasharLake-ShehlaMata-Trek/comment/new",function(req, res) {

// 	Campground.findOne({address: "t6A"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("new6A.ejs", {camp: campground});
// 		}
// 	});
// });

// app.post("/treks/PrasharLake-ShehlaMata-Trek/comment",function(req, res) {

// 	Campground.findOne({address: "t6A"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 			res.redirect("/treks/PrasharLake-ShehlaMata-Trek");
// 		} else {
// 			//render show template with that campground
// 				{
// 			//create new comment
// 			Comment.create(req.body.comment, function(err, comment){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//connect new comment to campground
// 					campground.comments.push(comment);
// 					campground.save();
// 					//redirect to Campground SHOW page
// 					res.redirect("/treks/PrasharLake-ShehlaMata-Trek");
// 				}
// 			});
// 		}
		
// 		}
// 	});
// });


// app.get("/treks/PrasharLake-ShehlaMata-Trek",function(req, res) {
//   res.render("t6A.ejs"); 
// })
// // app.get("/treks/t6A",function(req, res) {
// //    res.render("t6A.ejs"); 
// // })
// //////////////////////////////////////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////////////////////////

// app.get("/trek/leisure",function(req, res) {

// 	Campground.findOne({address: "leisure"}).populate("comments").exec(function(err, foundCampground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("leisure.ejs", {camp: foundCampground});
// 		}
// 	});



// });

// app.get("/trek/leisure/comment/new",function(req, res) {

// 	Campground.findOne({address: "leisure"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("newl.ejs", {camp: campground});
// 		}
// 	});
// });

// app.post("/trek/leisure/comment",function(req, res) {

// 	Campground.findOne({address: "leisure"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 			res.redirect("/trek/leisure");
// 		} else {
// 			//render show template with that campground
// 				{
// 			//create new comment
// 			Comment.create(req.body.comment, function(err, comment){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//connect new comment to campground
// 					campground.comments.push(comment);
// 					campground.save();
// 					//redirect to Campground SHOW page
// 					res.redirect("/trek/leisure");
// 				}
// 			});
// 		}
		
// 		}
// 	});
// });


// // app.get("/trek/leisure",function(req, res) {
// //   res.render("leisure.ejs"); 
// // });

// /////////////////////////////////////////////////////////////////////////

// app.get("/trek/rafting",function(req, res) {

// 	Campground.findOne({address: "rafting"}).populate("comments").exec(function(err, foundCampground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("rafting.ejs", {camp: foundCampground});
// 		}
// 	});



// });

// app.get("/trek/rafting/comment/new",function(req, res) {

// 	Campground.findOne({address: "rafting"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("newr.ejs", {camp: campground});
// 		}
// 	});
// });

// app.post("/trek/rafting/comment",function(req, res) {

// 	Campground.findOne({address: "rafting"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 			res.redirect("/trek/rafting");
// 		} else {
// 			//render show template with that campground
// 				{
// 			//create new comment
// 			Comment.create(req.body.comment, function(err, comment){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//connect new comment to campground
// 					campground.comments.push(comment);
// 					campground.save();
// 					//redirect to Campground SHOW page
// 					res.redirect("/trek/rafting");
// 				}
// 			});
// 		}
		
// 		}
// 	});
// });


// // app.get("/trek/rafting",function(req, res) {
// //   res.render("rafting.ejs"); 
// // });

// ///////////////////////////////////////////////////////////////////////////////


// app.get("/trek/paragliding",function(req, res) {

// 	Campground.findOne({address: "paragliding"}).populate("comments").exec(function(err, foundCampground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("paragliding.ejs", {camp: foundCampground});
// 		}
// 	});



// });

// app.get("/trek/paragliding/comment/new",function(req, res) {

// 	Campground.findOne({address: "paragliding"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("newp.ejs", {camp: campground});
// 		}
// 	});
// });

// app.post("/trek/paragliding/comment",function(req, res) {

// 	Campground.findOne({address: "paragliding"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 			res.redirect("/trek/paragliding");
// 		} else {
// 			//render show template with that campground
// 				{
// 			//create new comment
// 			Comment.create(req.body.comment, function(err, comment){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//connect new comment to campground
// 					campground.comments.push(comment);
// 					campground.save();
// 					//redirect to Campground SHOW page
// 					res.redirect("/trek/paragliding");
// 				}
// 			});
// 		}
		
// 		}
// 	});
// });


// // app.get("/trek/paragliding",function(req, res) {
// //   res.render("paragliding.ejs"); 
// // });
// ///////////////////////////////////////////////////////////////////////////


// app.get("/trek/guest-house",function(req, res) {

// 	Campground.findOne({address: "guest-house"}).populate("comments").exec(function(err, foundCampground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("guest.ejs", {camp: foundCampground});
// 		}
// 	});



// });

// app.get("/trek/guest-house/comment/new",function(req, res) {

// 	Campground.findOne({address: "guest-house"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			//render show template with that campground
// 			res.render("newg.ejs", {camp: campground});
// 		}
// 	});
// });

// app.post("/trek/guest-house/comment",function(req, res) {

// 	Campground.findOne({address: "guest-house"},function(err, campground){
// 		if(err){
// 			console.log(err);
// 			res.redirect("/trek/guest-house");
// 		} else {
// 			//render show template with that campground
// 				{
// 			//create new comment
// 			Comment.create(req.body.comment, function(err, comment){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//connect new comment to campground
// 					campground.comments.push(comment);
// 					campground.save();
// 					//redirect to Campground SHOW page
// 					res.redirect("/trek/guest-house");
// 				}
// 			});
// 		}
		
// 		}
// 	});
// });



// app.get("/trek/guest-house",function(req, res) {
//   res.render("guest.ejs"); 
// });


//==================  comments ================//










var functions = require('firebase-functions');
var express =require("express") ;
var app =express();

var bodyParser =require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.app = functions.https.onRequest(app);


app.get("/",function(req, res) {
    res.render("landing.ejs");
});

app.get("/Camps-Activities",function(req, res) {
    res.render("home.ejs");
});

app.get("/trek/treks",function(req,res){
//   Blogs.find({},function(err,AllBlogs){
//       if(err){
//           console.log("ERROR FOUND:"+err);
//       } else {
//           res.render("show_trek.ejs",{blogs:AllBlogs});
//       }
//   })
    res.render("show_trek.ejs");
});

app.get("/treks/Mandi-to-PrasharLake-Bajaura-Trek",function(req, res) {
    res.render("t0.ejs"); 
});

app.get("/treks/Mandi-to-PrasharLake-Trek",function(req, res) {
    res.render("t1.ejs"); 
});

app.get("/treks/Bagi-PrasharLake-Trek",function(req, res) {
    res.render("t2.ejs"); 
});
app.get("/treks/Bagi-PrasharLake-MchhodriMata-Trek",function(req, res) {
    res.render("t4.ejs"); 
});
app.get("/treks/PrasharLake-MchhodriMata-Trek",function(req, res) {
    res.render("t4A.ejs"); 
});
app.get("/treks/Bagi-PrasharLake-TungaMata-Trek",function(req, res) {
    res.render("t5.ejs"); 
});
app.get("/treks/PrasharLake-TungaMata-Trek",function(req, res) {
    res.render("t5A.ejs"); 
});
app.get("/treks/Bagi-PrasharLake-ShehlaMata-Trek",function(req, res) {
    res.render("t6.ejs"); 
});
app.get("/treks/PrasharLake-ShehlaMata-Trek",function(req, res) {
    res.render("t6A.ejs"); 
});
app.get("/treks/t6A",function(req, res) {
    res.render("t6A.ejs"); 
})
app.get("/trek/leisure",function(req, res) {
    res.render("leisure.ejs"); 
});

app.get("/trek/rafting",function(req, res) {
    res.render("rafting.ejs"); 
});


app.get("/trek/paragliding",function(req, res) {
    res.render("paragliding.ejs"); 
});

app.get("/trek/guest-house",function(req, res) {
    res.render("guest.ejs"); 
});

app.get("/sitemap.xml",function(req, res) {
    res.render("sitemap.xml");
});


