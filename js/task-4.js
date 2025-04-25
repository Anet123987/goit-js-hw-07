const form = document.querySelector('.login-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!email || !password) {
      alert('All form fields must be filled in');
      return;
    }
    const formData = {
      email: email,
      password: password
    };
    console.log(formData);
    form.reset();
  });
  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');
  emailInput.addEventListener('mouseenter', function() {
    emailInput.style.border = '1px solid #000';
  });
  
  emailInput.addEventListener('mouseleave', function() {
    if (document.activeElement !== emailInput) { 
      emailInput.style.border = '1px solid #808080'; 
    }
  });
//   рамка при хов
  passwordInput.addEventListener('mouseenter', function() {
    passwordInput.style.border = '1px solid #000'; 
  });
  
  passwordInput.addEventListener('mouseleave', function() {
    if (document.activeElement !== passwordInput) { 
      passwordInput.style.border = '1px solid #808080'; 
    }
  });
  
  // фокус
  emailInput.addEventListener('focus', function() {
    emailInput.style.border = '1px solid #808080';
  });
  
  passwordInput.addEventListener('focus', function() {
    passwordInput.style.border = '1px solid #808080'; 
  });
  const submitButton = document.querySelector('.login-button');
  submitButton.style.backgroundColor = '#4e75ff';
  submitButton.addEventListener('mouseenter', function() {
    submitButton.style.backgroundColor = '#6c8cff'; 
  });
  
  // курсор уходит
  submitButton.addEventListener('mouseleave', function() {
    submitButton.style.backgroundColor = '#4e75ff'; 
  });