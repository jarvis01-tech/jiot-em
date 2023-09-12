Get your own PHP Server
<?php
$servername = "localhost";
$username = "nik";
$password = "NrUP[6(3Xi-_mgko";
$dbname = "mysql";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$val0 = mysqli_real_escape_string($conn,$_GET['val0']);//v1

$val1 = mysqli_real_escape_string($conn,$_GET['val1']);//i

$val2 = mysqli_real_escape_string($conn,$_GET['val2']);//pf

$val3 = mysqli_real_escape_string($conn,$_GET['val3']);//freq

$val4 = mysqli_real_escape_string($conn,$_GET['val4']);//kwh

$val5 = mysqli_real_escape_string($conn,$_GET['val5']);//temp

$val6 = 0;//mysqli_real_escape_string($conn,$_GET['val6']);//rpm

$sql = "INSERT INTO em (v, i, pf, freq, kwh, temp, rpm)
VALUES ('$val0', '$val1', '$val2', '$val3', '$val4', '$val5', '$val6')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>