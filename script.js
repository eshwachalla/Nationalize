const output = document.getElementById('output')
const button = document.getElementById('submit')
const div = document.createElement("div");
const ul = document.createElement("ul");

button.disabled = false;

div.style.margin = "15px 30px"
      div.style.marginLeft = "15px"
      div.style.fontSize = "18px"
      div.style.fontFamily = "sans-serif"
function reload() {
location.reload();
}

async function callapi() {
    const input = await document.getElementById('fname').value
    
    try {
      let response = await fetch(`https://api.nationalize.io/?name=${input}`)
      let data = await response.json()
      
      if(!data.country == '' || null) {
          button.disabled = true
      }

      console.log(data);
      const name = document.createElement("h2"); 
      
      name.innerText = ` Name: ${data.name}`;
      div.append(name);
      
          if(data.country == '' || null) {
              alert('no user')
              return
          }else {
              

            for (let i = 0; i < 2 ;i++){
            const li = document.createElement("li"); 
            const lis = document.createElement("li"); 
            li.style.listStyle = "none"
            li.style.fontSize = "18px"
            li.style.fontFamily = "sans-serif"
            lis.style.listStyle = "none"
            lis.style.fontSize = "18px"
            lis.style.fontFamily = "sans-serif"
            
            
            li.innerHTML = `Country: ${data.country[i].country_id}`;               
            lis.innerHTML = `Country: ${data.country[i].probability}`;               
            ul.appendChild(li);
            ul.appendChild(lis);
            div.append(ul);
            }
        }

    
        
        
        output.appendChild(div);
    
    

    }
    catch(e) {
      console.log('Error!', e);
    }
}
