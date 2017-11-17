const populateMessageField = require("./populateMessageField")
const reveal = require("./../Dashboard/reveal")
// const sendMessage = require("./sendMessage")
const closeModal = require("./../Dashboard/closeModal")
const toTop = require("./toTopOfChat")
const hasJoinedChat = require("./joinedChat")
const userIsTyping = require("./userIsTyping")
// const editMessage = require("./editMessage")
// const refreshButton = require("./refreshChatWindow")
const userClickAffordance = require("./../Friends/clickFromMessage")


// Sets up the ability for a message to be pushed into the chat bubble, saved in local storage, be primed for editing, and register when a user has joined chat
const messageSectionTarget = function () {
	const dashboardSection = document.getElementById("dashboard")
	const messageSection = document.getElementById("messages_section")
	messageSection.addEventListener("click", () => {
		reveal(dashboardSection)
		populateMessageField()
		// editMessage()
		// refreshButton()
		const messageKeyupRecord = document.getElementById("message_field")
		messageKeyupRecording = document.getElementById("message_field").value
		messageKeyupRecord.addEventListener("keyup", userIsTyping())
		// joined Chat
		if(!userIsTyping()){
			hasJoinedChat()
			// sendMessage()
			userClickAffordance()
			closeModal()
			toTop()
		}else{
			// sendMessage()
			closeModal()
			userClickAffordance()
			toTop()
		}
	})
}

module.exports = messageSectionTarget
