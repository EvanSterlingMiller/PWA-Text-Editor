const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.defferedPrompt = event
    butInstall.style.visability = 'visable'
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferedPrompt
    if (!promptEvent) {
        return
    }
    promptEvent.prompt()
    window.defferedPrompt = null
    butInstall.classList.toggle('hidden', true)
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.defferedPrompt = null
});
