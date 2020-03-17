var config = {
	apiKey: "AIzaSyCmzRvRdms3oR6Gwn-mt8A7nZErNxrxfjI",
	authDomain: "test-project-56ae5.firebaseapp.com",
	databaseURL: "https://test-project-56ae5.firebaseio.com",
	projectId: "test-project-56ae5",
	storageBucket: "test-project-56ae5.appspot.com"
};
firebase.initializeApp(config);
var db = firebase.database();
moment.relativeTimeThreshold('M', 9999999999);

function add_employee(e) {
	e.preventDefault();

	var employee = {
		name: $("#employee-name").val().trim(),
		role: $("#employee-role").val().trim(),
		start: $("#employee-start").val().trim(),
		rate: $("#employee-rate").val().trim(),
		date: firebase.database.ServerValue.TIMESTAMP,
	};
	db.ref().push(employee);
}

function write_data(snapshot) {
	var data = snapshot.val();
	var name = $("<td>").text(data.name);
	var role = $("<td>").text(data.role);
	var start = $("<td>").text(data.start);
	var months_ago = moment(data.start, "MM-DD-YYYY").fromNow(true);
	var months = $("<td>").text(parseInt(months_ago) - 1);
	var rate = $("<td>").text(data.rate);
	var total = $("<td>").text((parseInt(months_ago) - 1) * data.rate);
	var row = $("<tr>");
	row.append(name, role, start, months, rate, total);

	$("#Employee-rows").append(row);
}

$("#add-employee").on("click", add_employee);
db.ref().on("child_added", write_data);
