const icons = {
    success: 'fa-solid fa-circle-check',
    info: 'fa-solid fa-circle-info',
    message: 'fa-solid fa-circle-exclamation'
}

function toast({ title, message, type, duration }) {
    const main = document.getElementById('toast')
    if (main) {
        const toast = document.createElement('div')
        toast.classList.add('toast', `toast--${type}`)
        const delay = duration/1000
        toast.style.animation = `fadeIn .4s ease, fadeOut 1s linear ${delay}s forwards`
        const icon = icons[type]
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__message">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `
        main.appendChild(toast)

        setTimeout(() => {
            main.removeChild(toast)
        }, duration + 1000);
    }
}

function showSuccessToast() {
    toast({
        title: 'Success!',
        message: 'Registered successfully!',
        type: 'success',
        duration: 3000
    })
}

function showInfoToast() {
    toast({
        title: 'Info:',
        message: 'This is your info',
        type: 'info',
        duration: 3000
    })
}

function showWarnToast() {
    toast({
        title: 'Warning!',
        message: 'Registered fail!',
        type: 'message',
        duration: 3000
    })
}