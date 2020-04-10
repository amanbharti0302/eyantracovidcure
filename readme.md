	COVIDCARE WEBSITE : https://github.com/amanbharti0302/eyantracovidcure

Covidcare project includes the following feature:-
	1- The person who requires commodities can list them and upload it to the website which will be
	 visible to all the shopkeepers nearby. Once the shopkeeper is assured of the availibility of
	 enlisted items and finds the delivery destination in his vicinity, he can accept the order and
	 deliver it to the buyer. This will minimize social interaction and encourage social distancing.

	2- User can know the hospitals in his vicinity. When user enters the place name,
	 he gets list of hospitals nearby him with a map for a better user experience.
	 This can be useful if immediate assistance is required.

	3- There is provision of live updates of infected ones and deaths by pictorial representation
	 like graphs along with region wise representation.

	4- It has a chatbot that answers the questions related to COVID-19 asked by user.

	5- A link of official facebook, Telegram and Messenger page of government is provided on
	 website which provides live news related to COVID-19.

	6- It also contains information about Symptoms, Do's and Don'ts and common QnA of people.

For Setup:-
	step 1: Clone repository in local storage.
	step 2: since code is written in node js. So please download and install stable version
	 of node javascript engine from 'https://nodejs.org/en/'.
	step 3: open cmd and copy the full path of folder.
	step 4: run 'node i' in cmd.(this will install all required package for this app)
	step 5:Setup MongoDB database.
	step 6: create config.env file in the repository.
	step 7: Add mongoDB database link with name 'DATABASE' in config.env.
		(ie- DATABASE=mongodb+srv://<username>:<password>@cluster0-hhnva.mongodb.net
		/check?retryWrites=true&w=majority)
	step 5: Add following code in config.env file.
			NODE_ENV=development
			PORT=3000
			DATABASE_PASWORD= <password>
			JWT_SECRET= Your_Secret
			JWT_EXPIRES_IN = 90d
			email = "your email with access of less secure apps"
			password = "your email password with havin a capital case ,symbols,and at least one digit"
		(*here password referes to your mongoDB account password.)
	step 7: Create Google map api key and include it's scrypt src in config.env with name 'map_key'.
		(ie- map_key: https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places)
	
Gotcha, setup completed. run 'localhost:{PORT of config.env||3000}/' in browser and get benifits of our precious website.
to run server type "npm start" in your command line interface
	
NOTE:  if there is any problem of getting statedata on database then in please make all collection mentioned in the statedataSchema of model   folder in database for one time.Do not insert any data in it.Later Server will automatically update it.