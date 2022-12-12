"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./src/pages/api/index.ts":
/*!********************************!*\
  !*** ./src/pages/api/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ certChecker)\n/* harmony export */ });\nfunction certChecker(req, res) {\n    const tls = req.socket;\n    if (tls.authorized) {\n        res.writeHead(200);\n        const clientCert = tls.getPeerCertificate();\n        // Read the certificate data\n        const subject = clientCert.subject;\n        const issuer = clientCert.issuer;\n        const validFrom = clientCert.valid_from;\n        const validTo = clientCert.valid_to;\n        // Use the certificate data as needed\n        return res.status(200).end(`The client certificate was issued to ${subject.CN} by ${issuer.CN} and is valid from ${validFrom} to ${validTo}.`);\n    }\n    return res.status(401).end(\"Invalid client certificate authentication.\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFHZSxTQUFTQSxZQUFZQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQzdFLE1BQU1DLE1BQU1GLElBQUlHLE1BQU07SUFDdEIsSUFBSUQsSUFBSUUsVUFBVSxFQUFFO1FBQ2xCSCxJQUFJSSxTQUFTLENBQUM7UUFDZCxNQUFNQyxhQUFhSixJQUFJSyxrQkFBa0I7UUFFekMsNEJBQTRCO1FBQzVCLE1BQU1DLFVBQVVGLFdBQVdFLE9BQU87UUFDbEMsTUFBTUMsU0FBU0gsV0FBV0csTUFBTTtRQUNoQyxNQUFNQyxZQUFZSixXQUFXSyxVQUFVO1FBQ3ZDLE1BQU1DLFVBQVVOLFdBQVdPLFFBQVE7UUFFbkMscUNBQXFDO1FBQ3JDLE9BQU9aLElBQUlhLE1BQU0sQ0FBQyxLQUFLQyxHQUFHLENBQ3hCLENBQUMscUNBQXFDLEVBQUVQLFFBQVFRLEVBQUUsQ0FBQyxJQUFJLEVBQUVQLE9BQU9PLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRU4sVUFBVSxJQUFJLEVBQUVFLFFBQVEsQ0FBQyxDQUFDO0lBRXRILENBQUM7SUFFRCxPQUFPWCxJQUFJYSxNQUFNLENBQUMsS0FBS0MsR0FBRyxDQUFDO0FBQzdCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYS1uZXh0Ly4vc3JjL3BhZ2VzL2FwaS9pbmRleC50cz84ZTY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBUTFNTb2NrZXQgfSBmcm9tIFwidGxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjZXJ0Q2hlY2tlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gIGNvbnN0IHRscyA9IHJlcS5zb2NrZXQgYXMgVExTU29ja2V0O1xyXG4gIGlmICh0bHMuYXV0aG9yaXplZCkge1xyXG4gICAgcmVzLndyaXRlSGVhZCgyMDApO1xyXG4gICAgY29uc3QgY2xpZW50Q2VydCA9IHRscy5nZXRQZWVyQ2VydGlmaWNhdGUoKTtcclxuXHJcbiAgICAvLyBSZWFkIHRoZSBjZXJ0aWZpY2F0ZSBkYXRhXHJcbiAgICBjb25zdCBzdWJqZWN0ID0gY2xpZW50Q2VydC5zdWJqZWN0O1xyXG4gICAgY29uc3QgaXNzdWVyID0gY2xpZW50Q2VydC5pc3N1ZXI7XHJcbiAgICBjb25zdCB2YWxpZEZyb20gPSBjbGllbnRDZXJ0LnZhbGlkX2Zyb207XHJcbiAgICBjb25zdCB2YWxpZFRvID0gY2xpZW50Q2VydC52YWxpZF90bztcclxuXHJcbiAgICAvLyBVc2UgdGhlIGNlcnRpZmljYXRlIGRhdGEgYXMgbmVlZGVkXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmVuZChcclxuICAgICAgYFRoZSBjbGllbnQgY2VydGlmaWNhdGUgd2FzIGlzc3VlZCB0byAke3N1YmplY3QuQ059IGJ5ICR7aXNzdWVyLkNOfSBhbmQgaXMgdmFsaWQgZnJvbSAke3ZhbGlkRnJvbX0gdG8gJHt2YWxpZFRvfS5gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5lbmQoXCJJbnZhbGlkIGNsaWVudCBjZXJ0aWZpY2F0ZSBhdXRoZW50aWNhdGlvbi5cIik7XHJcbn0iXSwibmFtZXMiOlsiY2VydENoZWNrZXIiLCJyZXEiLCJyZXMiLCJ0bHMiLCJzb2NrZXQiLCJhdXRob3JpemVkIiwid3JpdGVIZWFkIiwiY2xpZW50Q2VydCIsImdldFBlZXJDZXJ0aWZpY2F0ZSIsInN1YmplY3QiLCJpc3N1ZXIiLCJ2YWxpZEZyb20iLCJ2YWxpZF9mcm9tIiwidmFsaWRUbyIsInZhbGlkX3RvIiwic3RhdHVzIiwiZW5kIiwiQ04iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/index.ts"));
module.exports = __webpack_exports__;

})();