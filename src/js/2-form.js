// Об'єкт для зберігання даних форми
let formData = { email: "", message: "" };

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

function updateLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim(); // trim() видаляє пробіли з кінців рядка
  updateLocalStorage();
});

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const savedFormData = JSON.parse(savedData);
  emailInput.value = savedFormData.email || '';
  messageTextarea.value = savedFormData.message || '';
  formData.email = savedFormData.email || '';
  formData.message = savedFormData.message || '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData); 
  localStorage.removeItem('feedback-form-state'); 
  formData.email = "";
  formData.message = "";
  form.reset(); 
});
