
function validateForm()
{
	var x=document.signup.name.value;
	var y=document.signup.email.value;
	var z=document.signup.password.value;
		
	if(x==null || x=="")
	{
		alert("Enter Your Full Name ! ");
		document.signup.name.focus();
		return false;
	}
			
	if(!(isNaN(x)))
	{
		alert("Enter Your Full Name, Not Numbers ! ");
		document.signup.name.focus();
		return false;
	}
			
	if(y==null || y=="")
	{
		alert("Enter Your Email ! ");
		document.signup.email.focus();
		return false;
	}
			
	if(z==null || z=="")
	{
		alert("Enter Password ! ");
		document.signup.password.focus();
		return false;
	}
	
	if(z.length<8)
	{
		alert("Enter Password More Than 7 Characters ! ");
		document.signup.password.focus();
		return false;
	}
}