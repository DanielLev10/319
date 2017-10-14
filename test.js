<html>
	<head>
<script>
function Set(id, name, value) {
    var requestStr = 
        "http://setgetgo.com/set.php?Id=" + id 
        + "&Name=" + name 
        + "&Value=" + value;

    $.ajax({
        type: "GET",
        url: requestStr,
        dataType: "jsonp",
        jsonpCallback:'SetComplete'
    });
}

function SetComplete(msg) {
    // that's it!
}

function Get(id, name) {
    var requestStr = "http://setgetgo.com/get.php?Id="+id;

    if (name != null) {
        requestStr = requestStr + "&Name=" + name;
    }

    $.ajax({
        type: "GET",
        url: requestStr,
        dataType: "jsonp",
        jsonpCallback: 'GetComplete'
    });
}

function GetComplete(msg) {
    // easy huh?
}
</script>
</head>
</html>