<?php
$servername = "localhost";  // Usually 'localhost'
$username = "alishavashisht"; // Replace with your DB username
$password = "alisha1602"; // Replace with your DB password
$dbname = "carbon2";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
