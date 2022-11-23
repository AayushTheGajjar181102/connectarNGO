
function validateForm()
{
	var x=document.login.name.value;
	
	var z=document.login.password.value;
		
	if(x==null || x=="")
	{
		alert("Enter Your Full Name ! ");
		document.login.name.focus();
		return false;
	}
			
	if(!(isNaN(x)))
	{
		alert("Enter Your Full Name, Not Numbers ! ");
		document.login.name.focus();
		return false;
	}
			
	if(z==null || z=="")
	{
		alert("Enter Password ! ");
		document.login.password.focus();
		return false;
	}
	
	if(z.length<8)
	{
		alert("Enter Password More Than 7 Characters ! ");
		document.login.password.focus();
		return false;
	}
}