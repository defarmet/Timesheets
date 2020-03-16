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

	var name = $("employee-name").val().trim();
	var role = $("employee-role").val().trim();
	var start = $("employee-start").val().trim();
	var rate = $("employee-rate").val().trim();
}

$("#add-employee").on("click", add_employee);
