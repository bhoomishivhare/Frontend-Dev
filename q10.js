// q10.js (jQuery)
// Validate name (not empty), email (format + uniqueness), password (min 8 chars).
// Highlight invalid fields with red border and show success on valid.

// Mock existing emails for uniqueness check
const existingEmails = ['alex@example.com', 'mina@example.com', 'user@test.com'];

$(function() {
  const $form = $('#regForm');
  const $name = $('#name');
  const $email = $('#email');
  const $password = $('#password');

  function setValid($el, msg = '') {
    $el.removeClass('invalid').addClass('valid');
    $(`#err${capitalize($el.attr('id'))}`).text('');
  }
  function setInvalid($el, message) {
    $el.removeClass('valid').addClass('invalid');
    $(`#err${capitalize($el.attr('id'))}`).text(message);
  }
  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  // email uniqueness check (simulated asynchronous)
  function isEmailUnique(email) {
    // return a Promise to demonstrate async validation
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(existingEmails.indexOf(email.toLowerCase()) === -1);
      }, 300);
    });
  }

  async function validateAll() {
    let valid = true;

    // 1) name not empty
    const nameVal = $name.val().trim();
    if (nameVal === '') {
      setInvalid($name, 'Name cannot be empty');
      valid = false;
    } else setValid($name);

    // 2) email format & uniqueness
    const emailVal = $email.val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      setInvalid($email, 'Enter a valid email');
      valid = false;
    } else {
      const unique = await isEmailUnique(emailVal);
      if (!unique) {
        setInvalid($email, 'Email already registered');
        valid = false;
      } else setValid($email);
    }

    // 3) password min 8 chars
    const passVal = $password.val();
    if (passVal.length < 8) {
      setInvalid($password, 'Password must be at least 8 characters');
      valid = false;
    } else setValid($password);

    return valid;
  }

  // real-time highlight: remove error when user types
  $form.on('input', 'input', function() {
    $(this).removeClass('invalid').removeClass('valid');
    $(`#err${capitalize($(this).attr('id'))}`).text('');
    $('#success').hide();
  });

  // submit handler
  $form.on('submit', async function(e) {
    e.preventDefault();
    const ok = await validateAll();
    if (ok) {
      $('#success').show();
      // Optionally add the new email to existingEmails (simulate registration)
      existingEmails.push($email.val().trim().toLowerCase());
      console.log('Registered:', { name: $name.val(), email: $email.val() });
    } else {
      $('#success').hide();
    }
  });
});
