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
				    
                    $("#mapsize").text(data.mapSize + " kB"); 
                    $("#mapurl").text(data.mapURL); 
				    doBuild("load/"+data.mapURL);               
                    
                    }
                    });
    
}

$(document).ready(function()
{
    
    $(".cancel-drop").live("click",function(){
        
        $(".qq-upload-drop-area").remove();
        
        });
    
    });

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
    
    console.log("The Map: " + theMap);
    
    $.getJSON(theMap, function(data) {
    console.log("Loading... " + data.title);
addMystik(data);

});

    
}

function addMystik(data) {
    
        //Get Monsters
    $("#title_row").text(data.title);
    
    
    var getIDs = "ids";
        $.each(data[getIDs], function(i,getIDs){
            $("#curr").text(getIDs.currentID);
            $("#leftID").text(getIDs.leftMap);
            $("#rightID").text(getIDs.rightMap);
            $("#downID").text(getIDs.downMap);
            $("#upID").text(getIDs.upMap);
            
            console.log("Map ID: " + getIDs.currentID);
            });
            
    
    //Get Map
    var getMap = "map";
    var now = 0;
    $(".map_body").text("");
        $.each(data[getMap], function(i,getMap){
            
        $("#nothing_tr").remove();
        $(".nothing").remove();
        $(".map_body").append("<div id='map'></div>");
            //$("#other").append(getMap[now] + " {} <br />");
            for (var mapLoad = 0; mapLoad <= 15; mapLoad++) {

   $("#map").append("<a href='#' id='a-"+now+"x"+mapLoad+"' class='tile_map'><img id='"+now+"x"+mapLoad+"' class='maptile' title='(X: " +mapLoad + ", Y: " + now + ") | ID: "+getMap[mapLoad]+"' src='line_tile/t" + getMap[mapLoad]+ ".png' /></a>");
 if ((mapLoad/15) == 1) { 
    now = now + 1;
    $("#map").append("<div style='clear:both;'></div>");
     }

    }

    });
    
    console.log(data.title);
    
    // Get entrances         
    var getEntrances = "entrances";
    var entranceCount = 0;
        $.each(data[getEntrances], function(i,getEntrances){
         entranceCount++;
        console.log("Herp");
    });        
    
    // Get monsters            
    var getMonsters = "monsters";
    var monsterCount = 0;
    $(".mon_body").text("");
        $.each(data[getMonsters], function(i,getMonsters){
         monsterCount++;
        $("#nothing_tr").remove();
        $(".nothing").remove();
        
        $('#a-'+getMonsters.y+"x"+getMonsters.x).append('<img title="(X: ' + getMonsters.x + ', Y: ' + getMonsters.y + ') | ID: ' + getMonsters.id + '" style="z-index:2" id="'+getMonsters.y+'x'+getMonsters.x+'" name="'+(parseInt(getMonsters.id-1))+'" class="monster-map" src="crop.php?f=monster.gif&y=0&x='+(parseInt(getMonsters.id-1))+'" />');
        $(".mon_body").append("<tr><td class='mon_row'><img style='width:32px;height:32px' src='crop.php?f=monster.gif&y=0&x="+(parseInt(getMonsters.id-1))+"' /></td><td class='numbers'>"+ getMonsters.id +"</td><td class='numbers'>"+ getMonsters.x +"</td><td class='numbers'>"+ getMonsters.y +"</td></tr>");   
      
    });
    
    $("#numb_monsters").text(monsterCount);
    
    //Get Items
    var getItems = "items";
    var itemCount = 0;
    $(".item_body").text("");
        $.each(data[getItems], function(i,getItems){
           itemCount++;
        $("#nothing_tr").remove();
        $(".nothing").remove();

$('#a-'+getItems.y+"x"+getItems.x).append('<img title="(X: ' + getItems.x + ', Y: ' + getItems.y + ') | ID: ' + getItems.id + '" style="z-index:2" id="'+getItems.y+'x'+getItems.x+'" name="'+(parseInt(getItems.id-1))+'" class="weapon-map" src="crop.php?f=items.gif&y=0&x='+(parseInt(getItems.id-1))+'" />');
$(".item_body").append("<tr><td style='text-align:center;' class='item_row'><img style='width:32px;height:32px' src='crop.php?f=items.gif&y=0&x="+(parseInt(getItems.id)-1)+"' /></td><td class='numbers'>"+ getItems.id +"</td><td class='numbers'>"+ getItems.x +"</td><td class='numbers'>"+ getItems.y +"</td></tr>");   
      
    });
    $("#numb_items").text(itemCount);
    

    $("#map-loaded").css("display","inline");
    $("#success").css("display","inline");
            
    
}