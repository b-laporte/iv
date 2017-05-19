
// tasks from David-Emmanuel Divernois (divdavem)

"use strict";

const gulp = require("gulp");
const path = require("path");
const rimraf = require("rimraf");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

const processWebpackErrors = function (done) {
    return (inputErr, result) => {
        let outputErr = inputErr;
        if (!outputErr) {
            const stats = result.toJson();
            if (stats.errors.length > 0) {
                outputErr = stats.errors;
            }
        }
        if (done) {
            done(outputErr);
        } else {
            if (outputErr) {
                console.log("The following error(s) occurred:\n", Array.isArray(outputErr) ? outputErr.join("\n") : outputErr);
            } else {
                console.log("Build successful!");
            }
        }
    };
};

gulp.task("build", function (done) {
    webpack(webpackConfig.tests).run(processWebpackErrors(done));
});

gulp.task("watch", function (done) {
    webpack(webpackConfig.tests).watch({}, processWebpackErrors());
});

gulp.task("clean", function (done) {
    rimraf(webpackConfig.tests.output.path, done);
});

gulp.task("static", function (done) {
    gulp.src("test/index.html").pipe(gulp.dest('dist'));
    return gulp.src("node_modules/jasmine-core/lib/jasmine-core/*").pipe(gulp.dest('dist/jasmine'));
});

gulp.task("default", ["build"]);

// dbmon build task
gulp.task("buildDbmon", function (done) {
    webpack(webpackConfig.dbmon).run(processWebpackErrors(done));
});

gulp.task("buildFlex", function (done) {
    webpack(webpackConfig.flex).run(processWebpackErrors(done));
});