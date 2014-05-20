

$(document).ready(function () {


var board = new Array(3);

			
var temp = 0;
 for(i=0; i<3; i++)
 		board[i] = new Array(3);
for(w=0; w<3; w++){
	for(o=0; o<3; o++)
	{

		board[w][o] = temp;
		temp = temp + 1;
		

	}
//alert("exit");
}

var $xOrO = "o.png";
$(".board").click(function(){

	if($xOrO == "x.png")
		$xOrO = "o.png";
	else
		$xOrO = "x.png";



});
$( "#oneOne" ).click(function() {
  
  var x = $(this).css("background-image");
  if(x=="none")
  {
  	

  	$(this).css("background-image", "url('" + $xOrO + "')");
 	//$(this).css("background-image",  "url('x.png')");
 	board[0][0] = $(this).css("background-image");
 	checkWinner(0,0);
 	//alert(board[0][0]);
 }else
 	alert("Wrong Move!!!");

});

$( "#oneTwo" ).click(function() {
  
  var x = $(this).css("background-image");
  if(x=="none")
  {

  	
  	
  	$(this).css("background-image", "url('" + $xOrO + "')");
  	//$(this).css("background-image",  "url('x.png')");
  	board[0][1] = $(this).css("background-image");
  	checkWinner(0,1);

 }else
 	alert("Wrong Move!!!");
 
});

$( "#oneThree" ).click(function() {
  
 var x = $(this).css("background-image");
  if(x=="none")
  {
  	$(this).css("background-image", "url('" + $xOrO + "')");
 	//$(this).css("background-image",  "url('x.png')");
 	board[0][2] = $(this).css("background-image");
 	checkWinner(0,2);


 }else
 	alert("Wrong Move!!!");
 
});

$( "#twoOne" ).click(function() {
  
  var x = $(this).css("background-image");
  if(x=="none")
  {

  $(this).css("background-image", "url('" + $xOrO + "')");
 	//$(this).css("background-image",  "url('x.png')");
 	board[1][0] = $(this).css("background-image");
 	//alert(board[1][0]);
 	checkWinner(1,0);
 }else
 	alert("Wrong Move!!!");
 
});

$( "#twoTwo" ).click(function() {
  
 var x = $(this).css("background-image");
  if(x=="none")
  {

  	$(this).css("background-image", "url('" + $xOrO + "')");
 	//$(this).css("background-image",  "url('x.png')");
 	board[1][1] = $(this).css("background-image");
 	//alert(board[1][1]);
 	checkWinner(1,1);
 }else
 	alert("Wrong Move!!!");
 
});

$( "#twoThree" ).click(function() {
  
 var x = $(this).css("background-image");
  if(x=="none")
  {

  	$(this).css("background-image", "url('" + $xOrO + "')");
 	//$(this).css("background-image",  "url('x.png')");
 	board[1][2] = $(this).css("background-image");
 	//alert(board[1][2]);
 	checkWinner(1,2);
 }else
 	alert("Wrong Move!!!");
});

$( "#threeOne" ).click(function() {
  
  var x = $(this).css("background-image");
  if(x=="none")
  {

  	$(this).css("background-image", "url('" + $xOrO + "')");
 	//$(this).css("background-image",  "url('x.png')");
 	board[2][0] = $(this).css("background-image");
 	checkWinner(2,0);
 }else
 	alert("Wrong Move!!!");
 
});

$( "#threeTwo" ).click(function() {
  
  var x = $(this).css("background-image");
  if(x=="none")
  {

  	$(this).css("background-image", "url('" + $xOrO + "')");
 	//$(this).css("background-image",  "url('x.png')");
 	board[2][1] = $(this).css("background-image");
 	checkWinner(2,1);

 }else
 	alert("Wrong Move!!!");
 
});

$( "#threeThree" ).click(function() {
  
  var x = $(this).css("background-image");
  if(x=="none")
  {

  	$(this).css("background-image", "url('" + $xOrO + "')");
	 //$(this).css("background-image",  "url('x.png')");
 	 board[2][2] = $(this).css("background-image");
 	 checkWinner(2,2);
 }else
 	alert("Wrong Move!!!");
 
});

function checkWinner(x, y)
{
			//var n = 3;


	 
			//Horizontal
			if(board[x][0] == board[x][1] && board[x][0] == board[x][2]){
				
					alert("Winner"); 
					location.reload();
			}
			//Vertical
			
			if(board[0][y] == board[1][y] && board[0][y] == board[2][y]){
				
					alert("Winner"); 
					location.reload();
			} 

			if(board[0][0] == board[1][1] && board[0][0] == board[2][2])
			{
				//t1 = t2 + 1;
				alert("Winner");
				  location.reload();
			}

			if(board[0][2] == board[1][1] && board[0][2] == board[2][0])
			{
				//t1 = t2 + 1;
				alert("Winner");
				location.reload();
			}
			//diagonal
			

return;

			
}

});










