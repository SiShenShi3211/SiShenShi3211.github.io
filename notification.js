
/*NOTIFICATION SCRIPT FROM EXAMPLE pushonotifications.js*/

// run notification after web page fully loads
$(document).ready(function(){

    /* value in Notification.permission can be: default, granted or denied. */
if (Notification.permission === 'default') {
    /* The Notification.requestPermission() shows the prompt pop up window to the user. It returns a promise that resolves to the value of permission */
    Notification.requestPermission().then (result => {
        if (result === 'denied') {
            console.log('Permission denied')
            return
        }

        if (result === 'granted') {
            console.log('Permission granted')
            
            // // the code that runs when user allows notifications
            // serviceWorkerRegistration.pushManager.getSubscription()
            //     .then (subscription => {
            //         if (!subscription) {
            //             console.log("No sub")
            //             const applicationServerKey = ''
            //             serviceWorkerRegistration.pushManager.subscribe({
            //                 userVisibleOnly: true, // All push notifications from server should be displayed to the user
            //                 applicationServerKey // VAPID Public key
            //             })
            //         } else {
            //             console.log("sub")
            //             saveSubscriptionInDB(subscription, userId) // A method to save subscription token in the database
            //         }
            //     })
        }
    })
}



})


