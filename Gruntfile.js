module.exports= function(grunt){

grunt.initConfig({

pkg:grunt.file.readJSON('package.json'),

		cssmin:{

			combine:{

				files:{

					'public/assets/css/main.css':['public/assets/css/style.css','public/assets/css/test.css']

				}
			}
		}


		uglify:{

			dist:{
				files:{

					'public/assets/js/main.min.js':['public/assets/js/test.js','public/assets/js/hello.js']

				}
			}

		}


})

grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');


grunt.registerTask('default',['cssmin','uglify']);






}