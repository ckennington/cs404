<?php
// All requests go through me!

// get dependency injection container
require_once 'Di.php';
$di = new Di("di.json");

// get request
$uri = strtolower($_SERVER['REQUEST_URI']);

// get list of static routes
$routes = json_decode(file_get_contents("routes.json"), true);

// request a valid route?
if (array_key_exists($uri, $routes)) {

  // send route to di container for processing
  $components = $di->getComponents($routes[$uri]);

  if (!isset($components['view'])) {
    // no view set, must be a post
    $components['controller']->post();
    header("Location: " . $components['controller']->getRedirect());
  }
  $components['view']->render();
  exit;
}

// 404, route doesn't exist
@header("HTTP/1.1 404 Not Found");
readfile(dirname(__FILE__) . "/errors/404.html");
