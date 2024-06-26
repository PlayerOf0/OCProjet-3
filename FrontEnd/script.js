	
		const reponse = await fetch("http://localhost:5678/api/works");
		const projects = await reponse.json();
		console.log(projects);
		

		
        const sectionGallery = document.querySelector(".gallery");

		
        for (let i = 0; i < projects.length; i++){
		
            const projet = projects[i];
            const elementFigure = document.createElement("figure");
            const elementImg = document.createElement("img");
            elementImg.src = projet.imageUrl;
            elementImg.alt = projet.title;
            
            const elementFigcaption = document.createElement("figcaption");
            elementFigcaption.innerText = projet.title;
            
            elementFigure.appendChild(elementImg);
            elementFigure.appendChild(elementFigcaption);
            
            sectionGallery.appendChild(elementFigure);
    
        }

        const cat = await fetch("http://localhost:5678/api/categories");
		const cats = await cat.json();
		console.log(cats);


        const sectionCat = document.querySelector(".cat");
        
        for (let i = 0; i < cats.length; i++){
		
            const projet = cats[i];
           
            const elementCat = document.createElement("a");
            elementCat.innerText = projet.name;
            
            

            sectionCat.appendChild(elementCat);
    
        }





        // connexion 

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche le rechargement de la page
        
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const messageDiv = document.getElementById('message');
        
            // Exemple de validation simple
            if (email === 'ali' && password === 'ali') {
                messageDiv.textContent = 'Connexion réussie !';
                messageDiv.style.color = 'green';
                console.log("bien jouer t'es bien connecter");
            } else {
                messageDiv.textContent = 'Email ou mot de passe incorrect.';
                messageDiv.style.color = 'red';
                console.log("tu n'est pas connecter");
            }
        });
        


        
