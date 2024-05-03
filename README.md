Spotify Display for OBS!

Requirements:

- Have your Spotify connected to your Discord Account
- Join the Lanyard Discord Server (lets API see Spotify activity through Discord)
- Put Discord ID into the search bar and submit
- In OBS, simply make a browser capture of the website and crop to the desired size

IF YOU DONT WANT TO USE THE SEARCH BAR AND JUST WANNA AUTO HAVE IT TO YOUR ID

- In App.jsx:33, remove the userInfo param
- In services/info.js:4, replace the info concatenation and just add your Discord ID at the end of the URL
- Remove everything that has to do with state variables that aren't used in the useEffect hook
- Remove the Form component
