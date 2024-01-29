const feedbackFormRef = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

feedbackFormRef.addEventListener('input', onAddsDataToLocalStorage);
feedbackFormRef.addEventListener('click', onSubmitsDataAndClearsForm);

const formData = {
  email: '',
  message: '',
};

fillsFormFromLocalStorage(feedbackFormRef);

function onAddsDataToLocalStorage(e) {
  if (e.target.name === 'email') formData.email = e.target.value.trim();
  if (e.target.name === 'message') formData.message = e.target.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitsDataAndClearsForm(e) {
  e.preventDefault();

  if (e.target.type === 'submit')
    if (formData.email && formData.message) {
      console.log({
        email: formData.email,
        message: formData.message,
      });

      e.currentTarget.reset();
      localStorage.removeItem('feedback-form-state');
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

    form[0].value = objFromLocalStorage.email;
    form[1].value = objFromLocalStorage.message;
  }
}