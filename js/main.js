class Stopwatch
{
    constructor()
    {
        this._interval = null
        this._isRunning = false
        this._hoursEl = document.querySelector('[data-display="hours"]')
        this._minutesEl = document.querySelector('[data-display="minutes"]')
        this._secondsEl = document.querySelector('[data-display="seconds"]')
        this._btnPlay = document.querySelector('[data-control="play"]');
        this._btnPause = document.querySelector('[data-control="pause"]');
        this._btnRestart = document.querySelector('[data-control="restart"]');
        this.resetTime()
        this.initEvents();
    }
    resetTime()
    {
        this._hours = 0
        this._minutes = 0 
        this._seconds = 0
    }
    initEvents()
    {
        this._btnPlay.addEventListener('click',()=>{
            this.play()
        })

        this._btnPause.addEventListener('click',()=>{
            this.pause()
        })

        this._btnRestart.addEventListener('click',()=>{
            this.restart()
            this._btnPlay.removeAttribute('disabled','')
        })
    }
    play()
    {
        if(this._isRunning == false){
            this._isRunning = true
            console.log('play',this._isRunning)
            this._btnPlay.setAttribute('disabled','')
            this._interval = setInterval(() => {
                if(this._seconds == 60){
                    this._seconds = 0
                    this._minutes++
                    if (this._minutes < 10) {
                        this._minutesEl.innerText = `0${this._minutes}`
                    }else{
                        this._minutesEl.innerText = this._minutes
                    }
                    if (this._minutes == 60) {
                        this._minutes = 0
                        this._hours++
                        if(this._hours < 10){
                            this._hoursEl.innerText = `0${this._hours}`
                        }else{
                            this._hoursEl.innerText = this._hours
                        }
                    }
                }
                this._seconds++
                if (this._seconds < 10) {
                    this._secondsEl.innerText = `0${this._seconds}`
                }else{
                    this._secondsEl.innerText = this._seconds
                }
            }, 0);
        }
    }
    pause()
    {
        if(this._isRunning){
            this._isRunning = false;
            console.log('pause',this._isRunning)
            clearInterval(this._interval)
            this._btnPlay.removeAttribute('disabled','')
        }
    }
    restart()
    {
        if(this._seconds > 0){
            this._isRunning = false
            console.log('restart',this._isRunning)
            this.resetTime()
            clearInterval(this._interval)
            this._minutesEl.innerText = `0${this._minutes}`
            this._hoursEl.innerText = `0${this._hours}`
            this._secondsEl.innerText = `0${this._seconds}`
        }
    }
}
const stopwatch = new Stopwatch()