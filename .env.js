// this is formatted to echo the structure of the Bluemix credentials 
module.exports = {
        VCAP_SERVICES: JSON.stringify({
            conversation: [{
				credentials: {
					url: "https://gateway.watsonplatform.net/conversation/api", 
					password: "KlTaEaThYPyj",
					username: "7f06f702-4896-4fa1-ae4f-0cbcd202d8a8"
				} 
			}],
            discovery: [{
            	credentials: {
                	url: "https://gateway.watsonplatform.net/discovery/api",
                	username: "23a39b1a-7246-4db3-8606-46cc491c666d",
                	password: "fxFfWfN0OhjZ"
				}
			}]
		}),
		// conversation creds
		workspace_id: "dbfe8471-d25b-4aab-89d1-f700fe64edd7", 
		conversation_version: "2017-04-21",
		// disco creds
		environment_id: "1f7306af-7f11-4b82-8e65-28f30bd951a7",
		collection_id: "b2ccaff5-3301-42bd-871f-2209022fb429",
		discovery_version: "2017-04-27"
};