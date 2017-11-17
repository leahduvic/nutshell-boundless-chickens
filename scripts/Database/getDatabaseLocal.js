const getDatabase = function (loading) {
	$.ajax({
		"url": "database.json",
		"method": "GET"
	}).then (database => {
		loading(database)
	})
	
}

module.exports = getDatabase