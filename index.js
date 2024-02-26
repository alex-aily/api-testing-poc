const newman = require("newman")
const newman_reporter_HTML_extra = require("newman-reporter-htmlextra")

newman.run({
    collection: "https://api.postman.com/collections/30087989-2e587edc-b536-41fe-938f-ed9d232813c3?access_key=PMAT-01HQJNSYRXEQH91CHZDHAMYQ56",
    reporters: ["cli","html"]
}, function (error) {
    console.log(error);
});