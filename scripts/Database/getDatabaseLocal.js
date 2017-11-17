const getDatabase = function (loading) {
	$.ajax({
		"url": "./scripts/Database/database.json",
		"method": "GET"
	}).then (database => {
		loading(database)
	})
	
}

module.exports = getDatabase