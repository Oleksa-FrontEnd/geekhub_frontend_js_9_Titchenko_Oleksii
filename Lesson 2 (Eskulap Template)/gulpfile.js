let gulp        = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    uglify = require('gulp-uglify'), // Подключаем для минификации js файлов
    concat = require('gulp-concat'); // Подключаем для конкатинации файлов
   // rename = require('gulp-rename'); // Подключаем

gulp.task('scss', function(){ // Создаем таск Sass
    return gulp.src('app/scss/**/*.scss') // Берем источник
        //.pipe(sass({outputStyle: 'compressed'})) // Преобразуем Sass в CSS посредством gulp-sass (compressed - минифицировать css)
        .pipe(sass({outputStyle: 'expandet'})) // Преобразуем Sass в CSS посредством gulp-sass (expandet - стиль переноса/compressed минифицировать css)
        //.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){ // Создаем таск html
    return gulp.src('app/*.html') // Берем источник
          .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){ // Создаем таск script для слижения изменений в main.js
    return gulp.src('app/js/*.js') // Берем источник
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){ // Создаем таск js
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_mudules/magnific-popup/dist/jquery.magnific-popup.js'   //что-то ругается на команду gulp js
    ]) // Берем источник
        .pipe(concat('libs.min.js'))   //название минифицированого файла после конкатинации
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))                  //путь куда выкидываем
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
     browserSync.init({ // Выполняем browserSync
       server: { // Определяем параметры сервера
          baseDir: 'app/' // Директория для сервера - app
       }
     });
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss')); // Наблюдение за sass файлами
    gulp.watch('app/*.html', gulp.parallel('html')) // Наблюдение за html файлом
    gulp.watch('app/js/*.js', gulp.parallel('script')) // Наблюдение за js файлами
});

gulp.task('default', gulp.parallel('scss', 'script', 'browser-sync', 'watch'))

// notify: false // Отключаем уведомления
//.pipe(sass().on('error', sass.logError)) //чтобы не викидывал fatal Error при написпнии ошибки
//указывает в какой строке ошибка

