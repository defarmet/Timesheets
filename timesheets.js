var config = {
	apiKey: "AIzaSyCmzRvRdms3oR6Gwn-mt8A7nZErNxrxfjI",
	authDomain: "test-project-56ae5.firebaseapp.com",
	databaseURL: "https://test-project-56ae5.firebaseio.com",
	projectId: "test-project-56ae5",
	storageBucket: "test-project-56ae5.appspot.com"
};
firebase.initializeApp(config);
var db = firebase.database();

function add_employee(e) {
	e.preventDefault();

	var employee = {
		name: $("employee-name").val().trim(),
		role: $("employee-role").val().trim(),
		start: $("employee-start").val().trim(),
		rate: $("employee-rate").val().trim(),
		date: firebase.database.ServerValue.TIMESTAMP,
	};
	db.ref().push(employee);
}

db.ref().on("child-added", function(){});
db.ref().orderByChild("dateAdded").on("value", function(){});
$("#add-employee").on("click", add_employee);
