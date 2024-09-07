//the code to check which key I pressed on the keyboard
// document.addEventListener('keydown', function(event) {
//     document.getElementById('key').innerHTML = `you pressed ${event.key}`;
// });


//now the actual project
console.log("Project 5");

const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    insert.innerHTML= `
        <div class='color'>
            <table>
                <tr>
                    <th>Key</th>
                    <th>Keycode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key ===" "?"Space":e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `
})
