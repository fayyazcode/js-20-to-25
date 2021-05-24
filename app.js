// **********QUESTION 1**********

// var firstName = prompt("Enter Your First Name ")
// var lastName = prompt("Enter Your Last Name")
// var fullName = firstName + " " + lastName
// var greetings = alert("Welcome!" + " " + fullName)


// **********QUESTION 2**********

// var input = prompt("Tell me Your Favourite Mobile Name")
// document.write("<h4>" + "My Favourite Phone is: " + input + "<h4>")
// document.write("<h4>" + "Length of string: " + input.length + "<h4>")


// **********QUESTION 3**********

// var string = "Pakistani"
// document.write("<h4>" + "String: " + string + "<h4>")
// document.write("<h4>" + "Index of 'n': " + string.indexOf("n") + "<h4/>")


// **********QUESTION 4**********

// var string = "Hello World"
// document.write("<h4>" + "String: " + string + "<h4>")
// document.write("<h4>" + "Index of 'l': " + string.indexOf("l",5) + "<h4/>")

//*****************extra***********
// var name="fayyaz alam jan alam"

// var remove=prompt("enter what u want to remove")
// var add=prompt("What u wnat to add")

// var index=name.indexOf(remove);

// if(index !== -1){
//     console.log(index)
//     name =name.slice(0,index) + add + name.slice(index + remove.length)
//     console.log(name)
// }
// else{
//     alert("name not found")
// }

// Assignment # 5

// var a = "Pakistani";

// document.write("<div>"+"String : "+ a+"</div>");
// document.write("<div>"+" Charactor at Index 3 : "+ a.charAt("3")+"</div>");


// Assignment # 6

// var user1 = prompt ("Enter Your First Name");
// var user2 = prompt ("Enter Your Last Name");
// var fullName = user1.concat(" "+user2);

// alert ("Hello "+fullName+ " Welcome to world for Developing website" );

// Assignment # 7

// var oldName = "Hyderabad";

// var newName=oldName.indexOf("Hyder");

// if(newName !== -1){
//     document.write("<div>"+ "City: "+oldName+ "</div>");
//     document.write("<div>"+"After replacement: "+ oldName.slice(0 ,newName) + "Islam"+ oldName.slice(newName+5)+"</div>");    
// }

// Assignment # 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var flag =false;

// for(var i=0; i<message.length; i++){
//     if (message.slice(i, i + 3) === "and") {
//         message = message.slice(0, i) + "&" + message.slice(i + 3);
//         flag = true;
        
//     }
// }
// if(flag ===true){
//     console.log(message);
// }

// Assignment # 9

// var string = "472";
// var num = +string;
// document.write("<div>","Value: "+string+"</div>");
// document.write("<div>","Type: string"+"</div>");
// document.write("<div>","Value: "+num+"</div>");
// document.write("<div>","Type: Number ","</div>");

// Assignment # 10
// var user = prompt("Enter Your Name in small letters");
// document.write("<div>","User input: "+user+"</div>");
// document.write("<div>","User input: "+user.toUpperCase()+"</div>");

// Assignment # 11

// var user = prompt("Enter Your Name in small letters");
// var user1 = user.slice(0,1).toUpperCase()+user.slice(1);

// document.write("<div>","User input: "+user+"</div>");
// document.write("<div>","Title Case: "+user1+"</div>");
