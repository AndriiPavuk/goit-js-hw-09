const feedbackFormRef = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

feedbackFormRef.addEventListener('input', onAddsDataToLocalStorage);
feedbackFormRef.addEventListener('submit', onSubmitsDataAndClearsForm);

const formData = {
  email: '',
  message: '',
};

fillsFormFromLocalStorage(feedbackFormRef);

function onAddsDataToLocalStorage(e) {
  if (e.target.name === 'email') formData.email = e.target.value.trim();
  if (e.target.name === 'message') formData.message = e.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitsDataAndClearsForm(e) {
  e.preventDefault();

  if (formData.email && formData.message) {
    console.log({
      email: formData.email,
      message: formData.message,
    });

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
  } else {
    alert('Все поля должны быть заполнены!');
  }
}

function fillsFormFromLocalStorage(form) {
  const objFromLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (objFromLocalStorage !== null) {
    formData.email = objFromLocalStorage.email;
    formData.message = objFromLocalStorage.message;

    form.elements.email.value = objFromLocalStorage.email;
    form.elements.message.value = objFromLocalStorage.message;
  }
}
