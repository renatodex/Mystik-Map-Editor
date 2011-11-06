<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />

	<title>Untitled 2</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>
    <style type="text/css">
<!--
.droparea {
background:#FFFBCC;
padding:10px;
border:4px dashed #BFB971;
font:22pt Georgia;
color:#756F2D;
text-align:center;
width:400px;
height:auto;
display:block;
cursor:pointer;
}
-->
</style>

</head>

<body>
<div class="droparea" 
     data-width="460" 
     data-height="345" 
     data-type="jpg" 
     data-crop="true" 
     data-quality="60" 
     data-folder="sample" 
     data-something="stupid">Drop here
</div>
 
<script>
$('.droparea').droparea({'post' : '/data/dev/droparea/upload.php'});
</script>


</body>
</html>