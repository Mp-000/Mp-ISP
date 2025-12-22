// Helper LocalStorage
function getData(key){
return JSON.parse(localStorage.getItem(key)) || [];
}
function saveData(key, data){
localStorage.setItem(key, JSON.stringify(data));
}
function setSession(user){
localStorage.setItem('session', JSON.stringify(user));
}
function getSession(){
return JSON.parse(localStorage.getItem('session'));
}
function clearSession(){
localStorage.removeItem('session');
}
```javascript
function getData(key){
return JSON.parse(localStorage.getItem(key)) || [];
}
function saveData(key, data){
localStorage.setItem(key, JSON.stringify(data));
}
