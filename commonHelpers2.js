import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},a=document.querySelector(".feedback-form"),s=localStorage.getItem("feedback-form-state");if(s){const t=JSON.parse(s);e.email=t.email,e.message=t.message,a.elements.email.value=e.email,a.elements.message.value=e.message}a.addEventListener("input",()=>{e.email=a.elements.email.value.trim(),e.message=a.elements.message.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log("Form Data:",e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",a.reset()});
//# sourceMappingURL=commonHelpers2.js.map