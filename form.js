function myFunction() {
  alert("Form Submitted successfully!");
}
 
function validateString(id)
{
	var element = document.getElementById(id);
	 var regExP = /^[a-zA-Z ]+$/;
	if(!regExp.test(element.value)){
		alert("Enter String Value");
		element.style.border = "2px solid red";
		//element.focus();
		return false;
	}
    element.style.border = "2px solid green";
}

function validate(){
	  var firstname = document.stud_form.firstname;
	  var lastname = document.stud_form.lastname;
	  var dateofbirth = document.stud_form.dateofbirth;
	  var emailid = document.stud_form.email id;
	  var mobilenumber = document.stud_form.mobilenumber;
	  var Gender = document.stud_form.gender;
	  var Address = document.stud_form.address;
	  var Pin Code = document.stud_form.pincode;
	  var Province = document.stud_form.province;
	  var course = document.stud_form.course;
	  
	  
	  if(firstname.value.length <=0){
		 alert("First Name is required");
		 name.focus();
		 return false;
	  }
	  if(lastname.value.length <=0){
		 alert("Last Name is required");
		 name.focus();
		 return false;
	  }
	  if(dateofbirth.value.length <=0){
		 alert("Date of Birth is required");
		 name.focus();
		 return false;
	  }
	  if(emailid.value.length <=0){
		 alert("Email id is required");
		 name.focus();
		 return false;
	  }
	  if(Mobilenumber.value.length <=0){
		 alert("Mobile Number is required");
		 name.focus();
		 return false;
	  }
	  if(Address.value.length <=0){
		 alert("Address is required");
		 name.focus();
		 return false;
	  }
	  if(pincode.value.length <=0){
		 alert("Pincode is required");
		 name.focus();
		 return false;
	  }
	  if(province.value.length <=0){
		 alert("Provinceis required");
		 name.focus();
		 return false;
	  }
	  if(course.value.length <=0){
		 alert("Course is required");
		 name.focus();
		 return false;
	  }
	}