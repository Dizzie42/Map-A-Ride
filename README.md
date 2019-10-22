Map a Ride | Voyage-11 | https://chingu.io/ | Twitter: https://twitter.com/ChinguCollabs

<h1>Map A Ride</h1>
<p>This project was part of the Chingu's Voyage 11. It allows users to draw, save & update routes on a map. <br>The project was created with MERN stack (MongoDB, Express, React & Node) + Styled Components and bootstraped with Create-React-App.</p>
<h2>Prerequisites</h2>
<ul>
<li>A Heroku account for deployment.</li>
<li>A MongoDB account (Atlas or MLab).</li>
<li>A Mapbox account for using the Tiles & Directions API</li>
</ul>
<h2>Installing</h2>
<ol>
<li><p>Clone this repo.</p></li>
<li>
  <p>Install both server and client dependencies:</p>
  <code>npm install && npm run client-install</code></li>
<li>
  <p>Create and .env file & declare env variables for development:</p>
  <code>touch .env</code><br>
  <p>Env file:</p>
  <code>DATABASEURL='ENTER_DATABASEURL_HERE'</code><br>
<code>REACT_APP_MAPBOX_TOKEN=ENTER_PUBLIC_TOKEN_HERE</code>
</li>
</ol>
<h2>Development</h2>
<p>Run both server and client thanks to Concurrently package:</p>
<code>npm run dev</code>

<h2>Deployment</h2>
<p>This assumes you have installed Heroku CLI tools. Otherwise, you can always link your repo directly to your app in Heroku dashboard.</p>
<ol>
  <li>In the root directory of the repo, run <code>heroku create</code></li>
  <li>Run <code>git push heroku master</code> for building server and client and deploying.</li>
  <li>
  <p>For setting config variables in Heroku:</p>
  <code>heroku config:set CONFIG_VARIABLE=example_value</code>
  </li>
</ol>
<p>Take into account that as browser's native Geolocation API is deprecated for unsecured origins, there will be features that may work irregularly or not work at all. For getting free SSL on a free Heroku app you can follow this <a href='https://dev.to/densityx/setting-up-a-custom-domain-name-and-free-ssl-certificate-for-heroku-apps-2063' target='_blank' rel='noopener'>post</a>.</p>
