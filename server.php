<?php

$json_string = file_get_contents("to-do-list.json");

$list = json_decode($json_string);

if(isset($_POST['newTaskItem'])){
	$newItem = $_POST['newTaskItem'];
	$list[] = $newItem;
	file_put_contents('to-do-list.json', json_encode($list));
}

if(isset($_POST['taskToRemove'])){
	$taskToRemove = $_POST['taskToRemove'];
	array_splice($list,$taskToRemove,1);
	file_put_contents('to-do-list.json', json_encode($list));
}


header('Content-Type: application/json');
echo json_encode($list);