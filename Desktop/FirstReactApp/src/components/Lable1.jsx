function show(){
    document.querySelector('.mainImg2').style.display = "block";
  }
  function hide(){
    document.querySelector('.mainImg2').style.display = "none";
  }
function Label1(){
    console.log('hello from child page');
    return(
        <p className='child' onClick={show}>
            This is me from component calling <br/>
            Click me tooooooo
            <img onClick={hide} className="mainImg2" src='src/assets/dog2.png' width="200px" height="200px"/>
        </p>
    )
}

export default Label1;