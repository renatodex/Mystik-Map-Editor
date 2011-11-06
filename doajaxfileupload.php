<?php
	$error = "";
	$msg = "";
    $mapSize = "";
	$fileElementName = 'fileToUpload';
    $fileExt = explode(".", $_FILES['fileToUpload']['name']);
	if(!empty($_FILES[$fileElementName]['error']))
	{
		switch($_FILES[$fileElementName]['error'])
		{
			case '1':
				$error = 'The uploaded file exceeds the upload_max_filesize directive in php.ini';
				break;
			case '2':
				$error = 'The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form';
				break;
			case '3':
				$error = 'The uploaded file was only partially uploaded';
				break;
			case '4':
				$error = 'No file was uploaded.';
				break;

			case '6':
				$error = 'Missing a temporary folder';
				break;
			case '7':
				$error = 'Failed to write file to disk';
				break;
			case '8':
				$error = 'File upload stopped by extension';
				break;
			case '999':
			default:
				$error = 'No error code avaiable';
		}
	}elseif(empty($_FILES['fileToUpload']['tmp_name']) || $_FILES['fileToUpload']['tmp_name'] == 'none')
	{
		$error = 'No file was uploaded..';
	}elseif($fileExt[1] != "txt"){
	   $mapSize = "NOT A TXT.";
       }else{
       $regFile = rand(5, 5000).$_FILES['fileToUpload']['name'];
	   $filenameNow = "load/".$regFile;
			$msg = $_FILES[$fileElementName]['error'];
            $mapURL = $filenameNow;
            $mapSize= $_FILES['fileToUpload']['size'];
            setcookie("mapEdit", $filenameNow, time()+3600);  /* expire in 1 hour */
            move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $filenameNow);
            
			//for security reason, we force to remove all uploaded file
			//@unlink($_FILES['fileToUpload']);		
	}		
	echo "{";
	echo				"error: '" . $error . "',\n";
	echo				"msg: '" . $msg . "',\n";
	echo				"mapURL: '" . $regFile . "',\n";
    echo				"mapSize: '" . $mapSize . "'\n";
	echo "}";
?>