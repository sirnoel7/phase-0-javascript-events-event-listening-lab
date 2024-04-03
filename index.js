const entry = document.getElementById('button');
function addingEventListener() {
     entry.addEventListener('click', clicker);

};

function clicker(){
    HTMLFormControlsCollection.log('clicked!');
};