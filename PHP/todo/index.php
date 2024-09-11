<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: multipart/form-data');

if($_SERVER['REQUEST_METHOD'] === 'POST'){
  $title = $_POST['title'] ?? null;
  $body = $_POST['body'] ?? null;

  $responseData = [
    'title'=> "returned value is $title",
    'body'=> "returned value is $body"
  ];
  
  echo json_encode($responseData);
}
