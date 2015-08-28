<?php
require_once "Models/Students.php";
require_once "Controllers/Students.php";

// This should be in the controller, but we need a URL router first.
$model = new Models_Students();
$controller = new Controllers_Students($model);
$controller->addStudent();
header("Location: students.html");
