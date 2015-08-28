<?php

class Views_Students_Xml {

  private $model;

  public function __construct ($model) {
    $this->model = $model;
  }

  public function output () {
    $xml = '<?xml version="1.0" encoding="UTF-8"?>';
    $xml .= '<students>';
    foreach ($this->model->getStudents() as $student) {
      if (!empty($student)) {
        $xml .= "<student>{$student}</student>";
      }
    }
    $xml .= '</students>';
    return $xml;
  }
}

