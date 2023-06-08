function sc(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9w_HQHnUv/model.json",modelReady)
}
function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error,results){

    if(error){
        console.error(error)
    }
    else{
        console.log(results)

        random_no_r=Math.floor(Math.random()*255)+1
        random_no_g=Math.floor(Math.random()*255)+1
        random_no_b=Math.floor(Math.random()*255)+1

        document.getElementById("result_lbl").style.color="rgb("+random_no_r+","+random_no_g+","+random_no_b+")"
        document.getElementById("result_con").style.color="rgb("+random_no_r+","+random_no_g+","+random_no_b+")"
        
        document.getElementById("result_lbl").innerHTML= " Decteing the voice of - "+results[0].label
        document.getElementById("result_con").innerHTML= " Accuracy - "+(results[0].confidence*100).toFixed(1)+ "%"

        img=document.getElementById("img")
        

        if(results[0].label=="Bark"){
           
            img.src="Dog.png"
        
        }
        
         else if(results[0].label=="Meow"){
           
            img.src="cat.jpg"
            
        }

        else if(results[0].label=="Moo"){
           
            img.src="cow.webp"

}

else if(results[0].label=="Sqeek"){

    img.src="quirrel.jpg"
}

else if(results[0].label=="Background Noise"){

    img.src="hearing.png"
}


}}

const style=
`
padding:10px;
background:white;
color:green;
font-style:italic;
border:1px solid black;
font-size:2em;

`
console.log("%cStyling the console",style)