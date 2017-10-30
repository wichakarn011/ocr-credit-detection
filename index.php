<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1, maximum-scale=1">
	<title>Web OCR Credit Detection</title>
	<link rel="stylesheet" href="style-bootstrap.min.css" />
</head>
<body>
	<?php include_once "fragment-menu.php"; ?>
	<div class="container">
		<br>
		<div class="col-sm-12 col-xs-12 text-center">
			<h1>Web Credit OCR</h1>
		</div>
		<div class="col-sm-12 col-xs-12 text-center">
			<video id="localVideo" autoplay muted playsInline></video>
		</div>
		<div class="col-sm-12 col-xs-12 text-center">
			<button id="startButton">Start</button>
		</div>
		<br> <br>
		<div class="col-sm-12 col-xs-12 text-center">
			<h4>User Camera</h4>
		</div>
	</div>
	<script src="javascript-jquery-3.2.1.min.js"></script>
	<script src="javascript-popper.js"></script>
	<script src="javascript-bootstrap.min.js"></script>
	<script src="javascript-adapter.min.js"></script>
</body>
</html>
