	
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

        

        
