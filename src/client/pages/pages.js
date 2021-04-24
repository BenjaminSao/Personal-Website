"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pages = void 0;
const start_view_model_1 = require("./start/start-view-model");
const about_me_view_model_1 = require("./about-me/about-me-view-model");
const projects_view_model_1 = require("./projects/projects-view-model");
const contact_view_model_1 = require("./contact/contact-view-model");
const experience_view_model_1 = require("./experience/experience-view-model");
const new_start_view_model_1 = require("./new-start/new-start-view-model");
exports.pages = [
    start_view_model_1.StartViewModel,
    about_me_view_model_1.AboutMeViewModel,
    projects_view_model_1.ProjectsViewModel,
    contact_view_model_1.ContactViewModel,
    experience_view_model_1.ExperienceViewModel,
    new_start_view_model_1.NewStartViewModel
];
//# sourceMappingURL=pages.js.map