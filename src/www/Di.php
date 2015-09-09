<?php

// Dependency Injection Container
class Di {

  // JSON DI config array
  private $config;

  // contruct the DI from the JSON file
  public function __construct($file) {
    $this->config = json_decode(file_get_contents($file), true);
  }

  // intialize an object as specified in the di container
  public function initializeObject ($reference) {

    $parts = $this->config[$reference];

    // include the class
    require_once $parts['file'];

    // intantiate the object
    $object = new $parts['class'];

    // call setters if necessary
    if (isset($parts['params'])) {
      foreach ($parts['params'] as $method => $param) {
        if ("~" === $param[0]) {
          // recurse if param is an object
          $method = "set{$method}";
          $object->$method($this->initializeObject($param));
        } else {
          $method = "set{$method}";
          $object->$method($param);
        }
      }
    }
    return $object;

  }

  // return array of initialized MVC objects
  public function getComponents($components) {
    // make it easier to require php classes
    set_include_path("/Users/crk/projects/cs404/src/www/mvc");

    $objects = array();
    foreach ($components as $type => $reference) {
      // object refrence found in json file
      if ("~" === $reference[0]) {
        $objects[$type] = $this->initializeObject($reference);
      }
    }
    return $objects;
  }

}
