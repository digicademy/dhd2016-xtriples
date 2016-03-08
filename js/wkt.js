function dynamicQuery (containerID, endpoint) {
	var queryString = "";
	Q = new sgvizler.Query();
	Q.query(queryString)
		.endpointURL(endpoint)
		.chartFunction("sgvizler.visualization.MapWKT")
		.draw(containerID);
}
$(function() {
	$("#wkt_select").click(function() {
		$( "#wkt" ).empty();
		if ($("#correspondent").val() == "alle") {
			endpoint = "../srj/map.all.srj"
		} else {
			endpoint = $("#correspondent").val();
		}
		dynamicQuery('wkt', endpoint);
	});
	$("#wkt_alle").click(function() {
		$( "#wkt" ).empty();
		endpoint = "../srj/map.all.srj"
		dynamicQuery('wkt', endpoint);
	});
	$("#wkt_soemmering").click(function() {
		$( "#wkt" ).empty();
		endpoint = "../srj/map.soemmering.srj"
		dynamicQuery('wkt', endpoint);
	});
	$("#wkt_18").click(function() {
		$( "#wkt" ).empty();
		endpoint = "../srj/map.18.srj"
		dynamicQuery('wkt', endpoint);
	});
	$("#wkt_19").click(function() {
		$( "#wkt" ).empty();
		endpoint = "../srj/map.19.srj"
		dynamicQuery('wkt', endpoint);
	});
	$( document ).ajaxSend(function() {
		$("#wkt").css("background", "url(../img/spinner.gif) center no-repeat");
	});
	$( document ).ajaxComplete(function() {
		$("#wkt").css("background", "none");
	});
});