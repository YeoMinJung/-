let scene = 0;
let totalSceneNum = 8;

let videoFileList = [
's1.mp4',
's2.mp4',
's3.mp4',
's4.mp4',
's5.mp4',
's6.mp4',
's7.mp4',
's8.mp4'
];

let prevBtn = document.querySelector('#arrow1');
let nextBtn = document.querySelector('#arrow2');

let textBtn = document.querySelector('#textbutton');

let videoElem = document.querySelector('#myVideo');

let textBox = document.querySelectorAll('.textbox1');

prevBtn.addEventListener('click', prevFn);
nextBtn.addEventListener('click', nextFn);

textBtn.addEventListener('click', showText);

videoElem.addEventListener('click', removeTextBox);

function prevFn()
{
    if(scene == 0)
    {
        return;
    }
    else{
        scene--;
        removeTextBox();
    }
    render(scene);
}

function nextFn()
{
    if(scene == totalSceneNum-1)
    {
        return;
    }
    else{
        scene++;
        removeTextBox();

    }
    render(scene);
}

function render(_scene)
{
    console.log(_scene);
    videoElem.setAttribute('src', './img/' + videoFileList[_scene] );
}

function showText()
{
    if(!textBox[scene].classList.contains('show'))
    {
         console.log('텍스트 창 열림');
        textBox[scene].classList.add('show');
    }else
    {
        console.log('텍스트 창 닫힘');
        textBox[scene].classList.remove('show');
    }
    
}

function removeTextBox()
{
    for(let i = 0; i < textBox.length; i++)
    {
        textBox[i].classList.remove('show');
    }
}
