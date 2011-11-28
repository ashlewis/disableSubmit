<?xml version="1.0" encoding="ISO-8859-1" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>Disable submit demo</title>
<link rel="stylesheet" href="css/disableSubmit.css" />

</head>
<body>
<?php sleep(2); ?>
<form id="my-form" type="GET "action="">
	<fieldset>
	   <input type="hidden" name="submitted" value="1" />
	   <input type="submit" value="submit" />
	</fieldset>
</form>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
<script src="js/jquery.disableSubmit.js"></script>
<script src="js/disableSubmit.js"></script>

</body>
</html>