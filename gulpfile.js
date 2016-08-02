var gulp		= require( 'gulp' )
	//, jshint	= require( 'gulp-jshint' )
	//, uglify	= require( 'gulp-uglify' )
	, concat	= require( 'gulp-concat' )
	, sass		= require( 'gulp-sass' )
	, util		= require( 'gulp-util' )
	, sourcemap	= require( 'gulp-sourcemaps' )
	, expect	= require( 'gulp-expect-file' )
	, minifyCSS	= require( 'gulp-minify-css' );


var paths		= {
	jsSrc		: 'src/js' 		// For file watcher
	, jsFiles	: [
		    'www/src/bower_components/prism/prism.js'
	]
	, jsDest	: 'www/dist/js'
	
	, scssSrc	: 'www/src/scss'
	, cssDest	: 'www/dist/css'
};



gulp.task( 'scripts', function() {

	return gulp.src( paths.jsFiles )
		.pipe( expect( paths.jsFiles ) )
		.pipe( sourcemap.init( { debug: true } ) )
			.pipe( concat( 'scripts.js' ) )
		.pipe( sourcemap.write( 'map' ) )
		.pipe( gulp.dest( paths.jsDest ) );

} );




gulp.task( 'styles', function() {

	return gulp.src( [ paths.scssSrc + '/main.scss' ] )

		.pipe( concat ( 'main.min.css' ) )
		.pipe( sass().on('error', util.log) )
		.pipe( minifyCSS() )
		.pipe( gulp.dest( paths.cssDest ) );

} );


gulp.task( 'watch', function() {

	gulp.watch( paths.scssSrc + '/**/*.scss', [ 'styles' ] );
	gulp.watch( paths.jsSrc + '/**/*.js', [ 'scripts' ] );

} );




gulp.task( 'default', [ 'styles', 'scripts', 'watch' ] );


