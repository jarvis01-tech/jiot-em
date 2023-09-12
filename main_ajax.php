<?php
//setting header to json
//header('Content-Type: application/json');

//database
define('DB_HOST', 'localhost:3306');
define('DB_USERNAME', 'nik');
define('DB_PASSWORD', 'NrUP[6(3Xi-_mgko');
define('DB_NAME', 'mysql');
$connect = mysqli_connect("localhost", "nik", "NrUP[6(3Xi-_mgko", "mysql");
//get connection
$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
  die("Connection failed: " . $mysqli->error);
}

$val = mysqli_real_escape_string($connect,$_GET['val']);
    
$result = 0;

//query to get data from the table

$query = mysqli_query($connect,"Select * from em order by Id desc limit 1 "); // SQL Query
        while($row = mysqli_fetch_array($query))
        {
          
            $result = $row[$val];
           
           
         
        }
       
   
//$query1 = mysqli_query($connect,"UPDATE `bollard1` SET `gate`=$val1 WHERE id = 1"); // SQL Query
      
         
       echo $result;