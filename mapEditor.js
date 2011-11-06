// Mystik Map Editor v1.5

/**

TO DO

1. On rect, line tool hover: add number of X and Y adding
2. Add a highlight over current tile in Brush tool
3. Clean up GitHub repo.

**/

    var weapons = new Array(); // weapons array
    var monsters = new Array(); // monsters array
    var entrances = new Array(); // entrances array
    var teleports = new Array(); // tele array
    var signs = new Array(); // signs array
    
    // Line Tool
    var ltPick1 = "0";
    var ltPick2 = "0";



	$(function(){



		// global setting override
		$.extend($.gritter.options, {

		    position: 'bottom-left', // possibilities: bottom-left, bottom-right, top-left, top-right

			fade_in_speed: 100, // how fast notifications fade in (string or int)

			fade_out_speed: 100, // how fast the notices fade out

			time: 3000 // hang on the screen for...

		});
});

		function popup(title, text, imageSelect) {

if (imageSelect == "success") {
			$.gritter.add({
				// (string | mandatory) the heading of the notification
				title: title,
				// (string | mandatory) the text inside the notification
				text: text,
				// (string | optional) the image to display on the left
                image: 'images/icons/checkmark_48.png', 
				// (bool | optional) if you want it to fade out on its own or just sit there
				sticky: false,
				// (int | optional) the time you want it to be alive for before fading out
				time: ''
			});
}else if (imageSelect == "warning") {
			$.gritter.add({
				// (string | mandatory) the heading of the notification
				title: title,
				// (string | mandatory) the text inside the notification
				text: text,
				// (string | optional) the image to display on the left
                image: 'images/icons/warning1_48.png', 
				// (bool | optional) if you want it to fade out on its own or just sit there
				sticky: false,
				// (int | optional) the time you want it to be alive for before fading out
				time: ''
			});
}else if (imageSelect == "error") {
			$.gritter.add({
				// (string | mandatory) the heading of the notification
				title: title,
				// (string | mandatory) the text inside the notification
				text: text,
				// (string | optional) the image to display on the left
                image: 'images/icons/delete_48.png', 
				// (bool | optional) if you want it to fade out on its own or just sit there
				sticky: false,
				// (int | optional) the time you want it to be alive for before fading out
				time: ''
			});
}
			return false;

		}
        
     

