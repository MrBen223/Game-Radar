
function DarkMode() {
    var element = document.body;
    element.classList.toggle("Dark-Mode");
}

function SmallText(){
    var element = document.body;
    element.classList.toggle('Small-Text')
    element.classList.remove('Medium-Text')
    element.classList.remove('Large-Text')
}

function MediumText(){
    var element = document.body;
    element.classList.toggle('Medium-Text')
    element.classList.remove('Small-Text')
    element.classList.remove('Large-Text')
}

function LargeText(){
    var element = document.body;
    element.classList.toggle('Large-Text')
    element.classList.remove('Small-Text')
    element.classList.remove('Medium-Text')
}

function ChangeText(){
    var name = document.getElementById("WelcomeForm").fname.value;
    var welcome = "Thank you for submitting" + name + " ! <br> <a href='Contact.html'><button Submit another form></button></a>";
    document.getElementById("WelcomeText").innerHTML = welcome;
}
