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

    $conn->beginTransaction();
  
    $insert_sql = 'INSERT into todos (title, body) values (:title, :body)';
    $insert_pst = $conn->prepare($insert_sql);
    $insert_pst->bindValue(':title', $title, PDO::PARAM_STR);
    $insert_pst->bindValue(':body', $body, PDO::PARAM_STR);
    $insert_pst->execute();

    
    $select_sql = 'SELECT id, title, body, completed from todos where id = :id';
    $select_pst = $conn->prepare($select_sql);

    $inserted_id = $conn->lastInsertId();
    $select_pst->bindValue(":id", $inserted_id, PDO::PARAM_INT);
    $select_pst->execute();

    $fetched_data = $select_pst->fetch();
    
    $conn->commit();

    echo json_encode($fetched_data);

  }catch(Throwable $error){
    $conn->rollBack();
    http_response_code(500);
  }
}
