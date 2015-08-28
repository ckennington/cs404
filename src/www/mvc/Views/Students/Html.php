<?php

class Views_Students_Html {

  private $model;

  public function __construct ($model) {
    $this->model = $model;
  }

  public function output () {
    $html = "<table>";
    foreach ($this->model->getStudents() as $student) {
      if (!empty($student)) {
        $html .= "<tr>";
        $html .= "<td>{$student}</td>";
        $html .= "</tr>";
      }
    }
    $html .= "</table>";
    return $html;
  }
}

