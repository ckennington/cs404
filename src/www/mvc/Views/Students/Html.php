<?php

class Views_Students_Html {

  private $model;

  public function setModel ($model) {
    $this->model = $model;
  }

  public function render () {
    $body = "<table>";
    foreach ($this->model->getStudents() as $student) {
      if (!empty($student)) {
        $body .= "<tr>";
        $body .= "<td>{$student}</td>";
        $body .= "</tr>";
      }
    }
    $body .= "</table>";
    $body .=
    '<form method="POST" action="/mvc/students/add.post">
      <input type="submit" name="add" value="Add"/>
      <input type="text" name="name"/>
    </form>';
    include_once("Templates/html.php");
  }
}

