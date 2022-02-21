var list = document.querySelectorAll(".drum");
for(let i=0;i<list.length;i++)
{
    list[i].addEventListener("click",function(){handleEvent(this.classList[0])});    
}
document.addEventListener("keydown", function(event){handleEvent(event.key)});
function handleEvent(obj)
{
    var sound;
    switch(obj)
        {
            case 'w':
                sound = "crash";
                break;
            case 'a':
                sound = "kick-bass";
                break;
            case 's':
                sound = "snare";
                break;
            case 'd':
                sound = "tom-1";
                break;
            case 'j':
                sound = "tom-2";
                break;
            case 'k':
                sound = "tom-3";
                break;
            case 'l':
                sound = "tom-4";
                break;
        }
        var audio = new Audio("sounds/"+ sound +".mp3");
        audio.play();
}