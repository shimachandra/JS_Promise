//Question:1
//Create a function fetchData that returns a Promise. 
//The Promise should resolve with the string "Data fetched successfully" after a delay of 2 seconds. 
//Use setTimeout to simulate the delay. Test your function by calling it and using .then() to log the resolved value to the console.  

function fetchData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            message="Data fetched Successfully..";
            resolve(message);
        },2000);
    });
}

fetchData()
.then((value)=>{
    console.log(value);
});

//Question:2
// Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data". 
//Modify your test to handle this rejection using .catch().  

function newFetchData()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            message="Failed to fetch data..!!!!";
            rej(message);
        },2000);
    });
}

newFetchData()
.catch((value)=>{
    console.log(value);
});



//Question:3
//Convert the fetchData function from Question  1 to use async and await instead of .then(). 
//Ensure to handle errors using try and catch

function tryFetchData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            message="Try Catch Data fetched Successfully..";
            resolve(message);
        }, 2000);
    });
}

async function catFetchData()
{
    try
    {
        const data= await tryFetchData();
        console.log(data);   
    }
    catch(error)
    {
        console.log(error);
    }
}
catFetchData();



//Question:4

//Write a function "getCountryData" that fetches data from the public API " https://restcountries.com/v3.1/all ". 
//Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data on the web page. 
//Make sure to handle any errors that might occur during the fetch operation and display an appropriate error message in the div 
//if the fetch fails. (deploy the webpage on github)


function getCountries()
{
    document.getElementById('container').innerHTML=''

    fetch('https://restcountries.com/v3.1/all')
    .then((res)=>{
        
        return res.json()
    })

    .then((result)=>{
        console.log(result);

        result.forEach((cnty) => { 

            const cntyBox=document.createElement('div')
            cnty.className='box'

            const heading=document.createElement('h4')
            heading.innerHTML=cnty.name.common

            const img=document.createElement('img')
            img.className='imgtag'
            img.src=cnty.flags.png

            cntyBox.appendChild(heading)
            cntyBox.appendChild(img)

            document.getElementById('container').appendChild(cntyBox)
            
        })      
    })
    .catch(err=>{
        console.log(err)
    
        const heading=document.createElement('h4')
        heading.innerHTML="Error occured..!!"

        document.getElementById('container').appendChild(heading)
    
    })
}

























