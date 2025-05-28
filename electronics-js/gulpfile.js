const gulp = require('gulp'); // Import Gulp để sử dụng
const uglify = require('gulp-uglify'); // Plugin để nén JavaScript
const cleanCSS = require('gulp-clean-css'); // Plugin để nén CSS
const browserSync = require('browser-sync').create(); // Reload trình duyệt tự động

// 📌 **Tác vụ nén JavaScript**
gulp.task('minify-js', function() {
    return gulp.src('public/js/**/*.js') // Chọn tất cả JS trong thư mục public/js
        .pipe(uglify()) // Nén file JS
        .pipe(gulp.dest('dist/js')) // Lưu file đã nén vào thư mục dist/js
        .pipe(browserSync.stream()); // Reload trình duyệt tự động
});

// 📌 **Tác vụ nén CSS**
gulp.task('minify-css', function() {
    return gulp.src('public/css/**/*.css') // Chọn tất cả CSS
        .pipe(cleanCSS({ compatibility: 'ie8' })) // Nén CSS
        .pipe(gulp.dest('dist/css')) // Lưu vào thư mục dist/css
        .pipe(browserSync.stream()); // Cập nhật trình duyệt tự động
});

// 📌 **Theo dõi thay đổi file & tự động reload trình duyệt**
gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: './' // Thiết lập server từ thư mục gốc
        }
    });
    gulp.watch('public/js/**/*.js', gulp.series('minify-js')); // Theo dõi JS, tự động nén
    gulp.watch('public/css/**/*.css', gulp.series('minify-css')); // Theo dõi CSS, tự động nén
    gulp.watch('./*.html').on('change', browserSync.reload); // Reload khi file HTML thay đổi
});

// 📌 **Tác vụ mặc định**
gulp.task('default', gulp.series('minify-js', 'minify-css', 'watch'));
