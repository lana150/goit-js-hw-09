let e={email:"",message:""};const a=document.querySelector(".feedback-form"),l=a.elements.email,m=a.elements.message,o="feedback-form-state";function s(){localStorage.setItem(o,JSON.stringify(e))}function n(t){e[t.target.name]=t.target.value.trim(),s()}function r(){const t=localStorage.getItem(o);t&&(e=JSON.parse(t),l.value=e.email||"",m.value=e.message||"")}function i(t){if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Submitted data:",e),localStorage.removeItem(o),e={email:"",message:""},a.reset()}a.addEventListener("input",n);a.addEventListener("submit",i);r();
//# sourceMappingURL=2-form-Ct8MRgIu.js.map
