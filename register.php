<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "registration_db";


$conn = new mysqli($host, $username, $password, $database);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name     = $_POST['name'];
$email    = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // encrypt password
$phone    = $_POST['phone'];
$gender   = $_POST['gender'];
$address  = $_POST['address'];
$dob      = $_POST['dob'];
$country  = $_POST['country'];

// Check if email already exists
$check = $conn->prepare("SELECT * FROM users WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
$result = $check->get_result();

if ($result->num_rows > 0) {
    echo "<script>alert('This email is already registered.'); window.history.back();</script>";
    exit();
}

// Insert user data
$stmt = $conn->prepare("INSERT INTO users (name, email, password, phone, gender, address, dob, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssss", $name, $email, $password, $phone, $gender, $address, $dob, $country);

if ($stmt->execute()) {
    echo "<script>alert('Registration successful!'); window.location.href = 'index.html';</script>";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
