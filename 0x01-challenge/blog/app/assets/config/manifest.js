# config/initializers/assets.rb

Rails.application.config.assets.precompile += %w(*.js *.css)

# app/assets/config/manifest.js

//= link_tree ../images
//= link_directory ../javascripts .js
//= link_directory ../stylesheets .css

