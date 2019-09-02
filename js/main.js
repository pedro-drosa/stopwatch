class Stopwatch
{
    constructor()
    {
        this._interval = null
        this._isRunning = false
        this._hoursEl = document.querySelector('[data-display="hours"]')
        this._minutesEl = document.querySelector('[data-display="minutes"]')
        this._secondsEl = document.querySelector('[data-display="seconds"]')
        this._milisecondsEl = document.querySelector('[data-display="miliseconds"]')
        this._btnPlay = document.querySelector('[data-control="play"]')
        this.resetTime()
        this.initButtons()
    }
    resetTime()
    {
        this._days = 0
        this._hours = 0
        this._minutes = 0 
        this._seconds = 0
        this._miliseconds = 0
        this.minutesEl = `0${this._minutes}`
        this.hoursEl = `0${this._hours}`
        this.secondsEl = `0${this._seconds}`
        this.milisecondsEl = `0${this._miliseconds}`
    }
    initButtons()
    {
        const buttons = document.querySelectorAll('[data-control]')
        buttons.forEach((button)=>{
            button.addEventListener('click',(event)=>{
                const action = event.currentTarget.dataset.control
                this.initEvents(action)
            })
        })
    }
    initEvents(value)
    {
        switch (value) {
            case value = 'play':
                this.play()
                break;
            case value = 'pause':
                this.pause()
                break;
            case value = 'restart':
                this.restart()
                break;
            default:
                console.log(value,'BUGEI...')
                break;
        }
    }
    logic()
    {
        if(this._miliseconds == 99){
            this._miliseconds = 0
            this._seconds++
            this._seconds < 10 ? this.secondsEl = `0${this._seconds}`: this.secondsEl = this._seconds
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
        }
        this._miliseconds++
        this._miliseconds < 10 ? this.milisecondsEl = `0${this._miliseconds}` : this.milisecondsEl = this._miliseconds
    }
    play()
    {
        if(!this._isRunning){
            this._isRunning = true
            this._btnPlay.setAttribute('disabled','')
            this._interval = setInterval(() => {
                this.logic();
            }, 10);
        }
    }
    resetPlayState()
    {
        this._isRunning = false
        this._btnPlay.removeAttribute('disabled','')
        clearInterval(this._interval)
    }
    pause()
    {
        if(this._isRunning){
            this.resetPlayState()
        }
    }
    restart()
    {
        if(this._miliseconds > 0){
            this.resetPlayState()
            this.resetTime()
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
    set milisecondsEl(value)
    {
        this._milisecondsEl.innerText = value
    }
}
const stopwatch = new Stopwatch()