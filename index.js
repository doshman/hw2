// Your code goes here:

//let thumbClick = function (event) {
//}

//$("#thumbnails").click( function() {

  //let changeSrc = $(this).attr("href")
  //$("#main-image").attr("src", changeSrc)

//})

//jQuery("#main-image").attr("src", $this)


//jQuery("#thumbnails").on("click", $("#thumbnails"))

//$("#thumbs a").click( function() {
//		var changeSrc = $(this).attr("href");
//		$("#target").attr("src", changeSrc);
//		return false;
//	});


//first function defines what happens when you click the thumbnails
let handleImageClick = function() {
  //this variable pulls up the element on which the action/function occurs
  let theImage = jQuery(event.target)
  //console.log("You've got it man:", theImage) -- include if you want to see this working
  //this variable defines the attr.("src") as the source coming from theImage variable that was clicked on
  let srcValue = theImage.attr("src")
  //console.log(srcValue) - can include these console.logs if you want to see this working

  //this function defines the main-image src attribute as the srcValue variable
  jQuery("#main-image").attr("src", srcValue)

}

//this function initiates the handleImageClick function when a thumbnail is clicked on
jQuery("#thumbnails").on("click", handleImageClick)
