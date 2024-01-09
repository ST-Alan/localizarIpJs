import fs from 'fs';
import axios from 'axios';

const ip = '8.8.8.8';
const token = '4e93e8f106d465';

// Utiliza Axios para realizar la solicitud HTTP
axios.get(`https://ipinfo.io/${ip}?token=${token}`)
  .then(response => {
    const data = response.data;
    console.log(data);

    // Crear un string HTML con la información
    const htmlContent = `
      <html>
        <head>
          <title>Información de IP</title>
        </head>
        <body>
          <h1>Información de IP</h1>
          <p>IP: ${data.ip}</p>
          <p>Location: ${data.city}, ${data.region}, ${data.country}, Código Postal:${data.postal}</p>
          <p>Hostname: ${data.hostname}</p>
          <p>Long, Lat: ${data.loc}</p>
          <p>Empresa: ${data.org}</p>
          <p>Zona Horaria: ${data.timezone}</p>

        </body>
      </html>
    `;

    // Guardar el string HTML en un archivo llamado 'index.html'
    fs.writeFileSync('index.html', htmlContent);

    console.log('La información se ha guardado en index.html');
  })
  .catch(error => console.error('Error fetching data:', error));
