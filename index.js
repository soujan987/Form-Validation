let formData=document.querySelector(".form")
let submitBtn=document.querySelector(".button")
let errorMessages=document.querySelectorAll(".error-message")
let emptyMessages=document.querySelectorAll(".empty-field")
let showBtn=document.querySelector(".btn")    
let firstname,lastname,password,email
let fieldName
let nameRegex=/^[a-z]+$/i;
let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
let fnTarget,lnTarget,emTarget,pwdTarget;
let fnFlag,lnFlag,emFlag,pdFlag;
for(let errorMessage of errorMessages)
{
  errorMessage.classList.add("d-none");
}
for(let emptyMessage of emptyMessages)
{
  emptyMessage.classList.add("d-none");
}
formData.addEventListener("keyup",(e)=>{
  e.preventDefault();
  fieldName=e.target.dataset.key;
  // console.log(e.target)
  // console.log(fieldName)
  switch(fieldName)
  {
      case "firstName":
        firstname=e.target.value;
        fnTarget=e.target;
        // console.log(fnTarget)
        break;
      case "lastName":
        lastname=e.target.value;
        lnTarget=e.target;
        break;
      case "email":
        email=e.target.value;
        emTarget=e.target;
        break;
      case "password":
        password=e.target.value;
        pwdTarget=e.target;
        break;
      default:
        firstname,lastname,password,email=""
        break
  }
})
// console.log(fnTarget);
submitBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  if(firstname)
  {
    emptyMessages[0].classList.add("d-none");
    if(!nameRegex.test(firstname))
    {
      fnTarget.classList.add("error")
      errorMessages[0].classList.remove("d-none");
    }
    else 
    {
      fnFlag=true
      console.log("Hai Hello")
      // fnTarget.classList.remove("error")
      errorMessages[0].classList.add("d-none");
    }
  }
  else
  {
    emptyMessages[0].classList.remove("d-none");
  }
  if(lastname)
  {
    emptyMessages[1].classList.add("d-none");
    if(!nameRegex.test(lastname))
    {
      lnTarget.classList.add("error")
      errorMessages[1].classList.remove("d-none");
    }
    else 
    {
      lnTarget.classList.remove("error")
      errorMessages[1].classList.add("d-none");
      lnFlag=true;
    }
  }
  else
  {
    emptyMessages[1].classList.remove("d-none");
  }
  if(email)
  {
    emptyMessages[2].classList.add("d-none");
    if(!emailRegex.test(email))
    {
      emTarget.classList.add("error")
      errorMessages[2].classList.remove("d-none");
    }
    else 
    {
      emTarget.classList.remove("error")
      errorMessages[2].classList.add("d-none");
      emFlag=true;
    }
  }
  else
  {
    emptyMessages[2].classList.remove("d-none");
  }
  if(password)
  {
    emptyMessages[3].classList.add("d-none");
    // console.log(password)
    // console.log(passwordRegex.test(password))
    if(!passwordRegex.test(password))
    {
      pwdTarget.classList.add("error")
      errorMessages[3].classList.remove("d-none");
    }
    else 
    {
      pwdTarget.classList.remove("error")
      errorMessages[3].classList.add("d-none");
      pdFlag=true;
    }
  }
  else
  {
    emptyMessages[3].classList.remove("d-none");
  }
  // console.log(fnFlag)
  // console.log(lnFlag)
  // console.log(pdFlag)
  // console.log(emFlag)
  if(fnFlag && lnFlag && pdFlag && emFlag)
  {
    console.log("Redirecting")
    window.location.href="success.html"
  }
})
showBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  if(pwdTarget.getAttribute("type")=="text")
  {
    pwdTarget.setAttribute("type","password")
  }
  else
  {
    pwdTarget.setAttribute("type","text");
  }
})