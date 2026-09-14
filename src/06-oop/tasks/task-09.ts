/**
 * A school LMS needs to send notifications to students.
 * The system supports three notification types:
 * - Email, example:
 * --------------------------------------------------
 * To: student@example.com
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - SMS, example:
 * --------------------------------------------------
 * To: +628123456789
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - Push Notification, example:
 * --------------------------------------------------
 * Device: ST001
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * Tasks:
 * - Create class Notification with property "message" and method "send()"
 * - Create children class of Notification such as EmailNotification, SMSNotification, PushNotification
 * - each child should override "send()"
 */

class Notification {
    constructor(public massage: string) {}

    send(): void {
        console.log(this.massage)
    }
}

class EmailNotif extends Notification {
    constructor(
        private email: string,
        massage: string
    ) {
        super(massage)
    }

    send(): void {
        console.log(`Email to ${this.email}: ${this.massage}`);
    }
}

class EsemesNotif extends Notification {
    constructor(
        private noHP: string,
        massage: string
    ) {
        super(massage)
    }

    send(): void {
        console.log(`SMS to ${this.noHP}: ${this.massage}`)
    }
}

class pushNotif extends Notification {
    constructor(
        private ID: string,
        massage: string
    ) {
        super(massage)
    }

    send(): void {
        console.log(`Send to ID ${this.ID}: ${this.massage}`);
        
    }
}

const emailNotification = new EmailNotif(
    "pbalap191109@gmail.com",
    "Your Tugas Has Dinilai"
)

const SMSNotification = new EsemesNotif(
    "+62 821-4337-1246",
    "Your Tugas Has Dinilai"
)

const pushNotification = new pushNotif(
    "STYX-1207-OL",
    "Your Tugas Has Dinilai"
)



const notifications: Notification[] = [
    emailNotification,
    SMSNotification,
    pushNotification
];

for (const notification of notifications) {
    notification.send();
}