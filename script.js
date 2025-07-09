function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const phone = document.getElementById("phone").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const address = document.getElementById("address").value.trim();
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  

  if (!name || !email || !password || !confirmPassword || !phone || !gender || !address || !dob || !country) {
    alert("All fields are required.");
    return false;
  }

  if (!/^[A-Za-z\s]+$/.test(name)) {
    alert("Name must contain only letters and spaces.");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailRegex.test(email)) {
  alert("Invalid email format. Example: user@example.com");
  return false;
}

 const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

if (!passwordRegex.test(password)) {
  alert("Password must be at least 6 characters and include one uppercase letter, one lowercase letter, one number, and one special character.");
  return false;
}

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be exactly 10 digits.");
    return false;
  }

  if (!gender) {
    alert("Please select your gender.");
    return false;
  }

  if (address === "") {
    alert("Address cannot be empty.");
    return false;
  }

 const dobDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - dobDate.getFullYear();
  const m = today.getMonth() - dobDate.getMonth();
  const isBirthdayPassed = m > 0 || (m === 0 && today.getDate() >= dobDate.getDate());
  

if (age < 18 || (age === 18 && !isBirthdayPassed)) {
  alert("You must be at least 18 years old.");
  return false;
}

  if (country === "") {
    alert("Please select a country.");
    return false;
  }

  return true;
}
