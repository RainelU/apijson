const PERSONA = {
	"nombre": "Rainel",
	"apellido": "Urdaneta",
	"edad": 15,
	"nacionalidad": "Venezolano",
	"hobbie": "Develop"
};

const API_URL = "https://jsonplaceholder.typicode.com/posts/100";

fetch(API_URL)
	.then(function(response) {
		return response.json()
	}).then(function(json){
		//aqui trabajaremos de una vez
			const TITLE = json.title;
			const BODY = json.body;

			if (Array.isArray(json)) {
				for (var i = 0; i < json.length; i++) {
					const TITLE = json[i].title;
					const BODY = json[i].body;

					const DIV = document.getElementById("json");
					DIV.innerHTML += `
						<div class="divPost">
							<h1 class="allItems">${TITLE}</h1>
							<p class="allItems">${BODY}</p>
						</div>
					`;
				}
			}else{
				const DIV = document.getElementById("json");
					DIV.innerHTML += `
						<div class="divPost">
							<h1 class="allItems">${TITLE}</h1>
							<p class="allItems">${BODY}</p>
						</div>
				`;
			}
	});