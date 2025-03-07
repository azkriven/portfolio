const person = {
    firstName: "Selene",
    lastName: "Yu",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Design Engineer",
    avatar: "/images/avatar.jpg",
    location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};