$(document).ready(function()
{
        

$('#analyze').live("click",function(event){
	$('#title_row').text($('#map_title').val()); 
    $('#curr').text($('#map_id').val());
    $('#leftID').text($('#left_id').val());
    $('#rightID').text($('#right_id').val());
    $('#upID').text($('#up_id').val());
    $('#downID').text($('#down_id').val());
    $('#numb_monsters').text(monsters.length);
    $('#numb_items').text((weapons.length)+(signs.length));
    $('#numb_tele').text(teleports.length);
    $('#numb_ent').text(entrances.length);
    console.log("Analyzing map... NOW");   
});

    $("#clearmap").live("click",function(){
        if (confirm("Are you sure to want to clear the map?")) {
        popup("Success!", "Map successfully cleared.", "success");    
    if (weapons.length > 0) {
    $(".item_body").append("<tr class='item-tr' id='nothing_tr'><td class='nothing' colspan='4'>Nothing found.</td></tr>");
    }
    if (monsters.length > 0) {
    $(".mon_body").append("<tr class='monster-tr' id='nothing_tr'><td class='nothing' colspan='4'>Nothing found.</td></tr>");
    }
    weapons = new Array(); // weapons array
    monsters = new Array(); // monsters array
    entrances = new Array(); // entrances array
    teleports = new Array(); // tele array
    signs = new Array(); // signs array
    $('#map .weapon-map').remove();
    $('#map .monster-map').remove();
    $("#monster-row").remove();
    $("tr#monster-row").remove();
    $("#item-row").remove();
    $("tr#item-row").remove();
    
for (i = 0; i <= 15; i++) {
for (xi = 0; xi <= 10; xi++) {
    $('#'+xi+"x"+i).attr("src", "line_tile/t343.png"); 
    $('#'+xi+"x"+i).attr("name", "343"); 
    }
    }
    

    }
    });   
     
    $(".cancel-drop").live("click",function(){
        popup("Warning!", "Map uploading has been cancelled.", "warning");
        $(".qq-upload-drop-area").remove();
        
        });   
        
$('.maptile').tooltip({ 
    track: true, 
    delay: 0, 
    showURL: false, 
    fade: 250 
});          
    
$('.tilelink').tooltip({ 
    track: true, 
    delay: 0, 
    showURL: false, 
    showBody: " - ", 
    fade: 250 
});

$('.monsterlink').tooltip({ 
    track: true, 
    delay: 0, 
    showURL: false, 
    showBody: " - ", 
    fade: 250 
});

$(function() {
    	$("#create").fancybox({
				'transitionIn'		: 'fade',
                'titlePosition' 	: 'over',
				'transitionOut'		: 'fade'
			});
            return false;
});
            
    	$("#monstertest").fancybox({
				'transitionIn'		: 'fade',
                'titlePosition' 	: 'over',
				'transitionOut'		: 'fade'
			}); 
    	$("#load").fancybox({
				'transitionIn'		: 'fade',
                'titlePosition' 	: 'over',
				'transitionOut'		: 'fade'
			}); 
                      
    	$("#analyze").fancybox({
				'transitionIn'		: 'fade',
                'titlePosition' 	: 'over',
				'transitionOut'		: 'fade'
			}); 
    	
        $("#credit_due").fancybox({
				'transitionIn'		: 'fade',
                'titlePosition' 	: 'over',
				'transitionOut'		: 'fade'
			}); 
            
    	$("#weapontest").fancybox({
				'transitionIn'		: 'fade',
                'titlePosition' 	: 'over',
				'transitionOut'		: 'fade'
			});
    	
        $("#entrancetest").fancybox({
				'transitionIn'		: 'fade',
                'titlePosition' 	: 'over',
				'transitionOut'		: 'fade'
			});
            
        $("#teleporttest").fancybox({
				'transitionIn'		: 'fade',
                'titlePosition' 	: 'over',
				'transitionOut'		: 'fade'
			});
            
    var textBox = document.getElementById("txt_out");
    textBox.onfocus = function() {
        textBox.select();

        // Work around Chrome's little problem
        textBox.onmouseup = function() {
            // Prevent further mouseup intervention
            textBox.onmouseup = null;
            return false;
        };
    };
            
$("#map_title").keyup(function() {
    
    if($('#map_title').val().length > 0 && $('#map_id').val().length > 0) {
            $('#create').attr("class", "sexybutton sexysimple sexygreen sexylarge"); 
            $('#create').attr("href", "#inline3"); 
    } else {
            $('#create').attr("class", "sexybutton sexysimple sexyred sexylarge"); 
            $('#create').attr("href", "#");            
    }
});
      $("#map_id").keyup(function() {
    if($('#map_title').val().length > 0 && $('#map_id').val().length > 0) {
            $('#create').attr("class", "sexybutton sexysimple sexygreen sexylarge"); 
            $('#create').attr("href", "#inline3"); 
    } else {
            $('#create').attr("class", "sexybutton sexysimple sexyred sexylarge"); 
            $('#create').attr("href", "#"); 
    }
});            
    	$(function() {
		$( "#tabs" ).tabs();
	});
    
    var tdToggle = new Boolean(false);
    var ltToggle = new Boolean(false);
    var rtToggle = new Boolean(false);
        
    // WARNING: Huge Freaking array
    var blockedTile = new Array("1","2","3","4","5","6","7","8","9","19","20","21","22","23","24","25","26","27","28","29","30","37","39","41","43","45","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","76","79","81","90","91","92","93","94","95","96","97","98","99","106","107","108","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","169","170","171","172","173","174","175","176","177","178","179","180","181","183","185","187","190","191","192","196","197","198","199","200","201","202","203","204","205","206","207","211","212","213","214","217","220","222","223","225","226","227","228","232","233","234","235","236","237","238","239","240","241","242","243","244","246","247","249","250","252","259","260","261","262","263","264","271","272","273","274","275","276","277","278","279","280","283","285","288","319","320","321","322","328","329","330","331","332","333","334","335","336","337","338","339","340","341","342","349","350","351","352","353","354","355","361","362","363","364","365","366","367","368","369","370","371","372","373","374","375","376","377","378","379","380","381","388","389","390","391","392","393","394","397","398","399","400","401","402","403","404","405","406","407","408","409","410","411","412","413","414","415","416","417","418","419","420","421","422","423","430","431","432","433","434","435","436","437","438","439","440","441","442","443","444","445","446","447","448","449","450","451","452","453","454","455","456","469","470","471","472","473","474","475","476","477","478","479","480","481","482","483","484","485","486","487","488","489","490","491","492","493","494","495","496","499","500","501","502","503","504","505","506","507","508","509","510","511","512","513");

    var entranceTile = new Array("28","29","30","37","41","43","45","58","59","60","61","62","63","73","75","76","79","91","92","93","94","95","96","97","98","99","115","116","117","136","138","139","140","141","142","143","144","172","173","174","175","175","176","177","178","179","180","181","183","185","187","189","199","200","201","205","206","207","214","217","220","238","239","240","244","247","250","259","260","261","271","272","273","280","283","496","500","501","502","503","504");
    var teleportTile = new Array("38","40","42","44","74","75","77","80","109","110","111","112","113","114","137","182","184","186","188","189","215","216","218","219","221","222","224","225","245","248","249","251","253","254","255","256","257","258","281","283","284","286","287","356","357","393","497","522");
    
    var monsterName = new Array("Goblin","Arachnid","Bald Eagle","Orc Warrior","Water Beast","Sand Drake","Human Mage","Fiery Salamandar","Skeleton Warrior","Human Warrior","Captain","Taurus","Maggot","Catapillar","Wasp","Human Knight","Basilisk","Red Dragon");
    var monsterLevel = new Array("4","1","9","11","12","16","18","14","15","19","22","23","3","2","1","21","25","30");
    
    var currentTile = "tile";
    console.log("Tool set to BRUSH: " + currentTile);
    // Set up default values
    $('#current_tile').attr("class", "0");
    
    $("#create").live("click",function(){
        
     var mapName = $("#map_title").val();
     var mapID = $("#map_id").val();  
     var rightID = $("#right_id").val();  
     var leftID = $("#left_id").val();  
     var downID = $("#down_id").val();
     var upID = $("#up_id").val();    
     
     if (mapName == "") {
        popup("Error!", "Please enter a map name, before getting the JSON.", "error");        
     }else if (mapID == "") {
        popup("Error!", "Please enter a map ID, before getting the JSON.", "error");   
     }else{
        
     $("#txt_out").text(""); 
     
     $("#txt_out").append("{\n");

     $("#txt_out").append('"title": "'+ mapName+'",\n');

     $("#txt_out").append('"ids": [{ "currentID": '+mapID+', "leftMap": '+leftID+', "rightMap": '+rightID+', "upMap": '+upID+', "downMap": '+downID+'}],\n');
     
       // start signs
         var signsLgth = signs.length;
         
         if (signsLgth > 0) {
            
            $("#txt_out").append('"signs": [');
            
                    for (var signs_final = 0, setsLen_ent = signs.length; signs_final < setsLen_ent; ++signs_final ) {
                
                 var searchSign = signs[signs_final].split("|");
                 var final_sign = signs_final+1;
                  $("#txt_out").append('\n{\n"x": ' + searchSign[1] + ',\n"y": ' + searchSign[0] + ',\n"text": "' + searchSign[2] + '"\n}');  
                  if (final_sign == signsLgth) { $("#txt_out").append("\n"); }else{ $("#txt_out").append(","); }
                  }
                    $("#txt_out").append("],\n");
                  }
      //end signs
  
       // start entrances
         var entrancesLgth = entrances.length;
         
         if (entrancesLgth > 0) {
            
            $("#txt_out").append('"entrances": [');
            
                    for (var entrances_final = 0, setsLen_ent = entrances.length; entrances_final < setsLen_ent; ++entrances_final ) {
                
                 var searchEnt = entrances[entrances_final].split("|");
                 var final_ent = entrances_final+1;
                  $("#txt_out").append('\n{\n"x": ' + searchEnt[1] + ',\n"y": ' + searchEnt[0] + ',\n"tile_after": ' + searchEnt[2] + ',\n"item_req": ' + searchEnt[3] + '\n}');  
                  if (final_ent == entrancesLgth) { $("#txt_out").append("\n"); }else{ $("#txt_out").append(","); }
                  }
                    $("#txt_out").append("],\n");
                  }
      //end entrances
  
  
         // start teleports
         var teleportsLgth = teleports.length;
         
         if (teleportsLgth > 0) {
            
            $("#txt_out").append('"teleports": [');
            
                    for (var teleports_final = 0, setsLen_tele = teleports.length; teleports_final < setsLen_tele; ++teleports_final ) {
                
                 var searchTele = teleports[teleports_final].split("|");
                 var final_ent = teleports_final+1;
                  $("#txt_out").append('\n{\n"fromX": ' + searchTele[1] + ',\n"fromY": ' + searchTele[0] + ',\n"fromMap": ' + searchTele[2] + ',\n"toX": ' + searchTele[4] + ',\n"toY": ' + searchTele[3] + ',\n"toMap": ' + searchTele[5] + ',\n"item_req": ' + searchTele[6] + '\n}');  
                  if (final_ent == teleportsLgth) { $("#txt_out").append("\n"); }else{ $("#txt_out").append(","); }
                  }
                    $("#txt_out").append("],\n");
                  }
      //end teleports
  
     
     // items
         var itemLgth_final = weapons.length;
         
         if (itemLgth_final > 0) {
            
            $("#txt_out").append('"items": [');
            
                    for (var item_final = 0, setsLen_tem = weapons.length; item_final < setsLen_tem; ++item_final ) {
                
                 var searchItem_final = weapons[item_final].split("|");
                 var final_item = item_final+1;
                 var actualID = parseFloat(searchItem_final[0])+1;
                 
                  $("#txt_out").append('\n{\n"id": ' + actualID + ',\n"x": ' + searchItem_final[2] + ',\n"y": ' + searchItem_final[1] + '\n}');  
                  if (final_item == itemLgth_final) { $("#txt_out").append("\n"); }else{ $("#txt_out").append(","); }
                  }
                    $("#txt_out").append("],\n");
                  }
      //end items
      
           
     // monsters
         var monLgth_final = monsters.length;
         
         if (monLgth_final > 0) {
            
            $("#txt_out").append('"monsters": [');
            
                    for (var i_final = 0, setsLen_final = monsters.length; i_final < setsLen_final; ++i_final ) {
                
                 var searchMonster_final = monsters[i_final].split("|");
                 var final_mon = i_final+1;
                 var acutalMon = parseInt(searchMonster_final[0])+1;                 

                  $("#txt_out").append('\n{\n"id": ' +acutalMon + ',\n"x": ' + searchMonster_final[2] + ',\n"y": ' + searchMonster_final[1] + '\n}');  
                  if (final_mon == monLgth_final) { $("#txt_out").append("\n"); }else{ $("#txt_out").append(","); }
                  }
                    $("#txt_out").append("],\n");
                  }
      //end monsters 
     
  $("#txt_out").append('"map": [\n');
for (var q = 0; q <= 10; q++) {
    $("#txt_out").append("[");
    //$("#txt_out").append("\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ ");
for (var xq = 0; xq <= 15; xq++) {
    var x_out = q;
    var getTileID =  $('#'+q+"x"+xq).attr("name");
    
if (xq == 15) { $("#txt_out").append(getTileID); }else{ $("#txt_out").append(getTileID +", "); }
  
}
$("#txt_out").append("]");
if (q == 10) { $("#txt_out").append(""); }else{ $("#txt_out").append(","); }
$("#txt_out").append("\n");
}
    $("#txt_out").append("\n]");    
      $("#txt_out").append("\n}");    
    }
        });
        
        // Brush Tool Activate
        $("#tile").live("click",function(){
        popup("Tool switched!", "You have switched to the brush tool.", "warning");   
        $('#line_tool').attr("class", "sexybutton sexysimple sexyred sexylarge");
        $('#tile').attr("class", "sexybutton sexysimple sexygreen sexylarge");
        $('#rect').attr("class", "sexybutton sexysimple sexyred sexylarge");
        currentTile = "tile";
        ltToggle = false;
        tdToggle = false;
        rtToggle = false;
        
            });
            
        // Rectangle Tool Activate
        $("#rect").live("click",function(){
              
            if (currentTile == "monster" || currentTile == "weapon") {
                popup("Drawing prohibited!", "You can't create rectangles of monsters or weapons.", "error");   
            }else{
            
            if (rtToggle == false) {
        popup("Tool switched!", "You have switched to the rectangle tool.", "warning");
        $('#line_tool').attr("class", "sexybutton sexysimple sexyred sexylarge");
        $('#tile').attr("class", "sexybutton sexysimple sexyred sexylarge");
        $('#rect').attr("class", "sexybutton sexysimple sexygreen sexylarge");
        currentTile = "rect";
        ltToggle = false;
        tdToggle = false;
        rtToggle = true;
        }
        }
            });
        
        // Line Tool Activate
            $("#line_tool").live("click",function(){

            console.log("currentTile: " + currentTile);
            if (currentTile == "monster" || currentTile == "weapon") {
                popup("Drawing prohibited!", "You can't create lines of monsters or weapons.", "error");
            }else{
                        
if (ltToggle == false) {
    popup("Tool switched!", "You have switched to the line tool.", "warning");  
    console.log("Line tool activated.");
        currentTile = "line_tool";
        ltToggle = true;
        tdToggle = false;
        rtToggle = false;
        $('#line_tool').attr("class", "sexybutton sexysimple sexygreen sexylarge");
        $('#tile').attr("class", "sexybutton sexysimple sexyred sexylarge");
        $('#rect').attr("class", "sexybutton sexysimple sexyred sexylarge");
        }
        }        
                });
        
      // Tile dropper
    $("#tile_dropper").live("click",function(){
        
    beforeTile = currentTile;
                    if (currentTile == "monster" || currentTile == "weapon") {
                popup("Drawing prohibited!", "Please switch to the tile palette first.", "error");
            }else{
if (tdToggle == false) {
        popup("Tool switched!", "You have switched to the tile dropper tool.", "warning");
        currentTile = "dropper";
        tdToggle = true;
        rtToggle = false;
        ltToggle = false;
        $('#tile_dropper').attr("class", "sexybutton sexysimple sexygreen sexylarge");
        $('#tile').attr("class", "sexybutton sexysimple sexyred sexylarge");
        $('#rect').attr("class", "sexybutton sexysimple sexyred sexylarge");
        $('#line_tool').attr("class", "sexybutton sexysimple sexyred sexylarge");
        }else{
         currentTile = "tile"; 
         tdToggle = false;
         $('#tile_dropper').attr("class", "sexybutton sexysimple sexyred sexylarge");
        }
        
        }
        });
    
    // Selected tile
    $(".tilelink").live("click",function(){
        
        if (currentTile != "tile") {
popup("Palette switched!", "You have switched to tiles.", "warning");
}
        var ID = $(this).attr("id");
        
     
        $('#current_tile').attr("src", "line_tile/t"+ID+".png"); 
        $('#current_tile').attr("class", ID);        
      
      

        $('.item').css("background-color", "#666");
        $('#item-'+ID).css("background-color", "red");
        currentTile = "tile";
        
        
if(jQuery.inArray(ID, blockedTile) != -1) {
            $('#tile_status').text("Blocked");
            $('#tile_status').attr("class", "sexybutton sexysimple sexyred sexylarge"); 
            }else{
             $('#tile_status').text("Walkable"); 
             $('#tile_status').attr("class", "sexybutton sexysimple sexygreen sexylarge"); 
            } 
        console.log("currentTile: " + currentTile + " | rtToggle: " + rtToggle + " | ltToggle: " + ltToggle);
        
        if (currentTile != "tile" || currentTile != "monster" || currentTile != "weapon") {
        if (rtToggle == true) {
            currentTile = "rect";
            }else if (ltToggle == true) {
                currentTile = "line_tool";
                }
        }
        
        });
        
     // Selected weapon   
    $(".weaponlink").live("click",function(){
        var ID = $(this).attr("id");
        
        if (currentTile !== "weapon") {
popup("Palette switched!", "You have switched to items.", "warning");
}
        
        $('#line_tool').attr("class", "sexybutton sexysimple sexyred sexylarge");
        $('#rect').attr("class", "sexybutton sexysimple sexyred sexylarge");
        $('#tile').attr("class", "sexybutton sexysimple sexygreen sexylarge");
        
        ltToggle = false;
        rtToggle = false;
        
        $('#current_tile').attr("src", "crop.php?f=items.gif&y=0&x="+ID); 
        $('#current_tile').attr("class", ID);        
      
    

    $('#weapon-'+ID).effect("pulsate");
    currentTile = "weapon";

        
        });
     
    // Selected monsters  
    $(".monsterlink").live("click",function(){
        var ID = $(this).attr("id");
        
        if (currentTile !== "monster") {
popup("Palette switched!", "You have switched to monsters.", "warning");
}
        
        $('#line_tool').attr("class", "sexybutton sexysimple sexyred sexylarge");
        $('#rect').attr("class", "sexybutton sexysimple sexyred sexylarge");
        $('#tile').attr("class", "sexybutton sexysimple sexygreen sexylarge");
        
        ltToggle = false;
        rtToggle = false;
        
        $('#current_tile').attr("src", "crop.php?f=monster.gif&y=0&x="+ID); 
        $('#current_tile').attr("class", ID);        
      
    

    $('#monster-'+ID).effect("pulsate");
    currentTile = "monster";

        
        });
        
        
      
        
// Delete weapons  
   $(".delete-weapon").live("click",function(){ 
    
        $('#line_tool').attr("class", "sexybutton sexysimple sexyred sexylarge");
        ltToggle = false;
        rtToggle = false;
    
    $('#current_tile').attr("src", "delete.png"); 
    $('#current_tile').attr("class", "delete-weapon");  
    $('.delete-weapon').effect("pulsate"); 
    currentTile = "delete-weapon";   
    
    });
    
   $(".delete-monster").live("click",function(){ 
    $('#current_tile').attr("src", "delete.png"); 
    $('#current_tile').attr("class", "delete-monster");  
    $('.delete-monster').effect("pulsate");
    currentTile = "delete-monster";  
    
    });
    
    $("#entrancetest").live("click",function(){
        
        $("#entrance_stat").text(""); 
        
        var entLgth_t = entrances.length;
         $("#entrance_stat").append('Showing entrances on Map - How many: ' + entLgth_t+'\n');
   
         if (entLgth_t > 0) {
                    for (var i = 0, entsLens = entrances.length; i < entsLens; ++i ) {
                
                 var searchEnts = entrances[i].split("|");
                  $("#entrance_stat").append('['+i+'] >> Entrance Tile ID: ' + searchEnts[0] + ' | Y: ' + searchEnts[2] + ' | X: ' + searchEnts[1] + '\n'); 
                  
                  }
                  }else{
                   $("#entrance_stat").append('\nNo entrances on the map!'); 
                  }
                  });
    
    $("#monstertest").live("click",function(){
        
        $("#stats").text(""); 
        
        var monLgth = monsters.length;
         $("#stats").append('Showing monsters on Map - How many: ' + monLgth+'\n');
   
         if (monLgth > 0) {
                    for (var i = 0, monsLen = monsters.length; i < monsLen; ++i ) {
                
                 var searchMonster = monsters[i].split("|");
                  $("#stats").append('['+i+'] >> Monster ID: ' + searchMonster[0] + ' | Y: ' + searchMonster[1] + ' | X: ' + searchMonster[2] + '\n'); 
                  
                  }
                  }else{
                   $("#stats").append('\nNo monsters on the map!'); 
                  }
                  });
    
    $("#weapontest").live("click",function(){
        
       
        $("#stats_weapon").text("");
        
        var wepLgth = weapons.length;
         $("#stats_weapon").append('Showing items on Map - How many: ' + wepLgth + '\n');

         if (wepLgth > 0) {
                    for (var i = 0, setsLen = weapons.length; i < setsLen; ++i ) {
                
                 var searchWeapon = weapons[i].split("|");
                  $("#stats_weapon").append('['+i+'] >> Item ID: ' + searchWeapon[0] + ' | Y: ' + searchWeapon[1] + ' | X: ' + searchWeapon[2] + '\n');  
                  
                  }
                  }else{
                   $("#stats_weapon").append('\nNo items on the map!'); 
                  }
                  });

        // Clicked on a monster
$(".monster-map").live("click",function(){ 
    
          var ID_map = $('#current_tile').attr("class");
        var ID_now = $(this).attr("id");
        var monID = $(this).attr("name");
        var monClass = $(this).attr("class");
        
       if (currentTile != "delete-weapon") {
                
        var tile = ID_now.split("x"); 
        var Y = tile[0];
        var X = tile[1];
        // tile[0] = y | tile[1] = x
        


       // We clicked on weapon
           if (ID_map == "delete-monster") {
            
            for (var i = 0, monsLen = monsters.length; i < monsLen; ++i ) {
                
                 var searchMonster = monsters[i].split("|");
                 // console.log('['+i+'] >> Weapon ID: ' + searchWeapon[0] + ' | Y: ' + searchWeapon[1] + ' | X: ' + searchWeapon[2]);    
                 if (searchMonster[1] == Y && searchMonster[2] == X) { 
                    monsters.splice(i,1);
                    //$("#"+Y+"x"+X+"."+wepClass).remove();
                    $(this).remove();
                    subMonsterToRow(X,Y);
                 }          
                }
        }else{
        if(jQuery.inArray(ID_map, blockedTile) != -1 && currentTile == "tile") {
            popup("Drawing error!", "You cannot place a blocked tile on a monster.", "error");
            }else{
        if (currentTile == "tile") {
        $('#'+Y+"x"+X).attr("src", "line_tile/t"+ID_map+".png"); 
        $('#'+Y+"x"+X).attr("name", ID_map); 
        }else if (currentTile == "monster") {
            
           popup("Drawing error!", "You cannot place a monster on top of another monster.", "error");
        
            }else if (currentTile == "weapon") {
        
       popup("Drawing error!", "You cannot place an item on top of a monster.", "error");     
            }
            }
            }
            }else{
                popup("Drawing error!", "To delete a monster, use the correct delete button.", "error");
            }
       
        
          });
        // Clicked on a weapon
$(".weapon-map").live("click",function(){ 
          var ID_map = $('#current_tile').attr("class");
        var ID_now = $(this).attr("id");
        var wepID = $(this).attr("name");
        var wepClass = $(this).attr("class");
        
       if (currentTile != "delete-monster") {
                
        var tile = ID_now.split("x"); 
        var Y = tile[0];
        var X = tile[1];
        // tile[0] = y | tile[1] = x

        if(jQuery.inArray(ID_map, blockedTile) != -1) {
            popup("Drawing error!", "You cannot place a blocked tile on an item.", "error");
            }else{


       // We clicked on weapon
           if (currentTile == "weapon") {
             popup("Drawing error!", "You cannot place an item on top of another item.", "error");
            }else if (currentTile == "monster") {
             popup("Drawing error!", "You cannot place a monster on top of an item.", "error");
            }else if (ID_map == "delete-weapon") {
            
            for (var i = 0, setsLen = weapons.length; i < setsLen; ++i ) {
                
                 var searchWeapon = weapons[i].split("|");
                 // console.log('['+i+'] >> Weapon ID: ' + searchWeapon[0] + ' | Y: ' + searchWeapon[1] + ' | X: ' + searchWeapon[2]);    
                 if (searchWeapon[1] == Y && searchWeapon[2] == X) { 
                    weapons.splice(i,1);
                    //$("#"+Y+"x"+X+"."+wepClass).remove();
                    $(this).remove();
                    console.log("Removing image ID: #"+Y+"x"+X+"."+wepClass);
                    $("#item-row ."+X+"x"+Y).remove(); 
                    subItemToRow(X,Y);  
                 }          
                }
                
            for (var i = 0, signsLen = signs.length; i < signsLen; ++i ) {
                
                 var searchSign = signs[i].split("|");
                 // console.log('['+i+'] >> Weapon ID: ' + searchWeapon[0] + ' | Y: ' + searchWeapon[1] + ' | X: ' + searchWeapon[2]);    
                 if (searchSign[0] == X && searchSign[1] == Y) { 
                    signs.splice(i,1);
                    
                    $(this).remove();
                    console.log("Removing sign...");
                 }          
                }
        }else{
 
        if (currentTile == "tile") {
        $('#'+Y+"x"+X).attr("src", "line_tile/t"+ID_map+".png"); 
        $('#'+Y+"x"+X).attr("name", ID_map); 
        }else if (currentTile == "weapon") {
            
        console.log("Monster ADDED to table.");
        $('#a-'+Y+"x"+X).append('<img style="z-index:2" id="weapon-'+ID_map+'" class="weapon-map" src="weapon/w'+ID_map+'.gif" />');
        $('#a-'+Y+"x"+X).attr("name", ID_map);
        $(".item_body").append("<tr id='item-row' class='" + getItems.x + "x" + getItems.y + "'><td style='text-align:center;' class='item_row'><img style='width:32px;height:32px' src='crop.php?f=items.gif&y=0&x="+(parseInt(getItems.id)-1)+"' /></td><td class='numbers'>"+ getItems.id +"</td><td class='numbers'>"+ getItems.x +"</td><td class='numbers'>"+ getItems.y +"</td></tr>");   

        
            }else if (currentTile == "monster") {
        
        popup("Drawing error!", "You cannot place an item on top of an item.", "error");
            
            }
            
            }
            }
            }else{
                popup("Drawing error!", "To delete an item, use the correct delete button.", "error");
            }
       
        
          });
    
 /**
    // toggle grid  
    
$("#togglegrid").live("click",function(){
    
    $('#gamemap').append('<img alt="sup" title="titleddd" style="z-index:5;position:absolute;top:0;" class="weapon-map" src="pick.gif" />');

    });   **/     
          
          
$(".maptile").live("mouseover",function(){
    var ID_now = $(this).attr("id");
        var tile = ID_now.split("x"); 
        var Y = tile['0'];
        var X = tile['1'];
        $("#currY").text(Y);
        $("#currX").text(X);
    });
          

   
$(".maptile").live("mouseover",function(){
    
    var ID_now = $(this).attr("id");
        var tile = ID_now.split("x"); 
        var ID_map = $('#current_tile').attr("class");
        var Y = tile['0'];
        var X = tile['1'];
    
    if (ltToggle && ltPick1 != "0") {
 
            var ltPick2Bright = X+"|"+Y;
 
        
            var nodeStartBright = ltPick1.split("|");
            var nodeEndBright = ltPick2Bright.split("|");
         //console.log("nodeStartBright: " + nodeStartBright['0'] + " | nodeEndBright: " + nodeEndBright['0']);
                 
                 var countXBright = parseInt(nodeStartBright['0']);
                 var countYBright = parseInt(nodeStartBright['1']);
                 var goingRightBright = false; 
                 var goingUpBright = false;
                 var goingLeftBright = false;
                 var goingDownBright = false;

                 if (countYBright > parseInt(nodeEndBright['1'])) { 
                    goingUpBright = true;
                    }else{
                    goingDownBright = true;
                    }
                 
                 if (countXBright < parseInt(nodeEndBright['0'])) { 
                    goingRightBright = true;
                    }else{
                    goingLeftBright = true;
                    }
                    
              
if (goingRightBright || goingLeftBright) {

    if (nodeStartBright['1'] != nodeEndBright['1']) {
        goingRightBright = false;
        goingLeftBright = false;
    }
    }
if (goingUpBright || goingDownBright) {
    
    if (nodeStartBright['0'] != nodeEndBright['0']) {
        goingUpBright = false;
        goingDownBright = false;
    }
}

                 if (goingUpBright) {
         
                    $('.maptile').fadeTo(0, 1);
                      while (countYBright >= nodeEndBright['1']) {
                    
                    $('#'+countYBright+"x"+nodeEndBright['0']).fadeTo(0, .5);
                    countYBright = countYBright - 1;
                    }
                    
                    }else if (goingDownBright){

                        $('.maptile').fadeTo(0, 1);
                        while (countYBright <= nodeEndBright['1']) {
                     $('#'+countYBright+"x"+nodeEndBright['0']).fadeTo(0, .5);
                    countYBright = countYBright + 1;
                    }
                    }
                 
                 if (goingRightBright) {

                      $('.maptile').fadeTo(0, 1);
                      while (countXBright <= nodeEndBright['0']) {
                    
                    $('#'+nodeEndBright['1']+"x"+countXBright).fadeTo(0, .5);
                    countXBright = countXBright + 1;
                    }
                    }else if (goingLeftBright){
                     $('.maptile').fadeTo(0, 1);
                    while (countXBright >= nodeEndBright['0']) {
                    $('#'+nodeEndBright['1']+"x"+countXBright).fadeTo(0, .5);
                    countXBright = countXBright - 1;
                    }
                    }
                    
   
   }else if (rtToggle && ltPick1 != "0") {
    
            $('.maptile').fadeTo(0, 1);
			ltPick2Bright = X+"|"+Y;
        
            var nodeStartBright = ltPick1.split("|");
            var nodeEndBright = ltPick2Bright.split("|");
         
                 var countXBright = parseInt(nodeStartBright['0']);
                 var countYBright = parseInt(nodeStartBright['1']);
                 
                 // Bottom Right - Top Left
                 if (countXBright > parseInt(nodeEndBright['0']) && countYBright > parseInt(nodeEndBright['1'])) {
                    console.log("Bottom Right - Top Left");
                    

for (i = parseInt(nodeEndBright['0']); i <= parseInt(nodeStartBright['0']); i++) {
for (xi = parseInt(nodeEndBright['1']); xi <= parseInt(nodeStartBright['1']); xi++) {
    $('#'+xi+"x"+i).css("opacity", ".5");
     
    }
    }

                 }
                 // Top Right - Bottom Left
                 if (countXBright > parseInt(nodeEndBright['0']) && countYBright < parseInt(nodeEndBright['1'])) {
                    console.log("Top Right - Bottom Left");
                    

for (i = parseInt(nodeEndBright['0']); i <= parseInt(nodeStartBright['0']); i++) {
for (xi = parseInt(nodeStartBright['1']); xi <= parseInt(nodeEndBright['1']); xi++) {
    //$('#'+xi+"x"+i).fadeTo(0, .5);
    $('#'+xi+"x"+i).css("opacity", ".5");
    }
    }

                 }
                 
                 // Top Left - Bottom Right
                 if (countXBright < parseInt(nodeEndBright['0']) && countYBright < parseInt(nodeEndBright['1'])) {
                    console.log("Top Left - Bottom Right");
                    
for (i = parseInt(nodeStartBright['0']); i <= parseInt(nodeEndBright['0']); i++) {
for (xi = parseInt(nodeStartBright['1']); xi <= parseInt(nodeEndBright['1']); xi++) {
    $('#'+xi+"x"+i).css("opacity", ".5");
    }
    }
                 }
                 

                 // Bottom Left - Top Right
                 if (countXBright < parseInt(nodeEndBright['0']) && countYBright > parseInt(nodeEndBright['1'])) {
                    console.log("Bottom Left -> Top Right");
                    
for (i = parseInt(nodeStartBright['0']); i <= parseInt(nodeEndBright['0']); i++) {
for (xi = parseInt(nodeEndBright['1']); xi <= parseInt(nodeStartBright['1']); xi++) {
    $('#'+xi+"x"+i).css("opacity", ".5");
    
    }
    }
                    
                 }

    
    }
   
    });

          
          
          // clicked on a tile
$(".maptile").live("click",function(){

        var ID_map = $('#current_tile').attr("class");
        var ID_now = $(this).attr("id");
        var ID_name = $(this).attr("name");
        
                        
        var tile = ID_now.split("x"); 
        var Y = tile[0];
        var X = tile[1];
        
        
        
        
            if (currentTile == "dropper") {
        
        // TILE DROPPER
        if(jQuery.inArray(ID_name, blockedTile) != -1) {
            $('#tile_status').text("Blocked");
            $('#tile_status').attr("class", "sexybutton sexysimple sexyred sexylarge"); 
            }else{
             $('#tile_status').text("Walkable"); 
             $('#tile_status').attr("class", "sexybutton sexysimple sexygreen sexylarge"); 
            } 
        
        $('#current_tile').attr("src", "line_tile/t"+ID_name+".png"); 
        $('#current_tile').attr("class", ID_name);        

      tdToggle = false;
      ltToggle = false;
      rtToggle = false;
      $('#tile_dropper').attr("class", "sexybutton sexysimple sexyred sexylarge");
      
      
      console.log("beforeTile: " + beforeTile);
      
      currentTile = beforeTile;
      
      if (beforeTile == "tile") {
        $('#tile').attr("class", "sexybutton sexysimple sexygreen sexylarge");
        currentTile = "tile";
      }else if (beforeTile == "line_tool") {
        ltToggle = true;
        $('#line_tool').attr("class", "sexybutton sexysimple sexygreen sexylarge");    
      }else if (beforeTile == "rect") {
        rtToggle = true;
        $('#rect').attr("class", "sexybutton sexysimple sexygreen sexylarge");    
      }
      
      beforeTile = "";
      
      
    }else if (currentTile == "rect") {
        // Rectangle Tool
        if(jQuery.inArray(ID_map, entranceTile) != -1) {
    popup("Drawing error!", "You cannot create rectangles with entrance blocks.", "warning");
    }else if(jQuery.inArray(ID_map, teleportTile) != -1) {
    popup("Drawing error!", "You cannot create rectangles with teleport blocks.", "warning");
    }else{
                if (ltPick1 == "0" && ltPick2 == "0") {
            ltPick1 = X+"|"+Y;
            console.log("Tile 1 picked... ltPick1: " + ltPick1);
            //$('#'+Y+"x"+X).effect("pulsate", {}, 250);
            $('#'+Y+"x"+X).fadeTo(100, .5);
        }else if (!ltPick2 == "" && ltPick2 == "0"){
            ltPick2 = X+"|"+Y;
            console.log("Tile 2 picked... ltPick2: " + ltPick2);
        
            var nodeStart = ltPick1.split("|");
            var nodeEnd = ltPick2.split("|");
            console.log("Rectangle start...");
         console.log("nodeStart: " + nodeStart['0'] + " | nodeEnd: " + nodeEnd['0']);
         
                 var countX = parseInt(nodeStart['0']);
                 var countY = parseInt(nodeStart['1']);
                 var goingRight = false; 
                 var goingUp = false;
                 var goingLeft = false;
                 var goingDown = false;
                 
                 
                 console.log("countX: " + countX + " | countY: " + countY); 
                 console.log("nodeEnd[0]: " + nodeEnd['0'] + " | nodeEnd[1]: " + nodeEnd['1']); 
                 
                 
                 // Bottom Right - Top Left
                 if (countX > parseInt(nodeEnd['0']) && countY > parseInt(nodeEnd['1'])) {
                    console.log("Bottom Right - Top Left");
                    

for (i = parseInt(nodeEnd['0']); i <= parseInt(nodeStart['0']); i++) {
for (xi = parseInt(nodeEnd['1']); xi <= parseInt(nodeStart['1']); xi++) {
    console.log("X: " + i  + " | Y: " + xi);
                    $('#'+xi+"x"+i).attr("src", "line_tile/t"+ID_map+".png"); 
                    $('#'+xi+"x"+i).attr("name", ID_map); 
                    
                    // If find entrnace... delete from array
                    try {
                    var entLen = 0;
                    for (var entRemove = 0, entLen = entrances.length; entRemove < entLen; ++entRemove ) {
                        var searchEntR = entrances[entRemove].split("|");
                    if (searchEntR['0'] == xi && searchEntR['1'] == i) {
                        console.log("DELETING ENTRANCE");
                        entrances.splice(entRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING ENTRNACE ARRAY.");
                        }
                        
                    // If find teleport... delete from array
                    try {
                    var teleLen = 0;
                    for (var teleRemove = 0, teleLen = teleports.length; teleRemove < teleLen; ++teleRemove ) {
                        var searchteleR = teleports[teleRemove].split("|");
                    if (searchteleR['0'] == xi && searchteleR['1'] == i) {
                        console.log("DELETING TELEPORT");
                        teleports.splice(teleRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING TELEPORT ARRAY.");
                        }
                        
                        
    }
    }

                 }
                 // Top Right - Bottom Left
                 if (countX > parseInt(nodeEnd['0']) && countY < parseInt(nodeEnd['1'])) {
                    console.log("Top Right - Bottom Left");
                    

for (i = parseInt(nodeEnd['0']); i <= parseInt(nodeStart['0']); i++) {
for (xi = parseInt(nodeStart['1']); xi <= parseInt(nodeEnd['1']); xi++) {
    console.log("X: " + i  + " | Y: " + xi);
                    $('#'+xi+"x"+i).attr("src", "line_tile/t"+ID_map+".png"); 
                    $('#'+xi+"x"+i).attr("name", ID_map); 
                    
                    // If find entrnace... delete from array
                    try {
                    var entLen = 0;
                    for (var entRemove = 0, entLen = entrances.length; entRemove < entLen; ++entRemove ) {
                        var searchEntR = entrances[entRemove].split("|");
                    if (searchEntR['0'] == xi && searchEntR['1'] == i) {
                        console.log("DELETING ENTRANCE");
                        entrances.splice(entRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING ENTRNACE ARRAY.");
                        }
                        
                    // If find teleport... delete from array
                    try {
                    var teleLen = 0;
                    for (var teleRemove = 0, teleLen = teleports.length; teleRemove < teleLen; ++teleRemove ) {
                        var searchteleR = teleports[teleRemove].split("|");
                    if (searchteleR['0'] == xi && searchteleR['1'] == i) {
                        console.log("DELETING TELEPORT");
                        teleports.splice(teleRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING TELEPORT ARRAY.");
                        }
    }
    }

                 }
                 
                 // Top Left - Bottom Right
                 if (countX < parseInt(nodeEnd['0']) && countY < parseInt(nodeEnd['1'])) {
                    console.log("Top Left - Bottom Right");
                    
for (i = parseInt(nodeStart['0']); i <= parseInt(nodeEnd['0']); i++) {
for (xi = parseInt(nodeStart['1']); xi <= parseInt(nodeEnd['1']); xi++) {
    console.log("X: " + i  + " | Y: " + xi);
                    $('#'+xi+"x"+i).attr("src", "line_tile/t"+ID_map+".png"); 
                    $('#'+xi+"x"+i).attr("name", ID_map); 
                    
                    // If find entrnace... delete from array
                    try {
                    var entLen = 0;
                    for (var entRemove = 0, entLen = entrances.length; entRemove < entLen; ++entRemove ) {
                        var searchEntR = entrances[entRemove].split("|");
                    if (searchEntR['0'] == xi && searchEntR['1'] == i) {
                        console.log("DELETING ENTRANCE");
                        entrances.splice(entRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING ENTRNACE ARRAY.");
                        }
                        
                    // If find teleport... delete from array
                    try {
                    var teleLen = 0;
                    for (var teleRemove = 0, teleLen = teleports.length; teleRemove < teleLen; ++teleRemove ) {
                        var searchteleR = teleports[teleRemove].split("|");
                    if (searchteleR['0'] == xi && searchteleR['1'] == i) {
                        console.log("DELETING TELEPORT");
                        teleports.splice(teleRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING TELEPORT ARRAY.");
                        }
    }
    }
                 }
                 

                 // Bottom Left - Top Right
                 if (countX < parseInt(nodeEnd['0']) && countY > parseInt(nodeEnd['1'])) {
                    console.log("Bottom Left -> Top Right");
                    
for (i = parseInt(nodeStart['0']); i <= parseInt(nodeEnd['0']); i++) {
for (xi = parseInt(nodeEnd['1']); xi <= parseInt(nodeStart['1']); xi++) {
    console.log("X: " + i  + " | Y: " + xi);
                    $('#'+xi+"x"+i).attr("src", "line_tile/t"+ID_map+".png"); 
                    $('#'+xi+"x"+i).attr("name", ID_map); 
                    
                    // If find entrnace... delete from array
                    try {
                    var entLen = 0;
                    for (var entRemove = 0, entLen = entrances.length; entRemove < entLen; ++entRemove ) {
                        var searchEntR = entrances[entRemove].split("|");
                    if (searchEntR['0'] == xi && searchEntR['1'] == i) {
                        console.log("DELETING ENTRANCE");
                        entrances.splice(entRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING ENTRNACE ARRAY.");
                        }
                        
                    // If find teleport... delete from array
                    try {
                    var teleLen = 0;
                    for (var teleRemove = 0, teleLen = teleports.length; teleRemove < teleLen; ++teleRemove ) {
                        var searchteleR = teleports[teleRemove].split("|");
                    if (searchteleR['0'] == xi && searchteleR['1'] == i) {
                        console.log("DELETING TELEPORT");
                        teleports.splice(teleRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING TELEPORT ARRAY.");
                        }
    }
    }
                    
                 }

                    ltPick1 = "0";
                    ltPick2 = "0";
                    currentTile = "rect";
                    $('.maptile').fadeTo(0, 1);
         }
        }
        }else if (currentTile == "line_tool") {
            
            
            // LINE TOOL   
if(jQuery.inArray(ID_map, entranceTile) != -1) {
    popup("Drawing error!", "You cannot create lines with entrance blocks.", "warning");
    }else if(jQuery.inArray(ID_map, teleportTile) != -1) {
    popup("Drawing error!", "You cannot create lines with teleport blocks.", "warning");
    }else{
        
        if (ltPick1 == "0" && ltPick2 == "0") {
            ltPick1 = X+"|"+Y;
            console.log("Tile 1 picked... ltPick1: " + ltPick1);
            
            //$('#'+Y+"x"+X).attr("src", "line_tile/t523.png");
            //$('#'+Y+"x"+X).effect("pulsate", {}, 250);
                        
        }else if (!ltPick2 == "" && ltPick2 == "0"){
            ltPick2 = X+"|"+Y;
            console.log("Tile 2 picked... ltPick2: " + ltPick2);
        
            var nodeStart = ltPick1.split("|");
            var nodeEnd = ltPick2.split("|");
         console.log("nodeStart: " + nodeStart['0'] + " | nodeEnd: " + nodeEnd['0']);
                 
                 var countX = parseInt(nodeStart['0']);
                 var countY = parseInt(nodeStart['1']);
                 var goingRight = false; 
                 var goingUp = false;
                 var goingLeft = false;
                 var goingDown = false;
                 
                
                 
                 console.log("[ countX: " + countX + " | countY: " + countY + " ]");
                 console.log("[ nodeStart['0']: " + nodeStart['0'] + " | nodeStart['1']: " + nodeStart['1'] + " | nodeEnd['1']: " + nodeEnd['1'] + " | nodeEnd['0']: " + nodeEnd['0'] + " ]");
                 
                 if (parseInt(nodeEnd['0']) == parseInt(nodeStart['0'])) {
                 if (countY > parseInt(nodeEnd['1'])) { 
                    goingUp = true;
                    }else{
                    goingDown = true;
                    }
                  }else{
                 
                  if (countX < parseInt(nodeEnd['0'])) { 
                    goingRight = true;
                    }else{
                    goingLeft = true;
                    }
                    }
                    
                    
        console.log("Direction check: goingLeft:" + goingLeft + " | goingRight: " + goingRight + " | goingUp: " + goingUp + " | goingDown: " + goingDown);      
if (goingRight || goingLeft) {
    console.log("Y check: nodeStart['1'] " + nodeStart['1'] + " | nodeEnd['1']: " + nodeEnd['1']);
    if (nodeStart['1'] !== nodeEnd['1']) {
        popup("Drawing error!", "Stay on the same Y (" + nodeStart['1'] + ") axis.", "error");
        goingRight = false;
        goingLeft = false;
        
    }
    }
if (goingUp || goingDown) {
    console.log("X check: nodeStart['0'] " + nodeStart['0'] + " | nodeEnd['0']: " + nodeEnd['0']);
    if (nodeStart['0'] !== nodeEnd['0']) {
        popup("Drawing error!", "Stay on the same X (" + nodeStart['0'] + ") axis.", "error");                
        goingUp = false;
        goingDown = false;
        
    }
}
                 if (goingUp) {
                    console.log("Going up...");
                    
                      while (countY >= nodeEnd['1']) {
                    
                    // If find entrnace... delete from array
                    try {
                    var entLen = 0;
                    for (var entRemove = 0, entLen = entrances.length; entRemove < entLen; ++entRemove ) {
                        var searchEntR = entrances[entRemove].split("|");
                    if (searchEntR['0'] == countY && searchEntR['1'] == nodeEnd['0']) {
                        console.log("DELETING ENTRANCE");
                        entrances.splice(entRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING ENTRNACE ARRAY.");
                        }
                        
                    // If find teleport... delete from array
                    try {
                    var teleLen = 0;
                    for (var teleRemove = 0, teleLen = teleports.length; teleRemove < teleLen; ++teleRemove ) {
                        var searchteleR = teleports[teleRemove].split("|");
                    if (searchteleR['0'] == countY && searchteleR['1'] == nodeEnd['0']) {
                        console.log("DELETING TELEPORT");
                        teleports.splice(teleRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING TELEPORT ARRAY.");
                        }
                    
                    $('#'+countY+"x"+nodeEnd['0']).attr("src", "line_tile/t"+ID_map+".png"); 
                    $('#'+countY+"x"+nodeEnd['0']).attr("name", ID_map); 
                    countY = countY - 1;
                    }
                    
                    }else if (goingDown){
                        console.log("Going DOWN...");
                        while (countY <= nodeEnd['1']) {
                            
                    // If find entrnace... delete from array
                    try {
                    var entLen = 0;
                    for (var entRemove = 0, entLen = entrances.length; entRemove < entLen; ++entRemove ) {
                        var searchEntR = entrances[entRemove].split("|");
                    if (searchEntR['0'] == countY && searchEntR['1'] == nodeEnd['0']) {
                        console.log("DELETING ENTRANCE");
                        entrances.splice(entRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING ENTRNACE ARRAY.");
                        }
                        
                    // If find teleport... delete from array
                    try {
                    var teleLen = 0;
                    for (var teleRemove = 0, teleLen = teleports.length; teleRemove < teleLen; ++teleRemove ) {
                        var searchteleR = teleports[teleRemove].split("|");
                    if (searchteleR['0'] == countY && searchteleR['1'] == nodeEnd['0']) {
                        console.log("DELETING TELEPORT");
                        teleports.splice(teleRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING TELEPORT ARRAY.");
                        }
                            
                    $('#'+countY+"x"+nodeEnd['0']).attr("src", "line_tile/t"+ID_map+".png"); 
                    $('#'+countY+"x"+nodeEnd['0']).attr("name", ID_map); 
                    countY = countY + 1;
                    }
                    }
                 
                 if (goingRight) {
                    
                      console.log("Creating a line to the RIGHT.");
                      while (countX <= nodeEnd['0']) {
                    
                    // If find entrnace... delete from array
                    try {
                    var entLen = 0;
                    for (var entRemove = 0, entLen = entrances.length; entRemove < entLen; ++entRemove ) {
                        var searchEntR = entrances[entRemove].split("|");
                    if (searchEntR['0'] == nodeEnd['1'] && searchEntR['1'] == countX) {
                        console.log("DELETING ENTRANCE");
                        entrances.splice(entRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING ENTRNACE ARRAY.");
                        }
                        
                    // If find teleport... delete from array
                    try {
                    var teleLen = 0;
                    for (var teleRemove = 0, teleLen = teleports.length; teleRemove < teleLen; ++teleRemove ) {
                        var searchteleR = teleports[teleRemove].split("|");
                    if (searchteleR['0'] == nodeEnd['1'] && searchteleR['1'] == countX) {
                        console.log("DELETING TELEPORT");
                        teleports.splice(teleRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING TELEPORT ARRAY.");
                        }
                    
                    //console.log("countX: " + countX + " | X: " + countX + " | Y: " + nodeEnd['1']);
                    $('#'+nodeEnd['1']+"x"+countX).attr("src", "line_tile/t"+ID_map+".png"); 
                    $('#'+nodeEnd['1']+"x"+countX).attr("name", ID_map); 
                    countX = countX + 1;
                    }
                    }else if (goingLeft){
                    console.log("Creating a line to the LEFT.");
                    while (countX >= nodeEnd['0']) {
                    
                    // If find entrnace... delete from array
                    try {
                    var entLen = 0;
                    for (var entRemove = 0, entLen = entrances.length; entRemove < entLen; ++entRemove ) {
                        var searchEntR = entrances[entRemove].split("|");
                    if (searchEntR['0'] == nodeEnd['1'] && searchEntR['1'] == countX) {
                        console.log("DELETING ENTRANCE");
                        entrances.splice(entRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING ENTRNACE ARRAY.");
                        }
                        
                    // If find teleport... delete from array
                    try {
                    var teleLen = 0;
                    for (var teleRemove = 0, teleLen = teleports.length; teleRemove < teleLen; ++teleRemove ) {
                        var searchteleR = teleports[teleRemove].split("|");
                    if (searchteleR['0'] == nodeEnd['1'] && searchteleR['1'] == countX) {
                        console.log("DELETING TELEPORT");
                        teleports.splice(teleRemove, 1);
                        } 
                        }
                        } catch(e) {
                            console.log("ERROR IN DELETING TELEPORT ARRAY.");
                        }
                    
                    console.log("countX: " + countX + " | X: " + countX + " | Y: " + nodeEnd['1']);
                    $('#'+nodeEnd['1']+"x"+countX).attr("src", "line_tile/t"+ID_map+".png"); 
                    $('#'+nodeEnd['1']+"x"+countX).attr("name", ID_map); 
                    countX = countX - 1;
                    }
                    }
                    

                                       
                    
                    countX = 0;
                    ltPick1 = "0";
                    ltPick2 = "0";
                    currentTile = "line_tool";
                    $('.maptile').fadeTo(0, 1);
                    
        }
        
        }
        // console.log("nodeStart: " + nodeStart + " | nodeEnd: " + nodeEnd);
//while (nodeStart['0'] < nodeEnd['0']) {
  //  console.log("X tile !");
//}
        
        
        }else if (ID_map == "delete-weapon") {
           popup("Deletion error!", "There is no weapon to delete.", "error");
        }else if (ID_map == "delete-monster") {
            popup("Deletion error!", "There is no monster to delete.", "error");
        }else{

        // tile[0] = y | tile[1] = x

        
        /**        
        // 0 X to Mouse X COVER
        for (var q = 0; q <= X; q++) {
         $('#'+Y+"x"+q).attr("src", "line_tile/t"+ID_map+".png");    
        }
        **/        
        
        // adding tile
        if (currentTile == "tile") {
        
        if(jQuery.inArray(ID_map, entranceTile) != -1) {
                
                
         for (var i = 0, entLen = entrances.length; i < entLen; ++i ) {
                        var searchEntx = entrances[i].split("|");
                 if (searchEntx[0] == Y && searchEntx[1] == X) {      
        entrances.splice(i,1);
        }
        }
        
        for (var i = 0, teleLen = teleports.length; i < teleLen; ++i ) {
            var searchTelex = teleports[i].split("|");
                 if (searchTelex[0] == Y && searchTelex[1] == X) {
                    teleports.splice(i,1);
                 }
        }
                
           var tileAfter_input = prompt ("Enter the tile ID that the door will be after it's opened.","0");
           var itemReq_input = prompt ("Enter the item ID required to have to open the door -- If none; type 0.","0");
                
         $('#'+Y+"x"+X).attr("src", "line_tile/t"+ID_map+".png"); 
        $('#'+Y+"x"+X).attr("name", ID_map); 

        entrances.push(Y+"|"+X+"|"+tileAfter_input+"|"+itemReq_input);
        
        }else if(jQuery.inArray(ID_map, teleportTile) != -1) {
           
           var mapID_tele = $("#map_id").val();
            
              if (mapID_tele == null) {
                popup("Numbers only!", "Your Map ID can only have numbers.", "warning");

              }else{ 
                
        for (var i = 0, teleLen = teleports.length; i < teleLen; ++i ) {
            var searchTelex = teleports[i].split("|");
                 if (searchTelex[0] == Y && searchTelex[1] == X) {
                    teleports.splice(i,1);
                 }
        }
        
         for (var i = 0, entLen = entrances.length; i < entLen; ++i ) {
                        var searchEntx = entrances[i].split("|");
                 if (searchEntx[0] == Y && searchEntx[1] == X) {      
        entrances.splice(i,1);
        }
        }
                
           var teleX = prompt ("Enter the X coordinate to teleport too.","0");
           var teleY = prompt ("Enter the Y coordinate to teleport too.","0");
           var teleMap = prompt ("Enter the map ID to teleport too.","0");
           var teleItem = prompt ("Enter the item ID needed to teleport -- If none; type 0.","0");
    
        $('#'+Y+"x"+X).attr("src", "line_tile/t"+ID_map+".png"); 
        
        $('#'+Y+"x"+X).attr("name", ID_map); 

        teleports.push(Y+"|"+X+"|"+mapID_tele+"|"+teleY+"|"+teleX+"|"+teleMap+"|"+teleItem);
        }
        }else{
        $('#'+Y+"x"+X).attr("src", "line_tile/t"+ID_map+".png"); 
        $('#'+Y+"x"+X).attr("name", ID_map); 
        
        for (var i = 0, teleLen = teleports.length; i < teleLen; ++i ) {
            var searchTelex = teleports[i].split("|");
                 if (searchTelex[0] == Y && searchTelex[1] == X) teleports.splice(i,1);
        }
        
                    for (var i = 0, entLen = entrances.length; i < entLen; ++i ) {
                        var searchEntx = entrances[i].split("|");
                 if (searchEntx[0] == Y && searchEntx[1] == X) {      
        entrances.splice(i,1);
        }
        }
        }
        
        }else if (currentTile == "weapon") {
        // adding weapon
 
  if(ID_map == "6") {
     var signSays = prompt("What would you like your sign to say?","");
     signs.push(X+"|"+Y+"|"+signSays);
     //console.log("ID_map_tele: " + mapID_tele) 
     
        $('#a-'+Y+"x"+X).append('<img title="monx" style="z-index:2" id="'+Y+'x'+X+'" name="'+ID_map+'" class="weapon-map" src="crop.php?f=items.gif&y=0&x='+ID_map+'" />');
        $('#a-'+Y+"x"+X).attr("name", ID_map);
        addItemToRow(X,Y,ID_map);
        
        
    }else if(jQuery.inArray(ID_name, teleportTile) != -1) {
     popup("Drawing prohibited!", "You cannot place a weapon on a teleport tile.", "warning");
    }else if(jQuery.inArray(ID_name, blockedTile) != -1) {
            popup("Drawing prohibited!", "You cannot place a weapon on a blocked tile.", "warning");
        }else{
        
        
        $('#a-'+Y+"x"+X).append('<img title="monx" style="z-index:2" id="'+Y+'x'+X+'" name="'+ID_map+'" class="weapon-map" src="crop.php?f=items.gif&y=0&x='+ID_map+'" />');
        $('#a-'+Y+"x"+X).attr("name", ID_map);  
        weapons.push(ID_map+"|"+Y+"|"+X);
        addItemToRow(X,Y,ID_map);
        

        
        for (var i = 0, setsLen = weapons.length; i < setsLen; ++i ) {
        //output each weapon
        //console.log("weapons["+i+"]" + weapons[i]);
        
        }
        }
            }else if (currentTile == "monster") {
        // adding weapon
         if(jQuery.inArray(ID_name, teleportTile) != -1) {
             popup("Drawing prohibited!", "You cannot place a monster on a teleport tile.", "warning");
            }else if(jQuery.inArray(ID_name, blockedTile) != -1) {
                popup("Drawing prohibited!", "You cannot place a monster on a blocked tile.", "warning");
        }else{
            
        $('#a-'+Y+"x"+X).append('<img style="z-index:2" id="'+Y+'x'+X+'" name="'+ID_map+'" class="monster-map" src="crop.php?f=monster.gif&y=0&x='+ID_map+'" />');
        $('#a-'+Y+"x"+X).attr("name", ID_map);  
        monsters.push(ID_map+"|"+Y+"|"+X);
        
        addMonsterToRow(X,Y,ID_map);
        
        for (var i = 0, monstersLen = monsters.length; i < monstersLen; ++i ) {
        //output each monster
        console.log("monsters["+i+"]" + monsters[i]);
        
        }
        }
            }else if (currentTile == "delete-monster" || currentTile == "delete-weapon") {
                alert('You cannot delete a tile!');
                popup("Drawing prohibited!", "You cannot delete a tile. That's like dividing by zero, man.", "error");
                }
            }
       
        });
        
}); 

        function browseMode() {
    
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
				    
                    console.log("LOADING MAP: " + data.mapURL);
				    doBuild("load/"+data.mapURL);               
                    
                    }
                    });
    
}

function ajaxFileUpload(mapLoading)
	{

		$("#loading")
		.ajaxStart(function(){
			$(this).show();
		})
		.ajaxComplete(function(){
			$(this).hide();
		});
          
          doBuild(mapLoading);          

	}
    
function doBuild(theMap) {
    console.log("THE MAP: " + theMap);
    $.getJSON(theMap, function(data) {
    
addMystik(data);

});

    
}

function addMonsterToRow(x, y, id) {
    $(".mon_body").append("<tr id='monster-row' class='" + x + "x" + y + "'><td class='mon_row'><img style='width:32px;height:32px' src='crop.php?f=monster.gif&y=0&x="+ id +"' /></td><td class='numbers'>"+ id +"</td><td class='numbers'>"+ x +"</td><td class='numbers'>" + y +"</td></tr>");   
    console.log("Monster at X: " + x + ", Y: " + y + " added.");
    $(".monster-tr").remove();
}

function subMonsterToRow(x, y) {
    $("."+x+"x"+y+"").remove();
    console.log("Monster at X: " + x + ", Y: " + y + " removed.");
    if (monsters.length == 0) {
        $(".mon_body").append("<tr class='monster-tr' id='nothing_tr'><td class='nothing' colspan='4'>Nothing found.</td></tr>");
    }
    }

function addItemToRow(x, y, id) {
    $(".item_body").append("<tr id='item-row' class='" + x + "x" + y + "'><td style='text-align:center;' class='item_row'><img style='width:32px;height:32px' src='crop.php?f=items.gif&y=0&x="+ id +"' /></td><td class='numbers'>"+ id +" </td><td class='numbers'>"+ x +"</td><td class='numbers'>"+ y +"</td></tr>");   
    console.log("Item at X: " + x + ", Y: " + y + " added.");
    $(".item-tr").remove();
}

function subItemToRow(x, y) {
    $("."+x+"x"+y+"").remove();
    console.log("Item at X: " + x + ", Y: " + y + " removed.");
    
    if (weapons.length == 0) {
        $(".item_body").append("<tr class='item-tr' id='nothing_tr'><td class='nothing' colspan='4'>Nothing found.</td></tr>");
    }
    
    }



function addMystik(data) {
    
    
        //Get Monsters
    $("#title_row").text(data.title);
    $("#map_title").val(data.title);
    
    console.log("Loading map: " + data.title);

    var getIDs = "ids";
        $.each(data[getIDs], function(i,getIDs){
            $("#curr").text(getIDs.currentID);
            $("#map_id").val(getIDs.currentID);            
            $("#leftID").text(getIDs.leftMap);
            $("#left_id").val(getIDs.leftMap);            
            $("#rightID").text(getIDs.rightMap);
            $("#right_id").val(getIDs.rightMap);            
            $("#downID").text(getIDs.downMap);
            $("#down_id").val(getIDs.downMap);            
            $("#upID").text(getIDs.upMap);
            $("#up_id").val(getIDs.upMap);            
            });
            
        var monLgth = monsters.length;
            console.log("Deleting monsters from map...");
            $(".monster-map").remove();
             console.log("Monsters from map deleted!");
                  
                  
        var wepLgth = weapons.length;
        console.log("Deleting items from map...");
        $(".weapon-map").remove();
            console.log("Items from map deleted!");
    
    weapons = new Array(); // weapons array
    monsters = new Array(); // monsters array
    entrances = new Array(); // entrances array
    teleports = new Array(); // tele array
    signs = new Array(); // signs array
    
    //Get Map
    var getMap = "map";
    var now = 0;
    $(".map_body").text("");
        $.each(data[getMap], function(i,getMap){
            
        $("#nothing_tr").remove();
        $(".nothing").remove();
        
                    for (var mapLoad = 0; mapLoad <= 15; mapLoad++) {

                $('#'+now+"x"+mapLoad).attr("src", "line_tile/t"+getMap[mapLoad]+".png"); 
        $('#'+now+"x"+mapLoad).attr("name", getMap[mapLoad]); 
         if ((mapLoad/15) == 1) now = now + 1;
    
       // console.log('#'+now+"x"+mapLoad + " : getMap[mapLoad]: " + getMap[mapLoad] + " --- YAY");

    }
        
            //$("#other").append(getMap[now] + " {} \n");

/**
            for (var mapLoad = 0; mapLoad <= 15; mapLoad++) {

   $("#map").append("<a href='#' id='a-"+now+"x"+mapLoad+"' class='tile_map'><img id='"+now+"x"+mapLoad+"' class='maptile' title='(X: " +mapLoad + ", Y: " + now + ") | ID: "+getMap[mapLoad]+"' src='line_tile/t" + getMap[mapLoad]+ ".png' /></a>");
 if ((mapLoad/15) == 1) { 
    now = now + 1;
    $("#map").append("<div style='clear:both;'></div>");
     }

    }
    **/


    });
    
    // Get monsters            
    var getMonsters = "monsters";
    var monsterCount = 0;
    $(".mon_body").text("");
    
    
    
                try {
        $.each(data[getMonsters], function(i,getMonsters){
         
         monsterCount++;

       //console.log("Trying to push: " + getMonsters.id+"|"+getMonsters.y+"|"+getMonsters.x)        
        monsters.push(getMonsters.id+"|"+getMonsters.y+"|"+getMonsters.x);
        $('#a-'+getMonsters.y+"x"+getMonsters.x).append('<img title="(X: ' + getMonsters.x + ', Y: ' + getMonsters.y + ') | ID: ' + getMonsters.id + '" style="z-index:2" id="'+getMonsters.y+'x'+getMonsters.x+'" name="'+(parseInt(getMonsters.id-1))+'" class="monster-map" src="crop.php?f=monster.gif&y=0&x='+(parseInt(getMonsters.id-1))+'" />');
        $(".mon_body").append("<tr id='monster-row' class='" + getMonsters.x + "x" + getMonsters.y + "'><td class='mon_row'><img style='width:32px;height:32px' src='crop.php?f=monster.gif&y=0&x="+(parseInt(getMonsters.id-1))+"' /></td><td class='numbers'>"+ getMonsters.id +"</td><td class='numbers'>"+ getMonsters.x +"</td><td class='numbers'>"+ getMonsters.y +"</td></tr>");   
      
    });       
        }catch(e) {
        console.log("No monsters!");
        } 
    
    $("#numb_monsters").text(monsterCount);
        
    // Get Signs  
    var getSigns = "signs";
    var signCount = 0;
    //$(".mon_body").text("");
    
        console.log("Adding signs...");
        try {
        $.each(data[getSigns], function(i,getSigns){ 
        signCount++;
        signs.push(getSigns.x+"|"+getSigns.y+"|"+getSigns.text);    
    });    
    }catch(e) {
        console.log("No signs!");
        }
    console.log("Signs done!");
        
    // Get Teleports
    var getTeleports = "teleports";
    var teleportCount = 0;
    //$(".mon_body").text("");
    
        console.log("Adding teleports...");
        try {
        $.each(data[getTeleports], function(i,getTeleports){ 
        teleportCount++;
        teleports.push(getTeleports.fromY+"|"+getTeleports.fromX+"|"+getTeleports.fromMap+"|"+getTeleports.toY+"|"+getTeleports.toX+"|"+getTeleports.toMap+"|"+getTeleports.item_req);
    });    
        }catch(e) {
        console.log("No teleports!");
        }
    console.log("Teleports done!");
    // Get entrances        
    var getEntrances = "entrances";
    var entranceCount = 0;
    //$(".mon_body").text("");
    
                 console.log("Adding entrances...");
                 try {
        $.each(data[getEntrances], function(i,getEntrances){ 
        entranceCount++;
        entrances.push(getEntrances.y+"|"+getEntrances.x+"|"+getEntrances.tile_after+"|"+getEntrances.item_req);        
    });    
        }catch(e) {
        console.log("No entrances!");
        }
    console.log("Entrances done!");        
    
    //Get Items
    var getItems = "items";
    var itemCount = 0;
    $(".item_body").text("");
    try {
        $.each(data[getItems], function(i,getItems){
           itemCount++;
        $("#nothing_tr").remove();
        $(".nothing").remove();


weapons.push(getItems.id+"|"+getItems.y+"|"+getItems.x);
$('#a-'+getItems.y+"x"+getItems.x).append('<img title="(X: ' + getItems.x + ', Y: ' + getItems.y + ') | ID: ' + getItems.id + '" style="z-index:2" id="'+getItems.y+'x'+getItems.x+'" name="'+(parseInt(getItems.id-1))+'" class="weapon-map" src="crop.php?f=items.gif&y=0&x='+(parseInt(getItems.id-1))+'" />');
$(".item_body").append("<tr id='item-row' class='" + getItems.x + "x" + getItems.y + "'><td style='text-align:center;' class='item_row'><img style='width:32px;height:32px' src='crop.php?f=items.gif&y=0&x="+(parseInt(getItems.id)-1)+"' /></td><td class='numbers'>"+ getItems.id +"</td><td class='numbers'>"+ getItems.x +"</td><td class='numbers'>"+ getItems.y +"</td></tr>");   
      
    });
        }catch(e) {
        console.log("No items!");
        }
        
    $("#numb_items").text(itemCount);
    

    $("#map-loaded").css("display","inline");
    popup("Map loaded!", "Your map has successfully been loaded.", "success");    
    $("#success").css("display","inline");
            
    
}
                     