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
        this._days = 0
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
    logic()
    {
        if(this._seconds == 59){
            this._seconds = -1
            this._minutes++
            this._minutes < 10 ? this.minutesEl = `0${this._minutes}`: this.minutesEl = this._minutes
            if (this._minutes == 60) {
                this._minutes = -1
                this._hours++
                this._hours < 10 ? this.hoursEl = `0${this._hours}`: this.hoursEl = this._hours
            }
            if(this._hours == 23){
                this._hours = -1
                this._days++
            }
        }
        this._seconds++
        this._seconds < 10 ? this.secondsEl = `0${this._seconds}`: this.secondsEl = this._seconds
    }
    play()
    {
        if(this._isRunning == false){
            this._isRunning = true
            this._btnPlay.setAttribute('disabled','')
            this._interval = setInterval(() => {
                this.logic();
            }, 1000);
        }
    }
    pause()
    {
        if(this._isRunning){
            this._isRunning = false;
            clearInterval(this._interval)
            this._btnPlay.removeAttribute('disabled','')
        }
    }
    restart()
    {
        if(this._seconds > 0){
            this._isRunning = false
            this.resetTime()
            clearInterval(this._interval)
            this.minutesEl = `0${this._minutes}`
            this.hoursEl = `0${this._hours}`
            this.secondsEl = `0${this._seconds}`
        }
    }
    set hoursEl(value)
    {
        this._hoursEl.innerText = value
    }
    set minutesEl(value)
    {
        this._minutesEl.innerText = value
    }
    set secondsEl(value)
    {
        this._secondsEl.innerText = value
    }
}
const stopwatch = new Stopwatch()