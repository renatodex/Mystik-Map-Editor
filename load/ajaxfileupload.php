<html>
	<head>
		<title>Ajax File Uploader Plugin For Jquery</title>
<link href="ajaxfileupload.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>
	<script type="text/javascript" src="ajaxfileupload.js"></script>
    
    <script type="text/javascript">
$(function() {
        $('.input').live('change', function(){        
        if (confirm("Are you sure you want to upload this map? ") == true) {
           ajaxFileUpload();
        }else{
            alert('No map uploaded.');
            event.preventDefault();
            $(".input").replaceWith("<input id='fileToUpload' type='file' size='45' name='fileToUpload' class='input' />");
        }
});
});
</script>
    
	<script type="text/javascript">
	function ajaxFileUpload()
	{

		$("#loading")
		.ajaxStart(function(){
			$(this).show();
		})
		.ajaxComplete(function(){
			$(this).hide();
		});

		$.ajaxFileUpload
		(
			{
				url:'doajaxfileupload.php',
				secureuri:false,
				fileElementId:'fileToUpload',
				dataType: 'json',
				data:{name:'logan', id:'id'},
				success: function (data, status)
				{
					if(typeof(data.error) != 'undefined')
					{
						if(data.error != '')
						{
							alert(data.error);
						}else
						{
							alert(data.msg);
						}
					}
				},
				error: function (data, status, e)
				{
					alert(e);
				}
			}
		)
		
		return false;

	}
	</script>	
	</head>

	<body>

    <div id="content">
    	<h1>Ajax File Upload Demo</h1>
 	
		<img id="loading" src="loading.gif" style="display:none;" />
		<form name="form" action="" method="POST" enctype="multipart/form-data">
		<table cellpadding="0" cellspacing="0" class="tableForm">

		<thead>
			<tr>
				<th>Please select a file and click Upload button</th>
			</tr>
		</thead>
		<tbody>	
			<tr>
				<td><input id="fileToUpload" type="file" size="45" name="fileToUpload" class="input" /></td>			</tr>

		</tbody>
			<tfoot>
			
			</tfoot>
	
	</table>
		</form>    	
    </div>
    

	</body>
</html>