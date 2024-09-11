<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: multipart/form-data');

if($_SERVER['REQUEST_METHOD'] === 'POST'){
  $title = $_POST['title'] ?? null;
  $body = $_POST['body'] ?? null;

  try{
    $dns = 'mysql:dbname=testdb;host=localhost;port=8889';
    $conn = new PDO($dns, 'test_user', 'pwd');
    $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
  
    $sql = 'INSERT into todos (title, body) values (:title, :body)';
    $pst = $conn->prepare($sql);
    $pst->bindValue(':title', $title, PDO::PARAM_STR);
    $pst->bindValue(':body', $body, PDO::PARAM_STR);
  
    $pst->execute();

    http_response_code(204);

  }catch(Throwable $error){
    http_response_code(500);
  }
}
